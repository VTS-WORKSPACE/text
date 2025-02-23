<!--
  - @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
  -
  - @author Julius Härtl <jus@bitgrid.net>
  -
  - @license GNU AGPL version 3 or any later version
  -
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as
  - published by the Free Software Foundation, either version 3 of the
  - License, or (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  - GNU Affero General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with this program. If not, see <http://www.gnu.org/licenses/>.
  -
  -->

<template>
	<div class="menubar" :class="{ 'show': isVisible, 'autohide': autohide }">
		<input ref="imageFileInput"
			type="file"
			accept="image/*"
			aria-hidden="true"
			class="hidden-visually"
			@change="onImageUploadFilePicked">
		<div v-if="isRichEditor" ref="menubar" class="menubar-icons">
			<template v-for="(icon, $index) in allIcons">
				<EmojiPicker v-if="icon.class === 'icon-emoji'"
					:key="icon.label"
					class="menuitem-emoji"
					@selectData="emojiObject => addEmoji(icon, emojiObject)">
					<button v-tooltip="t('text', 'Insert emoji')"
						class="icon-emoji"
						:aria-label="t('text', 'Insert emoji')"
						:aria-haspopup="true"
						@click="toggleChildMenu(icon)" />
				</EmojiPicker>
				<Actions v-else-if="icon.class === 'icon-image'"
					:key="icon.label"
					ref="imageActions"
					class="submenu"
					:default-icon="'icon-image'"
					@open="toggleChildMenu(icon)"
					@close="onImageActionClose; toggleChildMenu(icon)">
					<button slot="icon"
						:class="{ 'icon-image': true, 'loading-small': uploadingImage }"
						:title="icon.label"
						:aria-label="icon.label"
						:aria-haspopup="true" />
					<ActionButton icon="icon-upload"
						:close-after-click="true"
						:disabled="uploadingImage"
						@click="onUploadImage()">
						{{ t('text', 'Upload from computer') }}
					</ActionButton>
					<ActionButton v-if="!isPublic"
						icon="icon-folder"
						:close-after-click="true"
						:disabled="uploadingImage"
						@click="showImagePrompt()">
						{{ t('text', 'Insert from Files') }}
					</ActionButton>
					<ActionButton v-if="!showImageLinkPrompt"
						icon="icon-link"
						:close-after-click="false"
						:disabled="uploadingImage"
						@click="showImageLinkPrompt = true">
						{{ t('text', 'Insert from link') }}
					</ActionButton>
					<ActionInput v-else
						icon="icon-link"
						:value="imageLink"
						@update:value="onImageLinkUpdateValue"
						@submit="onImageLinkSubmit()">
						{{ t('text', 'Image link to insert') }}
					</ActionInput>
				</Actions>
				<button v-else-if="icon.class"
					v-show="$index < iconCount"
					:key="icon.label"
					v-tooltip="getLabelAndKeys(icon)"
					:class="getIconClasses(icon)"
					:disabled="disabled(icon)"
					@click="clickIcon(icon)" />
				<template v-else>
					<div v-show="$index < iconCount || !icon.class"
						:key="icon.label"
						v-click-outside="() => hideChildMenu(icon)"
						class="submenu">
						<button v-tooltip="getLabelAndKeys(icon)"
							:class="childIconClasses(icon.children, )"
							@click.prevent="toggleChildMenu(icon)" />
						<div :class="{open: isChildMenuVisible(icon)}" class="popovermenu menu-center">
							<PopoverMenu :menu="childPopoverMenu(icon.children, icon)" />
						</div>
					</div>
				</template>
			</template>
			<Actions @open="toggleChildMenu({ label: 'Remaining Actions' })"
				@close="toggleChildMenu({ label: 'Remaining Actions' })">
				<template v-for="(icon, $index) in allIcons">
					<ActionButton v-if="icon.class && isHiddenInMenu($index) && !(icon.class === 'icon-emoji')"
						:key="icon.class"
						v-tooltip="getKeys(icon)"
						:icon="icon.class"
						:close-after-click="true"
						@click="clickIcon(icon)">
						{{ icon.label }}
					</ActionButton>
					<!--<template v-else-if="!icon.class && isHiddenInMenu($index)">
						<ActionButton v-for="childIcon in icon.children"
							:key="childIcon.class"
							:icon="childIcon.class"
							@click="clickIcon(childIcon)">
							v-tooltip="getKeys(childIcon)"
							{{ childIcon.label }}
						</ActionButton>
					</template>-->
				</template>
			</Actions>
		</div>
		<slot>
			Left side
		</slot>
	</div>
</template>

<script>
import Tooltip from '@nextcloud/vue/dist/Directives/Tooltip'
import menuBarIcons from './../mixins/menubar'
import isMobile from './../mixins/isMobile'

import Actions from '@nextcloud/vue/dist/Components/Actions'
import ActionButton from '@nextcloud/vue/dist/Components/ActionButton'
import ActionInput from '@nextcloud/vue/dist/Components/ActionInput'
import PopoverMenu from '@nextcloud/vue/dist/Components/PopoverMenu'
import EmojiPicker from '@nextcloud/vue/dist/Components/EmojiPicker'
import ClickOutside from 'vue-click-outside'
import { getCurrentUser } from '@nextcloud/auth'
import { showError } from '@nextcloud/dialogs'

const imageMimes = [
	'image/png',
	'image/jpeg',
	'image/jpg',
	'image/gif',
	'image/x-xbitmap',
	'image/x-ms-bmp',
	'image/bmp',
	'image/svg+xml',
	'image/webp',
]

export default {
	name: 'MenuBar',
	components: {
		ActionButton,
		ActionInput,
		PopoverMenu,
		Actions,
		EmojiPicker,
	},
	directives: {
		Tooltip,
		ClickOutside,
	},
	mixins: [
		isMobile,
	],
	props: {
		editor: {
			type: Object,
			required: true,
		},
		syncService: {
			type: Object,
			required: false,
			default: null,
		},
		isRichEditor: {
			type: Boolean,
			default: true,
		},
		autohide: {
			type: Boolean,
			default: false,
		},
		isPublic: {
			type: Boolean,
			default: false,
		},
		filePath: {
			type: String,
			required: false,
			default: '',
		},
		fileId: {
			type: Number,
			required: false,
			default: 0,
		},
	},
	data: () => {
		return {
			windowWidth: 0,
			windowHeight: 0,
			forceRecompute: 0,
			submenuVisibility: {},
			lastImagePath: null,
			showImageLinkPrompt: false,
			uploadingImage: false,
			imageLink: '',
			icons: [...menuBarIcons],
		}
	},
	computed: {
		isHiddenInMenu() {
			return ($index) => $index - this.iconCount >= 0
		},
		getIconClasses() {
			return (icon) => {
				const classes = {}
				classes[icon.class] = true
				classes['is-active'] = this.isActive(icon)
				return classes
			}
		},
		isActive() {
			return ({ isActive }) => {
				if (!isActive) {
					return false
				}
				const args = Array.isArray(isActive) ? isActive : [isActive]
				return this.editor.isActive(...args)
			}
		},
		isVisible() {
			return this.editor.isFocused
				|| Object.values(this.submenuVisibility).find((v) => v)
		},
		disabled() {
			return (menuItem) => {
				return menuItem.action && !menuItem.action(this.editor.can())
			}
		},
		isChildMenuVisible() {
			return (icon) => {
				return Object.prototype.hasOwnProperty.call(this.submenuVisibility, icon.label) ? this.submenuVisibility[icon.label] : false
			}
		},
		allIcons() {
			return [...this.icons, {
				label: t('text', 'Insert image'),
				class: 'icon-image',
			}, {
				label: t('text', 'Formatting help'),
				class: 'icon-info',
				click: () => {
					this.$emit('show-help')
				},
			}]
		},
		childPopoverMenu() {
			return (icons, parent) => {
				return icons.map(icon => {
					return {
						// text: this.getLabelAndKeys(icons[index]),
						text: icon.label,
						icon: icon.class,
						active: this.isActive(icon),
						action: () => {
							this.clickIcon(icon)
							this.hideChildMenu(parent)
						},
					}
				})
			}
		},
		childIconClasses() {
			return (icons) => {
				const icon = this.childIcon(icons)
				return this.getIconClasses(icon)
			}
		},
		childIcon() {
			return (icons) => icons.find(icon => this.isActive(icon)) || icons[0]
		},
		iconCount() {
			this.forceRecompute // eslint-disable-line
			this.windowWidth // eslint-disable-line
			const menuBarWidth = this.$refs.menubar && this.$refs.menubar.clientWidth > 200 ? this.$refs.menubar.clientWidth : 200
			const iconCount = Math.max((Math.floor(menuBarWidth / 44) - 2), 0)
			return iconCount - 1
		},
		imagePath() {
			return this.lastImagePath
				|| this.filePath.split('/').slice(0, -1).join('/')
		},
	},
	mounted() {
		window.addEventListener('resize', this.getWindowWidth)
		this.checkInterval = setInterval(() => {
			const isWidthAvailable = (this.$refs.menubar && this.$refs.menubar.clientWidth > 0)
			if (this.isRichEditor && isWidthAvailable) {
				this.redrawMenuBar()
			}
			if (!this.isRichEditor || isWidthAvailable) {
				clearInterval(this.checkInterval)
			}
		}, 100)
		this.$emit('update:loaded', true)
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.getWindowWidth)
	},
	methods: {
		redrawMenuBar() {
			this.$nextTick(() => {
				this.getWindowWidth()
				this.forceRecompute++
			})
		},
		refocus() {
			this.editor.chain().focus().run()
		},
		clickIcon(icon) {
			if (icon.click) {
				return icon.click()
			}
			// Some actions run themselves.
			// others still need to have .run() called upon them.
			const action = icon.action(this.editor.chain().focus())
			action && action.run()
		},
		getWindowWidth(event) {
			this.windowWidth = document.documentElement.clientWidth
		},
		getWindowHeight(event) {
			this.windowHeight = document.documentElement.clientHeight
		},
		hideChildMenu({ label }) {
			this.$set(this.submenuVisibility, label, false)
		},
		toggleChildMenu({ label }) {
			const lastValue = Object.prototype.hasOwnProperty.call(this.submenuVisibility, label) ? this.submenuVisibility[label] : false
			this.$set(this.submenuVisibility, label, !lastValue)
			if (lastValue) {
				this.refocus()
			}
		},
		onImageActionClose() {
			this.showImageLinkPrompt = false
		},
		onUploadImage() {
			this.$refs.imageFileInput.click()
		},
		onImageUploadFilePicked(event) {
			this.uploadingImage = true
			const files = event.target.files
			const image = files[0]
			if (!imageMimes.includes(image.type)) {
				showError(t('text', 'Image format not supported'))
				this.uploadingImage = false
				return
			}

			// Clear input to ensure that the change event will be emitted if
			// the same file is picked again.
			event.target.value = ''

			this.syncService.uploadImage(image).then((response) => {
				this.insertAttachmentImage(response.data?.name, response.data?.id)
			}).catch((error) => {
				console.error(error)
				showError(error?.response?.data?.error)
			}).then(() => {
				this.uploadingImage = false
			})
		},
		onImageLinkUpdateValue(newImageLink) {
			// this avoids the input being reset on each file polling
			this.imageLink = newImageLink
		},
		onImageLinkSubmit() {
			if (!this.imageLink) {
				return
			}
			this.uploadingImage = true
			this.showImageLinkPrompt = false
			this.$refs.imageActions[0].closeMenu()

			this.syncService.insertImageLink(this.imageLink).then((response) => {
				this.insertAttachmentImage(response.data?.name, response.data?.id)
			}).catch((error) => {
				console.error(error)
				showError(error?.response?.data?.error)
			}).then(() => {
				this.uploadingImage = false
				this.imageLink = ''
			})
		},
		onImagePathSubmit(imagePath) {
			this.uploadingImage = true
			this.$refs.imageActions[0].closeMenu()

			this.syncService.insertImageFile(imagePath).then((response) => {
				this.insertAttachmentImage(response.data?.name, response.data?.id)
			}).catch((error) => {
				console.error(error)
				showError(error?.response?.data?.error)
			}).then(() => {
				this.uploadingImage = false
			})
		},
		showImagePrompt() {
			const currentUser = getCurrentUser()
			if (!currentUser) {
				return
			}
			OC.dialogs.filepicker(t('text', 'Insert an image'), (file) => {
				this.onImagePathSubmit(file)
			}, false, [], true, undefined, this.imagePath)
		},
		insertAttachmentImage(name, fileId) {
			const src = 'text://image?imageFileName=' + encodeURIComponent(name)
			// simply get rid of brackets to make sure link text is valid
			// as it does not need to be unique and matching the real file name
			const alt = name.replaceAll(/[[\]]/g, '')
			this.editor.chain().setImage({ src, alt }).focus().run()
		},
		optimalPathTo(targetFile) {
			const absolutePath = targetFile.split('/')
			const relativePath = this.relativePathTo(targetFile).split('/')
			return relativePath.length < absolutePath.length
				? relativePath.join('/')
				: targetFile
		},
		relativePathTo(targetFile) {
			const current = this.filePath.split('/')
			const target = targetFile.split('/')
			current.pop() // ignore filename
			while (current[0] === target[0]) {
				current.shift()
				target.shift()
			}
			return current.fill('..').concat(target).join('/')
		},
		addEmoji(icon, emojiObject) {
			return icon.action(this.editor.chain(), { id: emojiObject.id, native: emojiObject.native })
				.focus()
				.run()
		},
		keysString(keyChar, modifiers = []) {
			const translations = {
				ctrl: t('text', 'Ctrl'),
				alt: t('text', 'Alt'),
				shift: t('text', 'Shift'),
			}
			return Object.entries(translations)
				.filter(([k, v]) => modifiers.includes(k))
				.map(([k, v]) => v)
				.concat(keyChar.toUpperCase())
				.join('+')
		},
		getKeys(icon) {
			return (icon.keyChar && !this.isMobile)
				? `(${this.keysString(icon.keyChar, icon.keyModifiers)})`
				: ''
		},
		getLabelAndKeys(icon) {
			return [icon.label, this.getKeys(icon)].join(' ')
		},
	},
}
</script>

<style scoped lang="scss">
	.menubar {
		--background-blur: blur(10px);
		position: fixed;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		display: flex;
		justify-content: flex-end;
		z-index: 10021; // above modal-header and menububble so menubar is always on top
		background-color: var(--color-main-background-translucent);
		-webkit-backdrop-filter: var(--background-blur);
		backdrop-filter: var(--background-blur);
		max-height: 44px; // important for mobile so that the buttons are always inside the container
		padding-top:3px;
		padding-bottom: 3px;

		&.autohide {
			visibility: hidden;
			opacity: 0;
			transition: visibility 0.2s 0.4s, opacity 0.2s 0.4s;
			&.show {
				visibility: visible;
				opacity: 1;
			}
		}
		.menubar-icons {
			flex-grow: 1;
			margin-left: calc((100% - 660px) / 2);
		}
		@media (max-width: 660px) {
			.menubar-icons {
				margin-left: 0;
			}
		}
		&::v-deep .action-item__menu ul {
			max-height: calc(100vh - 88px);
			overflow: scroll;
		}
	}

	.menubar button {
		position: relative;
		width: 44px;
		height: 44px;
		margin: 0;
		background-size: 16px;
		border: 0;
		background-color: transparent;
		opacity: .5;
		color: var(--color-main-text);
		background-position: center center;
		vertical-align: top;
		&:hover, &:focus, &:active {
			background-color: var(--color-background-dark);
		}

		&.is-active::before {
			transform: translateX(-50%);
			border-radius: 100%;
			position: absolute;
			background: var(--color-primary-element);
			bottom: 3px;
			height: 6px;
			width: 6px;
			content: '';
			left: 50%;

		}
		&.is-active,
		&:hover,
		&:focus {
			opacity: 1;
		}

		&.icon-undo,
		&.icon-redo {
			opacity: .8;

			&:disabled {
				opacity: .4;
			}
		}
	}

	.menubar .submenu, .menubar .menuitem-emoji {
		display: inline-block;
		width: 44px;
		height: 44px;
		position: relative;
		vertical-align: top;
	}
</style>

(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[192],{12:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o}));
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var i=["text/markdown"],o=["text/plain","application/cmd","application/x-empty","application/x-msdos-program","application/epub+zip","application/javascript","application/json","application/x-perl","application/x-php","application/x-tex","application/xml","application/yaml","text/css","text/csv","text/html","text/x-c","text/x-c++src","text/x-h","text/x-java-source","text/x-ldif","text/x-python","text/x-shellscript"],r=[].concat(i,o)},165:function(t,e,n){"use strict";var i=n(28);n.n(i).a},166:function(t,e,n){(e=n(49)(!1)).push([t.i,"\n#rich-workspace[data-v-4241752f] {\n\tpadding: 0 60px;\n\tmin-height: 90px;\n\t/* Slightly reduce vertical space */\n\tmargin-bottom: -24px;\n\ttext-align: left;\n\tmax-height: 0;\n\ttransition: max-height 0.5s cubic-bezier(0, 1, 0, 1);\n}\n\n/* For subfolders, where there are no Recommendations */\n#rich-workspace[data-v-4241752f]:only-child {\n\tmargin-bottom: 0;\n}\n.empty-workspace[data-v-4241752f] {\n\tpadding-top: 43px;\n\tcolor: var(--color-text-maxcontrast);\n\theight: 0;\n}\n#rich-workspace[data-v-4241752f] div[contenteditable=false] {\n\twidth: 100%;\n\tpadding: 0px;\n\tbackground-color: var(--color-main-background);\n\topacity: 1;\n\tborder: none;\n}\n#rich-workspace[data-v-4241752f] #editor-container {\n\theight: 100%;\n\tposition: unset !important;\n}\n#rich-workspace[data-v-4241752f] #editor-wrapper {\n\tposition: unset !important;\n\toverflow: visible;\n}\n#rich-workspace[data-v-4241752f] #editor {\n\toverflow: scroll !important;\n\tmax-height: 50vh;\n}\n#rich-workspace[data-v-4241752f] #editor-wrapper .ProseMirror {\n\tpadding: 0px;\n\tmargin: 0;\n}\n#rich-workspace[data-v-4241752f] .menubar {\n\tz-index: 50;\n\t/* Slightly reduce vertical space */\n\tmargin-bottom: -10px;\n}\n#rich-workspace[data-v-4241752f] .menubar .menubar-icons {\n\tmargin-left: 0;\n}\n#rich-workspace[data-v-4241752f] .editor__content {\n\tmargin: 0;\n}\n#rich-workspace.focus[data-v-4241752f] {\n\tmax-height: 50vh;\n}\n#rich-workspace[data-v-4241752f]:not(.focus) {\n\tmax-height: 30vh;\n\tposition: relative;\n\toverflow: hidden;\n}\n#rich-workspace[data-v-4241752f]:not(.focus):not(.icon-loading):after {\n\tcontent: '';\n\tposition: absolute;\n\tz-index: 1;\n\tbottom: 0;\n\tleft: 0;\n\tpointer-events: none;\n\tbackground-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-main-background));\n\twidth: 100%;\n\theight: 4em;\n}\n#rich-workspace.dark[data-v-4241752f]:not(.focus):not(.icon-loading):after {\n\tbackground-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--color-main-background));\n}\n@media only screen and (max-width: 1024px) {\n#rich-workspace[data-v-4241752f]:not(.focus) {\n\t\tmax-height: 30vh;\n}\n}\n\n",""]),t.exports=e},215:function(t,e,n){var i=n(640);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(50).default)("86d12aa2",i,!0,{})},216:function(t,e,n){var i=n(642);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(50).default)("77931eb0",i,!0,{})},28:function(t,e,n){var i=n(166);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(50).default)("768e46e1",i,!0,{})},29:function(e,n,i){"use strict";i.d(n,"b",(function(){return v})),i.d(n,"c",(function(){return g})),i.d(n,"d",(function(){return b})),i.d(n,"a",(function(){return k}));var o=i(14),r=i.n(o),a=i(13),c=i(12),s=i(15);function l(t,e,n,i,o,r,a){try{var c=t[r](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(i,o)}var u=!!document.getElementById("isPublic"),d=Object(a.generateOcsUrl)("apps/text"+(u?"/public":""),2)+"workspace",f={name:"RichWorkspace",components:{EditorWrapper:function(){return Promise.all([i.e(0),i.e(188),i.e(197),i.e(189)]).then(i.bind(null,176))}},props:{path:{type:String,required:!0}},data:function(){return{focus:!1,folder:null,file:null,loaded:!1,ready:!1,autofocus:!1,darkTheme:OCA.Accessibility&&"dark"===OCA.Accessibility.theme,enabled:OCA.Text.RichWorkspaceEnabled}},computed:{shareToken:function(){return document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null},canCreate:function(){return!!(this.folder&&this.folder.permissions&OC.PERMISSION_CREATE)},showEmptyWorkspace:function(){return(!this.file||this.autofocus&&!this.ready)&&this.canCreate}},watch:{path:function(){this.getFileInfo()},focus:function(t){t||document.querySelector("#editor").scrollTo(0,0)}},mounted:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.enabled&&e.getFileInfo(),Object(s.subscribe)("Text::showRichWorkspace",(function(){e.enabled=!0,e.getFileInfo()})),Object(s.subscribe)("Text::hideRichWorkspace",(function(){e.enabled=!1}));case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(i,o){var r=t.apply(e,n);function a(t){l(r,i,o,a,c,"next",t)}function c(t){l(r,i,o,a,c,"throw",t)}a(void 0)}))})()},methods:{unfocus:function(){},reset:function(){var t=this;this.file=null,this.focus=!1,this.$nextTick((function(){t.creating=!1,t.getFileInfo()}))},getFileInfo:function(){var t=this;this.loaded=!1,this.autofocus=!1,this.ready=!1;var e={path:this.path};u&&(e.shareToken=this.shareToken),r.a.get(d,{params:e}).then((function(e){var n=e.data.ocs.data;t.folder=n.folder||null,t.file=n.file,t.editing=!0,t.loaded=!0})).catch((function(e){var n=e.response.data.ocs.data;t.folder=n.folder||null,t.file=null,t.loaded=!0,t.ready=!0,t.creating=!1}))},createNew:function(){var t=this;this.creating||(this.creating=!0,window.FileList.createFile("Readme.md",{scrollTo:!1,animate:!1}).then((function(e,n){t.getFileInfo(),t.autofocus=!0})))}}},p=(i(165),i(19)),h=Object(p.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.enabled?n("div",{class:{"icon-loading":!t.loaded||!t.ready,focus:t.focus,dark:t.darkTheme},attrs:{id:"rich-workspace"}},[t.showEmptyWorkspace?n("div",{staticClass:"empty-workspace",on:{click:t.createNew}},[n("p",{staticClass:"placeholder"},[t._v("\n\t\t\t"+t._s(t.t("text","Add notes, lists or links …"))+"\n\t\t")])]):t._e(),t._v(" "),t.file?n("EditorWrapper",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],key:t.file.id,attrs:{"file-id":t.file.id,"relative-path":t.file.path,"share-token":t.shareToken,active:!0,autohide:!0,mime:t.file.mimetype,autofocus:t.autofocus},on:{ready:function(e){t.ready=!0},focus:function(e){t.focus=!0},blur:t.unfocus,error:t.reset}}):t._e()],1):t._e()}),[],!1,null,"4241752f",null).exports;function m(t,e,n,i,o,r,a){try{var c=t[r](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(i,o)}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var v=function(){var t,e=(t=regeneratorRuntime.mark((function t(e,n){var i,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r()({method:"PROPFIND",url:Object(a.generateRemoteUrl)("dav/files/".concat(e).concat(n)),headers:{requesttoken:OC.requestToken,"content-Type":"text/xml"},data:'<?xml version="1.0"?>\n<d:propfind  xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns" xmlns:nc="http://nextcloud.org/ns" xmlns:ocs="http://open-collaboration-services.org/ns">\n  <d:prop>\n    <d:getlastmodified />\n    <d:getetag />\n    <d:getcontenttype />\n    <d:resourcetype />\n    <oc:fileid />\n    <oc:permissions />\n    <oc:size />\n    <d:getcontentlength />\n    <nc:has-preview />\n    <nc:mount-type />\n    <nc:is-encrypted />\n    <ocs:share-permissions />\n    <oc:tags />\n    <oc:favorite />\n    <oc:comments-unread />\n    <oc:owner-id />\n    <oc:owner-display-name />\n    <oc:share-types />\n  </d:prop>\n</d:propfind>'});case 2:return i=t.sent,o=OCA.Files.App.fileList.filesClient._client.parseMultiStatus(i.data),t.abrupt("return",o.map((function(t){var e=OCA.Files.App.fileList.filesClient._parseFileInfo(t);return e.href=t.href,e})));case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(i,o){var r=t.apply(e,n);function a(t){m(r,i,o,a,c,"next",t)}function c(t){m(r,i,o,a,c,"throw",t)}a(void 0)}))});return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e={attach:function(e){var n=e.fileList;"files"!==n.id&&"files.public"!==n.id||e.addMenuEntry({id:"file",displayName:t("text","New text document"),templateName:t("text","New text document")+".md",iconClass:"icon-filetype-text",fileType:"file",actionHandler:function(t){n.createFile(t).then((function(t,e){var i=new OCA.Files.FileInfoModel(e);void 0!==OCA.Viewer?OCA.Files.fileActions.triggerAction("view",i,n):void 0===OCA.Viewer&&OCA.Files.fileActions.triggerAction("Edit with text app",i,n)}))}})}};OC.Plugins.register("OCA.Files.NewFileMenu",e)},g=function(){var e=document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null,n=document.getElementById("dir").value;if(!e||""!==n){var o=document.createElement("div");o.id="text-viewer-fallback",document.body.appendChild(o);for(var r=function(n){return OCA.Files.fileActions.register(n,"Edit with text app",OC.PERMISSION_UPDATE|OC.PERMISSION_READ,OC.imagePath("core","actions/rename"),(function(t){var n=window.FileList.findFile(t);Promise.all([i.e(0).then(i.bind(null,45)),Promise.all([i.e(1),i.e(0),i.e(188),i.e(199),i.e(194)]).then(i.bind(null,667))]).then((function(i){var r=window.FileList.getCurrentDirectory()+"/"+t,a=i[0].default;a.prototype.t=window.t,a.prototype.n=window.n,a.prototype.OCA=window.OCA;var c=i[1].default;new a({render:function(t){return t(c,{props:{fileId:n?n.id:null,active:!0,shareToken:e,relativePath:r,mimeType:n.mimetype}})}}).$mount(o)}))}),t("text","Edit"))},a=0;a<c.a.length;a++)r(c.a[a]),OCA.Files.fileActions.setDefault(c.a[a],"Edit with text app")}},k={el:null,attach:function(t){"files"!==t.id&&"files.public"!==t.id||(this.el=document.createElement("div"),t.registerHeader({id:"workspace",el:this.el,render:this.render.bind(this),priority:10}))},render:function(t){var e=this;"files"!==t.id&&"files.public"!==t.id||i.e(0).then(i.bind(null,45)).then((function(n){var i=n.default;e.el.id="files-workspace-wrapper",i.prototype.t=window.t,i.prototype.n=window.n,i.prototype.OCA=window.OCA;var o=new(i.extend(h))({propsData:{path:t.getCurrentDirectory()}}).$mount(e.el);t.$el.on("changeDirectory",(function(t){o.path=t.dir.toString()}))}))}}},639:function(t,e,n){"use strict";var i=n(215);n.n(i).a},640:function(t,e,n){(e=n(49)(!1)).push([t.i,".menubar[data-v-6813ca01]{position:fixed;position:-webkit-sticky;position:sticky;top:0;display:flex;z-index:10010;background-color:var(--color-main-background-translucent);height:44px}.menubar.autohide[data-v-6813ca01]{visibility:hidden;opacity:0;transition:visibility 0.2s 0.4s, opacity 0.2s 0.4s}.menubar.autohide.is-focused[data-v-6813ca01]{visibility:visible;opacity:1}.menubar .menubar-icons[data-v-6813ca01]{flex-grow:1;margin-left:calc((100% - 660px) / 2)}@media (max-width: 660px){.menubar .menubar-icons[data-v-6813ca01]{margin-left:0}}.menubar[data-v-6813ca01] .action-item__menu ul{max-height:calc(100vh - 88px);overflow:scroll}.menubar button[data-v-6813ca01]{width:44px;height:44px;margin:0;background-size:16px;border:0;background-color:transparent;opacity:.5;color:var(--color-main-text);background-position:center center;vertical-align:top}.menubar button[data-v-6813ca01]:hover,.menubar button[data-v-6813ca01]:focus,.menubar button[data-v-6813ca01]:active{background-color:var(--color-background-dark)}.menubar button.is-active[data-v-6813ca01],.menubar button[data-v-6813ca01]:hover,.menubar button[data-v-6813ca01]:focus{opacity:1}.menubar button.icon-undo[data-v-6813ca01],.menubar button.icon-redo[data-v-6813ca01]{opacity:.4}.menubar .submenu[data-v-6813ca01]{display:inline-block;width:44px;height:44px;position:relative;vertical-align:top}\n",""]),t.exports=e},641:function(t,e,n){"use strict";var i=n(216);n.n(i).a},642:function(t,e,n){(e=n(49)(!1)).push([t.i,".menububble[data-v-b3f47288]{position:absolute;display:flex;z-index:10020;background:var(--color-main-background-translucent);box-shadow:0 1px 5px var(--color-box-shadow);border-radius:var(--border-radius);padding:0;margin-bottom:0.4rem;visibility:hidden;opacity:0;transform:translateX(-50%);transition:opacity 0.2s, visibility 0.2s}.menububble.is-active[data-v-b3f47288]{opacity:1;visibility:visible}.menububble__button[data-v-b3f47288]{display:block;border:0;padding:0.3rem 0.7rem;margin:0;margin-right:0.2rem;border-radius:var(--border-radius);cursor:pointer}.menububble__button[data-v-b3f47288]:last-child{margin-right:0}.menububble__buttontext[data-v-b3f47288]{padding:0.4rem;padding-right:0}.menububble__form[data-v-b3f47288]{display:flex;align-items:center}.menububble__input[data-v-b3f47288]{font:inherit;border:none;background:transparent;min-width:150px}\n",""]),t.exports=e},666:function(e,n,i){"use strict";i.r(n);var o=i(184),r=i(186),a=i.n(r),c=[{label:t("text","Undo"),class:"icon-undo",isActive:function(t){},action:function(t){return t.undo()}},{label:t("text","Redo"),class:"icon-redo",isActive:function(t){},action:function(t){return t.redo()}},{label:t("text","Bold"),class:"icon-bold",isActive:function(t){return t.strong()},action:function(t){return t.strong()}},{label:t("text","Italic"),class:"icon-italic",isActive:function(t){return t.em()},action:function(t){return t.em()}},{label:t("text","Strikethrough"),class:"icon-strike",isActive:function(t){return t.strike()},action:function(t){return t.strike()}},{label:t("text","Paragraph"),class:"icon-paragraph",isActive:function(t){},action:function(t){return t.paragraph()}},{label:t("text","Headings"),visible:!1,children:[{label:t("text","Heading 1"),class:"icon-h1",isActive:function(t){return t.heading({level:1})},action:function(t){return t.heading({level:1})}},{label:t("text","Heading 2"),class:"icon-h2",isActive:function(t){return t.heading({level:2})},action:function(t){return t.heading({level:2})}},{label:t("text","Heading 3"),class:"icon-h3",isActive:function(t){return t.heading({level:3})},action:function(t){return t.heading({level:3})}},{label:t("text","Heading 4"),class:"icon-h4",isActive:function(t){return t.heading({level:4})},action:function(t){return t.heading({level:4})}},{label:t("text","Heading 5"),class:"icon-h5",isActive:function(t){return t.heading({level:5})},action:function(t){return t.heading({level:5})}},{label:t("text","Heading 6"),class:"icon-h6",isActive:function(t){return t.heading({level:6})},action:function(t){return t.heading({level:6})}}]},{label:t("text","Unordered list"),class:"icon-ul",isActive:function(t){return t.bullet_list()},action:function(t){return t.bullet_list_item()}},{label:t("text","Ordered list"),class:"icon-ol",isActive:function(t){return t.ordered_list()},action:function(t){return t.ordered_list()}},{label:t("text","ToDo list"),class:"icon-checkmark",isActive:function(t){return!1},action:function(t){return t.todo_item()}},{label:t("text","Blockquote"),class:"icon-quote",isActive:function(t){return t.blockquote()},action:function(t){return t.blockquote()}},{label:t("text","Code block"),class:"icon-code",isActive:function(t){return t.code_block()},action:function(t){return t.code_block()}}],s=i(29),l=i(636),u=i.n(l),d=i(637),f=i.n(d),p=i(214),h=i.n(p),m=i(638),v=i.n(m);function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,o=!1,r=void 0;try{for(var a,c=t[Symbol.iterator]();!(i=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==c.return||c.return()}finally{if(o)throw r}}return n}(t,e)||k(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||k(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){if(t){if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var y={name:"MenuBar",components:{EditorMenuBar:o.c,ActionButton:f.a,PopoverMenu:h.a,Actions:u.a},directives:{Tooltip:a.a,ClickOutside:v.a},props:{editor:{type:Object,required:!1,default:null},isRichEditor:{type:Boolean,default:!0},autohide:{type:Boolean,default:!1},isPublic:{type:Boolean,default:!1},filePath:{type:String,required:!1,default:""}},data:function(){return{windowWidth:0,windowHeight:0,forceRecompute:0,submenuVisibility:{},icons:g(c)}},computed:{isHiddenInMenu:function(){var t=this;return function(e){return e-t.iconCount>=0}},getIconClasses:function(){return function(t,e){var n={"is-active":e.isActive(t)};return n[e.class]=!0,n}},isChildMenuVisible:function(){var t=this;return function(e){return!!Object.prototype.hasOwnProperty.call(t.submenuVisibility,e.label)&&t.submenuVisibility[e.label]}},allIcons:function(){var e=this;return this.isPublic?this.icons:[].concat(g(this.icons),[{label:t("text","Insert image"),class:"icon-image",isActive:function(){},action:function(t){e.showImagePrompt(t.image)}}])},childPopoverMenu:function(){var t=this;return function(e,n,i,o){var r=[],a=function(a){r.push({text:i[a].label,icon:i[a].class,action:function(){i[a].action(n),t.hideChildMenu(o)},active:i[a].isActive(e)})};for(var c in i)a(c);return r}},childIconClass:function(){return function(t,e){for(var n in e){var i=e[n];if(i.isActive(t))return i.class}return"icon-h1"}},iconCount:function(){this.forceRecompute,this.windowWidth;var t=this.$refs.menubar&&this.$refs.menubar.clientWidth>200?this.$refs.menubar.clientWidth:200,e=Math.max(Math.floor(t/44)-2,0);return e}},mounted:function(){var t=this;window.addEventListener("resize",this.getWindowWidth),this.checkInterval=setInterval((function(){var e=t.$refs.menubar&&t.$refs.menubar.clientWidth>0;t.isRichEditor&&e&&t.redrawMenuBar(),t.isRichEditor&&!e||clearInterval(t.checkInterval)}),100)},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)},methods:{redrawMenuBar:function(){var t=this;this.$nextTick((function(){t.getWindowWidth(),t.forceRecompute++}))},clickIcon:function(t,e){return e.action(t)},getWindowWidth:function(t){this.windowWidth=document.documentElement.clientWidth},getWindowHeight:function(t){this.windowHeight=document.documentElement.clientHeight},hideChildMenu:function(t){this.$set(this.submenuVisibility,t.label,!1)},toggleChildMenu:function(t){var e=!!Object.prototype.hasOwnProperty.call(this.submenuVisibility,t.label)&&this.submenuVisibility[t.label];this.$set(this.submenuVisibility,t.label,!e)},showImagePrompt:function(t){var e=this,n=OC.getCurrentUser();if(n){var i=t;OC.dialogs.filepicker("Insert an image",(function(t){Object(s.b)(n.uid,t).then((function(t){var n=t[0],o={mimetype:n.mimetype,hasPreview:n.hasPreview},r=e.optimalPathTo("".concat(n.path,"/").concat(n.name)).split("/").map(encodeURIComponent).join("/"),a=Object.entries(o).map((function(t){var e=b(t,2),n=e[0],i=e[1];return"".concat(n,"=").concat(encodeURIComponent(i))})).join("&"),c="".concat(r,"?fileId=").concat(n.id,"#").concat(a);i({src:c,alt:n.name})}))}),!1,[],!0)}},optimalPathTo:function(t){var e=t.split("/"),n=this.relativePathTo(t).split("/");return n.length<e.length?n.join("/"):t},relativePathTo:function(t){var e=this.filePath.split("/"),n=t.split("/");for(e.pop();e[0]===n[0];)e.shift(),n.shift();return e.fill("..").concat(n).join("/")}}},w=(i(639),i(19)),A=Object(w.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("EditorMenuBar",{attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.commands,o=e.isActive,r=e.focused;return[n("div",{staticClass:"menubar",class:{"is-focused":r,autohide:t.autohide}},[t.isRichEditor?n("div",{ref:"menubar",staticClass:"menubar-icons"},[t._l(t.allIcons,(function(e,r){return[e.class?n("button",{directives:[{name:"show",rawName:"v-show",value:r<t.iconCount,expression:"$index < iconCount"}],key:e.label,class:t.getIconClasses(o,e),attrs:{title:e.label},on:{click:function(n){return t.clickIcon(i,e)}}}):[n("div",{directives:[{name:"show",rawName:"v-show",value:r<t.iconCount||!e.class,expression:"$index < iconCount || !icon.class"},{name:"click-outside",rawName:"v-click-outside",value:function(){return t.hideChildMenu(e)},expression:"() => hideChildMenu(icon)"}],key:e.label,staticClass:"submenu"},[n("button",{class:t.childIconClass(o,e.children),attrs:{title:e.label},on:{click:function(n){return n.preventDefault(),t.toggleChildMenu(e)}}}),t._v(" "),n("div",{staticClass:"popovermenu menu-center",class:{open:t.isChildMenuVisible(e)}},[n("PopoverMenu",{attrs:{menu:t.childPopoverMenu(o,i,e.children,e)}})],1)])]]})),t._v(" "),n("Actions",[t._l(t.allIcons,(function(e,o){return[e.class&&t.isHiddenInMenu(o)?n("ActionButton",{key:e.class,attrs:{icon:e.class},on:{click:function(n){return t.clickIcon(i,e)}}},[t._v("\n\t\t\t\t\t\t"+t._s(e.label)+"\n\t\t\t\t\t")]):t._e()]}))],2)],2):t._e(),t._v(" "),t._t("default",[t._v("\n\t\t\tLeft side\n\t\t")])],2)]}}],null,!0)})}),[],!1,null,"6813ca01",null);n.default=A.exports},668:function(t,e,n){"use strict";n.r(e);var i=n(184),o=n(186),r=n.n(o),a={name:"MenuBubble",components:{EditorMenuBubble:i.d},directives:{tooltip:r.a},props:{editor:{type:Object,required:!1,default:null}},data:function(){return{linkUrl:null,linkMenuIsActive:!1}},methods:{showLinkMenu:function(t){var e=this;this.linkUrl=t.href,this.linkMenuIsActive=!0,this.$nextTick((function(){e.$refs.linkInput.focus()}))},hideLinkMenu:function(){this.linkUrl=null,this.linkMenuIsActive=!1},setLinkUrl:function(t,e){!e||e.match(/^[a-zA-Z]+:\/\//)||e.match(/^\//)||(e="https://"+e),t({href:e}),this.hideLinkMenu()}}},c=(n(641),n(19)),s=Object(c.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("EditorMenuBubble",{staticClass:"menububble",attrs:{editor:t.editor},on:{hide:t.hideLinkMenu},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.commands,o=e.isActive,r=e.getMarkAttrs,a=e.menu;return[n("div",{staticClass:"menububble",class:{"is-active":a.isActive},style:"left: "+a.left+"px; bottom: "+a.bottom+"px;"},[t.linkMenuIsActive?n("form",{staticClass:"menububble__form",on:{submit:function(e){return e.preventDefault(),t.setLinkUrl(i.link,t.linkUrl)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.linkUrl,expression:"linkUrl"}],ref:"linkInput",staticClass:"menububble__input",attrs:{type:"text",placeholder:"https://"},domProps:{value:t.linkUrl},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.hideLinkMenu(e)},input:function(e){e.target.composing||(t.linkUrl=e.target.value)}}}),t._v(" "),n("button",{staticClass:"menububble__button icon-confirm",attrs:{type:"button"},on:{click:function(e){return t.setLinkUrl(i.link,t.linkUrl)}}})]):[n("button",{staticClass:"menububble__button",class:{"is-active":o.link()},on:{click:function(e){t.showLinkMenu(r("link"))}}},[n("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:o.link()?"Update Link":"Add Link",expression:"isActive.link() ? 'Update Link' : 'Add Link'"}],staticClass:"icon-link"}),t._v(" "),n("span",{staticClass:"menububble__buttontext"},[t._v(t._s(t.t("text","Add link")))])])]],2)]}}])})}),[],!1,null,"b3f47288",null);e.default=s.exports}}]);
//# sourceMappingURL=editor-rich.js.map?v=9a5fc38ceaf74b1c6bc0
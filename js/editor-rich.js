/*! For license information please see editor-rich.js.LICENSE.txt */
(self.webpackChunktext=self.webpackChunktext||[]).push([["editor-rich"],{24144:(n,e,i)=>{"use strict";i.d(e,{h0:()=>O,Lz:()=>D,YZ:()=>M,tH:()=>P});var o=i(74411),r=i(4820),a=i(79753),c=i(27594);function l(n,t,e,i,o,r,a){try{var c=n[r](a),l=c.value}catch(n){return void e(n)}c.done?t(l):Promise.resolve(l).then(i,o)}var s=!!document.getElementById("isPublic"),A=(0,a.generateOcsUrl)("apps/text"+(s?"/public":"")+"/workspace",2);const d={name:"RichWorkspace",components:{EditorWrapper:function(){return Promise.all([i.e("vendors"),i.e("editor")]).then(i.bind(i,33721))}},props:{path:{type:String,required:!0}},data:function(){return{focus:!1,folder:null,file:null,loaded:!1,ready:!1,autofocus:!1,darkTheme:OCA.Accessibility&&"dark"===OCA.Accessibility.theme,enabled:OCA.Text.RichWorkspaceEnabled}},computed:{shareToken:function(){return document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null},canCreate:function(){return!!(this.folder&&this.folder.permissions&OC.PERMISSION_CREATE)},showEmptyWorkspace:function(){return(!this.file||this.autofocus&&!this.ready)&&this.canCreate}},watch:{path:function(){this.getFileInfo()},focus:function(n){n||document.querySelector("#editor").scrollTo(0,0)}},mounted:function(){var n,t=this;return(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.enabled&&t.getFileInfo(),(0,c.subscribe)("Text::showRichWorkspace",(function(){t.enabled=!0,t.getFileInfo()})),(0,c.subscribe)("Text::hideRichWorkspace",(function(){t.enabled=!1}));case 3:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(i,o){var r=n.apply(t,e);function a(n){l(r,i,o,a,c,"next",n)}function c(n){l(r,i,o,a,c,"throw",n)}a(void 0)}))})()},methods:{unfocus:function(){},reset:function(){var n=this;this.file=null,this.focus=!1,this.$nextTick((function(){n.creating=!1,n.getFileInfo()}))},getFileInfo:function(){var n=this;this.loaded=!1,this.autofocus=!1,this.ready=!1;var t={path:this.path};return s&&(t.shareToken=this.shareToken),r.default.get(A,{params:t}).then((function(t){var e=t.data.ocs.data;return n.folder=e.folder||null,n.file=e.file,n.editing=!0,n.loaded=!0,!0})).catch((function(t){return t.response.data.ocs&&t.response.data.ocs.data.folder?n.folder=t.response.data.ocs.data.folder:n.folder=null,n.file=null,n.loaded=!0,n.ready=!0,n.creating=!1,!1}))},createNew:function(){var n=this;this.creating||(this.creating=!0,this.getFileInfo().then((function(t){n.autofocus=!0,t||window.FileList.createFile("Readme.md",{scrollTo:!1,animate:!1}).then((function(t,e){n.getFileInfo()}))})))}}};var u=i(93379),p=i.n(u),h=i(7795),C=i.n(h),f=i(90569),m=i.n(f),b=i(3565),v=i.n(b),g=i(19216),k=i.n(g),x=i(44589),w=i.n(x),y=i(99706),_={};_.styleTagTransform=w(),_.setAttributes=v(),_.insert=m().bind(null,"head"),_.domAPI=C(),_.insertStyleElement=k();p()(y.Z,_);y.Z&&y.Z.locals&&y.Z.locals;const I=(0,i(51900).Z)(d,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.enabled?e("div",{class:{"icon-loading":!n.loaded||!n.ready,focus:n.focus,dark:n.darkTheme,creatable:n.canCreate},attrs:{id:"rich-workspace"}},[n.showEmptyWorkspace?e("div",{staticClass:"empty-workspace",on:{click:n.createNew}},[e("p",{staticClass:"placeholder"},[n._v("\n\t\t\t"+n._s(n.t("text","Add notes, lists or links …"))+"\n\t\t")])]):n._e(),n._v(" "),n.file?e("EditorWrapper",{directives:[{name:"show",rawName:"v-show",value:n.ready,expression:"ready"}],key:n.file.path,attrs:{"file-id":n.file.id,"relative-path":n.file.path,"share-token":n.shareToken,active:!0,autohide:!0,mime:n.file.mimetype,autofocus:n.autofocus},on:{ready:function(t){n.ready=!0},focus:function(t){n.focus=!0},blur:n.unfocus,error:n.reset}}):n._e()],1):n._e()}),[],!1,null,"42d14835",null).exports;var B=i(23895),E="Edit with text app",D=function(n,t){var e=n.split("/"),i=t.split("/");for(e.pop();e[0]===i[0];)e.shift(),i.shift();var o=e.fill("..").concat(i),r=t.split("/");return o.length<r.length?o.join("/"):t},P=function(){var n={attach:function(n){var e=n.fileList;"files"!==e.id&&"files.public"!==e.id||n.addMenuEntry({id:"file",displayName:t("text","New text document"),templateName:t("text","New text document")+".md",iconClass:"icon-filetype-text",fileType:"file",actionHandler:function(n){e.createFile(n).then((function(n,t){var i=new OCA.Files.FileInfoModel(t);void 0!==OCA.Viewer?OCA.Files.fileActions.triggerAction("view",i,e):void 0===OCA.Viewer&&OCA.Files.fileActions.triggerAction(E,i,e)}))}})}};OC.Plugins.register("OCA.Files.NewFileMenu",n)},M=function(){var n=document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null,e=document.getElementById("dir").value;if(!n||""!==e){var r=document.createElement("div");r.id="text-viewer-fallback",document.body.appendChild(r);for(var c=function(e){return OCA.Files.fileActions.register(e,E,OC.PERMISSION_UPDATE|OC.PERMISSION_READ,(0,a.imagePath)("core","actions/rename"),(function(t){var e=window.FileList.findFile(t);Promise.all([Promise.resolve().then(i.bind(i,20144)),Promise.all([i.e("vendors"),i.e("files-modal")]).then(i.bind(i,19886))]).then((function(i){var o=window.FileList.getCurrentDirectory()+"/"+t,a=i[0].default;a.prototype.t=window.t,a.prototype.n=window.n,a.prototype.OCA=window.OCA;var c=i[1].default;new a({render:function(t){var i=this;return t(c,{props:{fileId:e?e.id:null,active:!0,shareToken:n,relativePath:o,mimeType:e.mimetype},on:{close:function(){i.$destroy()}}})}}).$mount(r)}))}),t("text","Edit"))},l=0;l<o.SP.length;l++)c(o.SP[l]),OCA.Files.fileActions.setDefault(o.SP[l],E)}},O={el:null,attach:function(n){"files"!==n.id&&"files.public"!==n.id||(this.el=document.createElement("div"),n.registerHeader({id:"workspace",el:this.el,render:this.render.bind(this),priority:10}))},render:function(n){var t=this;"files"!==n.id&&"files.public"!==n.id||Promise.resolve().then(i.bind(i,20144)).then((function(e){var i=e.default;t.el.id="files-workspace-wrapper",i.prototype.t=window.t,i.prototype.n=window.n,i.prototype.OCA=window.OCA;var o=new(i.extend(I))({propsData:{path:n.getCurrentDirectory()},store:B.Z}).$mount(t.el);n.$el.on("urlChanged",(function(n){o.path=n.dir.toString()})),n.$el.on("changeDirectory",(function(n){o.path=n.dir.toString()}))}))}}},74411:(n,t,e)=>{"use strict";e.d(t,{SP:()=>r,lF:()=>i,w_:()=>o});var i=["text/markdown"],o=["text/plain","application/cmd","application/x-empty","application/x-msdos-program","application/javascript","application/json","application/x-perl","application/x-php","application/x-tex","application/xml","application/yaml","text/css","text/csv","text/html","text/org","text/x-c","text/x-c++src","text/x-h","text/x-java-source","text/x-ldif","text/x-python","text/x-shellscript"],r=[].concat(i,o)},15711:(n,t,e)=>{"use strict";e.d(t,{Z:()=>c});var i=e(87537),o=e.n(i),r=e(23645),a=e.n(r)()(o());a.push([n.id,'.menubar[data-v-37dde84a]{--background-blur: blur(10px);position:fixed;position:-webkit-sticky;position:sticky;top:0;display:flex;justify-content:flex-end;z-index:10021;background-color:var(--color-main-background-translucent);-webkit-backdrop-filter:var(--background-blur);backdrop-filter:var(--background-blur);min-height:50px;padding-top:3px;padding-bottom:3px}.menubar.autohide[data-v-37dde84a]{visibility:hidden;opacity:0;transition:visibility .2s .4s,opacity .2s .4s}.menubar.autohide.is-focused[data-v-37dde84a]{visibility:visible;opacity:1}.menubar .menubar-icons[data-v-37dde84a]{flex-grow:1;margin-left:calc((100% - 660px)/2)}@media(max-width: 660px){.menubar .menubar-icons[data-v-37dde84a]{margin-left:0}}.menubar[data-v-37dde84a] .action-item__menu ul{max-height:calc(100vh - 88px);overflow:scroll}.menubar button[data-v-37dde84a]{position:relative;width:44px;height:44px;margin:0;background-size:16px;border:0;background-color:transparent;opacity:.5;color:var(--color-main-text);background-position:center center;vertical-align:top}.menubar button[data-v-37dde84a]:hover,.menubar button[data-v-37dde84a]:focus,.menubar button[data-v-37dde84a]:active{background-color:var(--color-background-dark)}.menubar button.is-active[data-v-37dde84a]::before{transform:translateX(-50%);border-radius:100%;position:absolute;background:var(--color-primary-element);bottom:3px;height:6px;width:6px;content:"";left:50%}.menubar button.is-active[data-v-37dde84a],.menubar button[data-v-37dde84a]:hover,.menubar button[data-v-37dde84a]:focus{opacity:1}.menubar button.icon-undo[data-v-37dde84a],.menubar button.icon-redo[data-v-37dde84a]{opacity:.8}.menubar button.icon-undo[data-v-37dde84a]:disabled,.menubar button.icon-redo[data-v-37dde84a]:disabled{opacity:.4}.menubar .submenu[data-v-37dde84a],.menubar .menuitem-emoji[data-v-37dde84a]{display:inline-block;width:44px;height:44px;position:relative;vertical-align:top}',"",{version:3,sources:["webpack://./src/components/MenuBar.vue"],names:[],mappings:"AAqVA,0BACC,6BAAA,CACA,cAAA,CACA,uBAAA,CACA,eAAA,CACA,KAAA,CACA,YAAA,CACA,wBAAA,CACA,aAAA,CACA,yDAAA,CACA,8CAAA,CACA,sCAAA,CACA,eAAA,CACA,eAAA,CACA,kBAAA,CAEA,mCACC,iBAAA,CACA,SAAA,CACA,6CAAA,CACA,8CACC,kBAAA,CACA,SAAA,CAGF,yCACC,WAAA,CACA,kCAAA,CAED,yBACC,yCACC,aAAA,CAAA,CAGF,gDACC,6BAAA,CACA,eAAA,CAIF,iCACC,iBAAA,CACA,UAAA,CACA,WAAA,CACA,QAAA,CACA,oBAAA,CACA,QAAA,CACA,4BAAA,CACA,UAAA,CACA,4BAAA,CACA,iCAAA,CACA,kBAAA,CACA,sHACC,6CAAA,CAGD,mDACC,0BAAA,CACA,kBAAA,CACA,iBAAA,CACA,uCAAA,CACA,UAAA,CACA,UAAA,CACA,SAAA,CACA,UAAA,CACA,QAAA,CAGD,yHAGC,SAAA,CAGD,sFAEC,UAAA,CAEA,wGACC,UAAA,CAKH,6EACC,oBAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,kBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.menubar {\n\t--background-blur: blur(10px);\n\tposition: fixed;\n\tposition: -webkit-sticky;\n\tposition: sticky;\n\ttop: 0;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tz-index: 10021; // above modal-header and menububble so menubar is always on top\n\tbackground-color: var(--color-main-background-translucent);\n\t-webkit-backdrop-filter: var(--background-blur);\n\tbackdrop-filter: var(--background-blur);\n\tmin-height: 50px; // important for mobile so that the buttons are always inside the container\n\tpadding-top:3px;\n\tpadding-bottom: 3px;\n\n\t&.autohide {\n\t\tvisibility: hidden;\n\t\topacity: 0;\n\t\ttransition: visibility 0.2s 0.4s, opacity 0.2s 0.4s;\n\t\t&.is-focused {\n\t\t\tvisibility: visible;\n\t\t\topacity: 1;\n\t\t}\n\t}\n\t.menubar-icons {\n\t\tflex-grow: 1;\n\t\tmargin-left: calc((100% - 660px) / 2);\n\t}\n\t@media (max-width: 660px) {\n\t\t.menubar-icons {\n\t\t\tmargin-left: 0;\n\t\t}\n\t}\n\t&::v-deep .action-item__menu ul {\n\t\tmax-height: calc(100vh - 88px);\n\t\toverflow: scroll;\n\t}\n}\n\n.menubar button {\n\tposition: relative;\n\twidth: 44px;\n\theight: 44px;\n\tmargin: 0;\n\tbackground-size: 16px;\n\tborder: 0;\n\tbackground-color: transparent;\n\topacity: .5;\n\tcolor: var(--color-main-text);\n\tbackground-position: center center;\n\tvertical-align: top;\n\t&:hover, &:focus, &:active {\n\t\tbackground-color: var(--color-background-dark);\n\t}\n\n\t&.is-active::before {\n\t\ttransform: translateX(-50%);\n\t\tborder-radius: 100%;\n\t\tposition: absolute;\n\t\tbackground: var(--color-primary-element);\n\t\tbottom: 3px;\n\t\theight: 6px;\n\t\twidth: 6px;\n\t\tcontent: '';\n\t\tleft: 50%;\n\n\t}\n\t&.is-active,\n\t&:hover,\n\t&:focus {\n\t\topacity: 1;\n\t}\n\n\t&.icon-undo,\n\t&.icon-redo {\n\t\topacity: .8;\n\n\t\t&:disabled {\n\t\t\topacity: .4;\n\t\t}\n\t}\n}\n\n.menubar .submenu, .menubar .menuitem-emoji {\n\tdisplay: inline-block;\n\twidth: 44px;\n\theight: 44px;\n\tposition: relative;\n\tvertical-align: top;\n}\n"],sourceRoot:""}]);const c=a},40407:(n,t,e)=>{"use strict";e.d(t,{Z:()=>c});var i=e(87537),o=e.n(i),r=e(23645),a=e.n(r)()(o());a.push([n.id,".menububble[data-v-4f7a9200]{position:absolute;display:flex;z-index:10020;background:var(--color-main-background-translucent);box-shadow:0 1px 5px var(--color-box-shadow);border-radius:var(--border-radius-large);overflow:hidden;padding:0;margin-left:10px;visibility:hidden;opacity:0;transform:translateX(-50%);transition:opacity .2s,visibility .2s;height:44px}.menububble.is-active[data-v-4f7a9200]{opacity:1;visibility:visible}.menububble__button[data-v-4f7a9200]{display:block;flex-grow:1;border:0;padding:.9rem .7rem;margin:0;border-radius:0;cursor:pointer;background-color:var(--color-main-background);border-right:1px solid var(--color-border)}.menububble__button[data-v-4f7a9200]:focus,.menububble__button[data-v-4f7a9200]:hover{background-color:var(--color-background-hover);border:0;border-right:1px solid var(--color-border) !important}.menububble__button[data-v-4f7a9200]:last-child{border:0 !important}.menububble__buttontext[data-v-4f7a9200]{padding:.4rem;padding-right:0}.menububble__form[data-v-4f7a9200]{display:flex;align-items:center}.menububble__input[data-v-4f7a9200]{font:inherit;border:none;background:transparent;min-width:250px}","",{version:3,sources:["webpack://./src/components/MenuBubble.vue"],names:[],mappings:"AAqLA,6BACC,iBAAA,CACA,YAAA,CACA,aAAA,CACA,mDAAA,CACA,4CAAA,CACA,wCAAA,CACA,eAAA,CACA,SAAA,CACA,gBAAA,CACA,iBAAA,CACA,SAAA,CACA,0BAAA,CACA,qCAAA,CACA,WAAA,CAEA,uCACC,SAAA,CACA,kBAAA,CAGD,qCACC,aAAA,CACA,WAAA,CACA,QAAA,CACA,mBAAA,CACA,QAAA,CACA,eAAA,CACA,cAAA,CACA,6CAAA,CACA,0CAAA,CAEA,sFAEC,8CAAA,CACA,QAAA,CACA,qDAAA,CAGD,gDACC,mBAAA,CAIF,yCACC,aAAA,CACA,eAAA,CAGD,mCACC,YAAA,CACA,kBAAA,CAGD,oCACC,YAAA,CACA,WAAA,CACA,sBAAA,CACA,eAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.menububble {\n\tposition: absolute;\n\tdisplay: flex;\n\tz-index: 10020;\n\tbackground: var(--color-main-background-translucent);\n\tbox-shadow: 0 1px 5px var(--color-box-shadow);\n\tborder-radius: var(--border-radius-large);\n\toverflow: hidden;\n\tpadding: 0;\n\tmargin-left: 10px;\n\tvisibility: hidden;\n\topacity: 0;\n\ttransform: translateX(-50%);\n\ttransition: opacity 0.2s, visibility 0.2s;\n\theight: 44px;\n\n\t&.is-active {\n\t\topacity: 1;\n\t\tvisibility: visible;\n\t}\n\n\t&__button {\n\t\tdisplay: block;\n\t\tflex-grow: 1;\n\t\tborder: 0;\n\t\tpadding: 0.9rem 0.7rem;\n\t\tmargin: 0;\n\t\tborder-radius: 0;\n\t\tcursor: pointer;\n\t\tbackground-color: var(--color-main-background);\n\t\tborder-right: 1px solid var(--color-border);\n\n\t\t&:focus,\n\t\t&:hover {\n\t\t\tbackground-color: var(--color-background-hover);\n\t\t\tborder: 0;\n\t\t\tborder-right: 1px solid var(--color-border) !important;\n\t\t}\n\n\t\t&:last-child {\n\t\t\tborder: 0 !important;\n\t\t}\n\t}\n\n\t&__buttontext {\n\t\tpadding: 0.4rem;\n\t\tpadding-right: 0;\n\t}\n\n\t&__form {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t&__input {\n\t\tfont: inherit;\n\t\tborder: none;\n\t\tbackground: transparent;\n\t\tmin-width: 250px;\n\t}\n}\n"],sourceRoot:""}]);const c=a},99706:(n,t,e)=>{"use strict";e.d(t,{Z:()=>c});var i=e(87537),o=e.n(i),r=e(23645),a=e.n(r)()(o());a.push([n.id,'#rich-workspace[data-v-42d14835]{padding:0 50px;margin-bottom:-24px;text-align:left;max-height:0;transition:max-height .5s cubic-bezier(0, 1, 0, 1);z-index:61;position:relative}#rich-workspace.creatable[data-v-42d14835]{min-height:90px}#rich-workspace[data-v-42d14835]:only-child{margin-bottom:0}.empty-workspace[data-v-42d14835]{padding-top:43px;color:var(--color-text-maxcontrast);height:0}#rich-workspace[data-v-42d14835] div[contenteditable=false]{width:100%;padding:0px;background-color:var(--color-main-background);opacity:1;border:none}#rich-workspace[data-v-42d14835] #editor-container{height:100%;position:unset !important;top:auto !important}#rich-workspace[data-v-42d14835] #editor-wrapper{position:unset !important;overflow:visible}#rich-workspace[data-v-42d14835] #editor{overflow:visible !important}#rich-workspace[data-v-42d14835] .content-wrapper{overflow:scroll !important;max-height:calc(40vh - 50px);padding-left:10px;padding-bottom:60px}#rich-workspace[data-v-42d14835] #editor-wrapper .ProseMirror{padding:0px;margin:0}#rich-workspace[data-v-42d14835] .menubar{z-index:61;margin-bottom:-10px}#rich-workspace[data-v-42d14835] .menubar .menubar-icons{margin-left:0}#rich-workspace[data-v-42d14835] .editor__content{margin:0}#rich-workspace.focus[data-v-42d14835]{max-height:50vh}#rich-workspace[data-v-42d14835]:not(.focus){max-height:30vh;position:relative;overflow:hidden}#rich-workspace[data-v-42d14835]:not(.focus):not(.icon-loading):after{content:"";position:absolute;z-index:1;bottom:0;left:0;pointer-events:none;background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-main-background));width:100%;height:4em}#rich-workspace.dark[data-v-42d14835]:not(.focus):not(.icon-loading):after{background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--color-main-background))}@media only screen and (max-width: 1024px){#rich-workspace[data-v-42d14835]:not(.focus){max-height:30vh}}html.ie #rich-workspace[data-v-42d14835] #editor-container{position:initial}html.ie #rich-workspace[data-v-42d14835] #editor-wrapper{position:relative !important;top:auto !important}html.ie #rich-workspace[data-v-42d14835] #editor{display:flex;flex-direction:column;overflow:hidden !important}html.ie #rich-workspace[data-v-42d14835] .menubar{position:relative;overflow:hidden;flex-shrink:0;height:44px;top:auto}html.ie #rich-workspace[data-v-42d14835] #editor>div:nth-child(2){min-height:44px;overflow-x:hidden;overflow-y:auto;flex-shrink:1}',"",{version:3,sources:["webpack://./src/views/RichWorkspace.vue"],names:[],mappings:"AA0KA,iCACC,cAAA,CAEA,mBAAA,CACA,eAAA,CACA,YAAA,CACA,kDAAA,CACA,UAAA,CACA,iBAAA,CACA,2CACC,eAAA,CAKF,4CACC,eAAA,CAGD,kCACC,gBAAA,CACA,mCAAA,CACA,QAAA,CAGD,4DACC,UAAA,CACA,WAAA,CACA,6CAAA,CACA,SAAA,CACA,WAAA,CAGD,mDACC,WAAA,CACA,yBAAA,CACA,mBAAA,CAGD,iDACC,yBAAA,CACA,gBAAA,CAGD,yCACC,2BAAA,CAGD,kDACC,0BAAA,CACA,4BAAA,CACA,iBAAA,CACA,mBAAA,CAGD,8DACC,WAAA,CACA,QAAA,CAGD,0CACC,UAAA,CAEA,mBAAA,CAGD,yDACC,aAAA,CAGD,kDACC,QAAA,CAGD,uCACC,eAAA,CAGD,6CACC,eAAA,CACA,iBAAA,CACA,eAAA,CAGD,sEACC,UAAA,CACA,iBAAA,CACA,SAAA,CACA,QAAA,CACA,MAAA,CACA,mBAAA,CACA,iGAAA,CACA,UAAA,CACA,UAAA,CAGD,2EACC,2FAAA,CAGD,2CACC,6CACC,eAAA,CAAA,CAMA,2DACC,gBAAA,CAGD,yDACC,4BAAA,CACA,mBAAA,CAGD,iDACC,YAAA,CACA,qBAAA,CACA,0BAAA,CAGD,kDACC,iBAAA,CACA,eAAA,CACA,aAAA,CACA,WAAA,CACA,QAAA,CAGD,kEACC,eAAA,CACA,iBAAA,CACA,eAAA,CACA,aAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#rich-workspace {\n\tpadding: 0 50px;\n\t/* Slightly reduce vertical space */\n\tmargin-bottom: -24px;\n\ttext-align: left;\n\tmax-height: 0;\n\ttransition: max-height 0.5s cubic-bezier(0, 1, 0, 1);\n\tz-index: 61;\n\tposition: relative;\n\t&.creatable {\n\t\tmin-height: 90px;\n\t}\n}\n\n/* For subfolders, where there are no Recommendations */\n#rich-workspace:only-child {\n\tmargin-bottom: 0;\n}\n\n.empty-workspace {\n\tpadding-top: 43px;\n\tcolor: var(--color-text-maxcontrast);\n\theight: 0;\n}\n\n#rich-workspace::v-deep div[contenteditable=false] {\n\twidth: 100%;\n\tpadding: 0px;\n\tbackground-color: var(--color-main-background);\n\topacity: 1;\n\tborder: none;\n}\n\n#rich-workspace::v-deep #editor-container {\n\theight: 100%;\n\tposition: unset !important;\n\ttop: auto !important;\n}\n\n#rich-workspace::v-deep #editor-wrapper {\n\tposition: unset !important;\n\toverflow: visible;\n}\n\n#rich-workspace::v-deep #editor {\n\toverflow: visible !important;\n}\n\n#rich-workspace::v-deep .content-wrapper {\n\toverflow: scroll !important;\n\tmax-height: calc(40vh - 50px);\n\tpadding-left: 10px;\n\tpadding-bottom: 60px; /* ensure menububble fits below */\n}\n\n#rich-workspace::v-deep #editor-wrapper .ProseMirror {\n\tpadding: 0px;\n\tmargin: 0;\n}\n\n#rich-workspace::v-deep .menubar {\n\tz-index: 61;\n\t/* Slightly reduce vertical space */\n\tmargin-bottom: -10px;\n}\n\n#rich-workspace::v-deep .menubar .menubar-icons {\n\tmargin-left: 0;\n}\n\n#rich-workspace::v-deep .editor__content {\n\tmargin: 0;\n}\n\n#rich-workspace.focus {\n\tmax-height: 50vh;\n}\n\n#rich-workspace:not(.focus) {\n\tmax-height: 30vh;\n\tposition: relative;\n\toverflow: hidden;\n}\n\n#rich-workspace:not(.focus):not(.icon-loading):after {\n\tcontent: '';\n\tposition: absolute;\n\tz-index: 1;\n\tbottom: 0;\n\tleft: 0;\n\tpointer-events: none;\n\tbackground-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-main-background));\n\twidth: 100%;\n\theight: 4em;\n}\n\n#rich-workspace.dark:not(.focus):not(.icon-loading):after {\n\tbackground-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--color-main-background));\n}\n\n@media only screen and (max-width: 1024px) {\n\t#rich-workspace:not(.focus) {\n\t\tmax-height: 30vh;\n\t}\n}\n\nhtml.ie {\n\t#rich-workspace::v-deep {\n\t\t#editor-container {\n\t\t\tposition: initial;\n\t\t}\n\n\t\t#editor-wrapper {\n\t\t\tposition: relative !important;\n\t\t\ttop: auto !important;\n\t\t}\n\n\t\t#editor {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\toverflow: hidden !important;\n\t\t}\n\n\t\t.menubar {\n\t\t\tposition: relative;\n\t\t\toverflow: hidden;\n\t\t\tflex-shrink: 0;\n\t\t\theight: 44px;\n\t\t\ttop: auto;\n\t\t}\n\n\t\t#editor > div:nth-child(2) {\n\t\t\tmin-height: 44px;\n\t\t\toverflow-x: hidden;\n\t\t\toverflow-y: auto;\n\t\t\tflex-shrink: 1;\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]);const c=a},72246:(n,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>G});var o=i(44429),r=i(15168),a=i.n(r);const c=[{label:t("text","Undo"),class:"icon-undo",isActive:function(n){return!1},isDisabled:function(n){return 0===n.undoDepth()},action:function(n){return n.undo()}},{label:t("text","Redo"),class:"icon-redo",isActive:function(n){return!1},isDisabled:function(n){return 0===n.redoDepth()},action:function(n){return n.redo()}},{label:t("text","Bold"),class:"icon-bold",isActive:function(n){return n.strong()},action:function(n){return n.strong()}},{label:t("text","Italic"),class:"icon-italic",isActive:function(n){return n.em()},action:function(n){return n.em()}},{label:t("text","Strikethrough"),class:"icon-strike",isActive:function(n){return n.strike()},action:function(n){return n.strike()}},{label:t("text","Headings"),visible:!1,children:[{label:t("text","Heading 1"),class:"icon-h1",isActive:function(n){return n.heading({level:1})},action:function(n){return n.heading({level:1})}},{label:t("text","Heading 2"),class:"icon-h2",isActive:function(n){return n.heading({level:2})},action:function(n){return n.heading({level:2})}},{label:t("text","Heading 3"),class:"icon-h3",isActive:function(n){return n.heading({level:3})},action:function(n){return n.heading({level:3})}},{label:t("text","Heading 4"),class:"icon-h4",isActive:function(n){return n.heading({level:4})},action:function(n){return n.heading({level:4})}},{label:t("text","Heading 5"),class:"icon-h5",isActive:function(n){return n.heading({level:5})},action:function(n){return n.heading({level:5})}},{label:t("text","Heading 6"),class:"icon-h6",isActive:function(n){return n.heading({level:6})},action:function(n){return n.heading({level:6})}}]},{label:t("text","Unordered list"),class:"icon-ul",isActive:function(n){return n.bullet_list()},action:function(n){return n.bullet_list_item()}},{label:t("text","Ordered list"),class:"icon-ol",isActive:function(n){return n.ordered_list()},action:function(n){return n.ordered_list()}},{label:t("text","ToDo list"),class:"icon-checkmark",isActive:function(n){return!1},action:function(n){return n.todo_item()}},{label:t("text","Blockquote"),class:"icon-quote",isActive:function(n){return n.blockquote()},action:function(n){return n.blockquote()}},{label:t("text","Code block"),class:"icon-code",isActive:function(n){return n.code_block()},action:function(n){return n.code_block()}},{label:t("text","Emoji picker"),class:"icon-emoji",isActive:function(n){return!1},action:function(n,t){return n.emoji(t)}}];var l=i(24144),s=i(79440),A=i.n(s),d=i(56286),u=i.n(d),p=i(26533),h=i.n(p),C=i(64056),f=i.n(C),m=i(2649),b=i.n(m),v=i(22200);function g(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var i,o,r=[],a=!0,c=!1;try{for(e=e.call(n);!(a=(i=e.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(n){c=!0,o=n}finally{try{a||null==e.return||e.return()}finally{if(c)throw o}}return r}(n,t)||x(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(n){return function(n){if(Array.isArray(n))return w(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||x(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(n,t){if(n){if("string"==typeof n)return w(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?w(n,t):void 0}}function w(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}const y={name:"MenuBar",components:{EditorMenuBar:o.Yz,ActionButton:u(),PopoverMenu:h(),Actions:A(),EmojiPicker:f()},directives:{Tooltip:a(),ClickOutside:b()},props:{editor:{type:Object,required:!1,default:null},isRichEditor:{type:Boolean,default:!0},autohide:{type:Boolean,default:!1},isPublic:{type:Boolean,default:!1},filePath:{type:String,required:!1,default:""}},data:function(){return{windowWidth:0,windowHeight:0,forceRecompute:0,submenuVisibility:{},lastImagePath:null,icons:k(c)}},computed:{isHiddenInMenu:function(){var n=this;return function(t){return t-n.iconCount>=0}},getIconClasses:function(){return function(n,t){var e={"is-active":"function"==typeof t.isActive&&t.isActive(n)};return e[t.class]=!0,e}},disabled:function(){return function(n,t){return!1}},isChildMenuVisible:function(){var n=this;return function(t){return!!Object.prototype.hasOwnProperty.call(n.submenuVisibility,t.label)&&n.submenuVisibility[t.label]}},allIcons:function(){var n=this;return this.isPublic?this.icons:[].concat(k(this.icons),[{label:t("text","Insert image"),class:"icon-image",isActive:function(){},action:function(t){n.showImagePrompt(t.image)}}])},childPopoverMenu:function(){var n=this;return function(t,e,i,o){var r=[],a=function(a){r.push({text:i[a].label,icon:i[a].class,action:function(){i[a].action(e),n.hideChildMenu(o)},active:i[a].isActive(t)})};for(var c in i)a(c);return r}},childIconClasses:function(){var n=this;return function(t,e){var i=n.childIcon(t,e);return n.getIconClasses(t,i)}},childIcon:function(){return function(n,t){for(var e in t){var i=t[e];if(i.isActive(n))return i}return t[0]}},iconCount:function(){this.forceRecompute,this.windowWidth;var n=this.$refs.menubar&&this.$refs.menubar.clientWidth>200?this.$refs.menubar.clientWidth:200,t=Math.max(Math.floor(n/44)-2,0);return t-1},imagePath:function(){return this.lastImagePath||this.filePath.split("/").slice(0,-1).join("/")}},mounted:function(){var n=this;window.addEventListener("resize",this.getWindowWidth),this.checkInterval=setInterval((function(){var t=n.$refs.menubar&&n.$refs.menubar.clientWidth>0;n.isRichEditor&&t&&n.redrawMenuBar(),n.isRichEditor&&!t||clearInterval(n.checkInterval)}),100)},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)},methods:{redrawMenuBar:function(){var n=this;this.$nextTick((function(){n.getWindowWidth(),n.forceRecompute++}))},clickIcon:function(n,t){return this.editor.focus(),t.action(n)},getWindowWidth:function(n){this.windowWidth=document.documentElement.clientWidth},getWindowHeight:function(n){this.windowHeight=document.documentElement.clientHeight},hideChildMenu:function(n){this.$set(this.submenuVisibility,n.label,!1)},toggleChildMenu:function(n){var t=!!Object.prototype.hasOwnProperty.call(this.submenuVisibility,n.label)&&this.submenuVisibility[n.label];this.$set(this.submenuVisibility,n.label,!t)},showImagePrompt:function(n){var e=this;if((0,v.getCurrentUser)()){var i=n;OC.dialogs.filepicker(t("text","Insert an image"),(function(n){OC.Files.getClient().getFileInfo(n).then((function(n,t){e.lastImagePath=t.path;var o={mimetype:t.mimetype,hasPreview:t.hasPreview},r=(0,l.Lz)(e.filePath,"".concat(t.path,"/").concat(t.name)).split("/").map(encodeURIComponent).join("/"),a=Object.entries(o).map((function(n){var t=g(n,2),e=t[0],i=t[1];return"".concat(e,"=").concat(encodeURIComponent(i))})).join("&"),c="".concat(r,"?fileId=").concat(t.id,"#").concat(a);i({src:c,alt:t.name})}))}),!1,[],!0,void 0,this.imagePath)}},showLinkPrompt:function(n){var t=this;if(OC.getCurrentUser()){var e=n;OC.dialogs.filepicker("Insert a link",(function(n){OC.Files.getClient().getFileInfo(n).then((function(n,i){t.lastLinkPath=i.path;var o=t.optimalPathTo("".concat(i.path,"/").concat(i.name)).split("/").map(encodeURIComponent).join("/"),r="".concat(o,"?fileId=").concat(i.id);e({href:r})}))}),!1,[],!0,void 0,this.linkPath)}},optimalPathTo:function(n){var t=n.split("/"),e=this.relativePathTo(n).split("/");return e.length<t.length?e.join("/"):n},relativePathTo:function(n){var t=this.filePath.split("/"),e=n.split("/");for(t.pop();t[0]===e[0];)t.shift(),e.shift();return t.fill("..").concat(e).join("/")},addEmoji:function(n,t,e){return t.action(n,e)}}};var _=i(93379),I=i.n(_),B=i(7795),E=i.n(B),D=i(90569),P=i.n(D),M=i(3565),O=i.n(M),S=i(19216),U=i.n(S),T=i(44589),j=i.n(T),F=i(15711),W={};W.styleTagTransform=j(),W.setAttributes=O(),W.insert=P().bind(null,"head"),W.domAPI=E(),W.insertStyleElement=U();I()(F.Z,W);F.Z&&F.Z.locals&&F.Z.locals;const G=(0,i(51900).Z)(y,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("EditorMenuBar",{attrs:{editor:n.editor},scopedSlots:n._u([{key:"default",fn:function(t){var i=t.commands,o=t.isActive,r=t.focused;return[e("div",{staticClass:"menubar",class:{"is-focused":r,autohide:n.autohide}},[n.isRichEditor?e("div",{ref:"menubar",staticClass:"menubar-icons"},[n._l(n.allIcons,(function(t,r){return["icon-emoji"===t.class?e("EmojiPicker",{key:t.label,staticClass:"menuitem-emoji",on:{select:function(t){return n.addEmoji(i,n.allIcons.find((function(n){return"icon-emoji"===n.class})),t)}}},[e("button",{staticClass:"icon-emoji",attrs:{title:n.t("text","Insert emoji"),"aria-label":n.t("text","Insert emoji"),"aria-haspopup":!0}})]):t.class?e("button",{directives:[{name:"show",rawName:"v-show",value:r<n.iconCount,expression:"$index < iconCount"}],key:t.label,class:n.getIconClasses(o,t),attrs:{title:t.label,disabled:n.disabled(i,t)},on:{click:function(e){return n.clickIcon(i,t)}}}):[e("div",{directives:[{name:"show",rawName:"v-show",value:r<n.iconCount||!t.class,expression:"$index < iconCount || !icon.class"},{name:"click-outside",rawName:"v-click-outside",value:function(){return n.hideChildMenu(t)},expression:"() => hideChildMenu(icon)"}],key:t.label,staticClass:"submenu"},[e("button",{class:n.childIconClasses(o,t.children),attrs:{title:t.label},on:{click:function(e){return e.preventDefault(),n.toggleChildMenu(t)}}}),n._v(" "),e("div",{staticClass:"popovermenu menu-center",class:{open:n.isChildMenuVisible(t)}},[e("PopoverMenu",{attrs:{menu:n.childPopoverMenu(o,i,t.children,t)}})],1)])]]})),n._v(" "),e("Actions",[n._l(n.allIcons,(function(t,o){return[t.class&&n.isHiddenInMenu(o)&&"icon-emoji"!==t.class?e("ActionButton",{key:t.class,attrs:{icon:t.class,"close-after-click":!0},on:{click:function(e){return n.clickIcon(i,t)}}},[n._v("\n\t\t\t\t\t\t"+n._s(t.label)+"\n\t\t\t\t\t")]):n._e()]}))],2)],2):n._e(),n._v(" "),n._t("default",(function(){return[n._v("\n\t\t\tLeft side\n\t\t")]}))],2)]}}],null,!0)})}),[],!1,null,"37dde84a",null).exports},28804:(n,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>y});var o=i(44429),r=i(15168),a=i.n(r),c=i(24144),l=i(16453);const s={name:"MenuBubble",components:{EditorMenuBubble:o.eb},directives:{tooltip:a()},props:{editor:{type:Object,required:!1,default:null},contentWrapper:{type:HTMLDivElement,required:!1,default:null},filePath:{type:String,required:!1,default:""}},data:function(){return{linkUrl:null,linkMenuIsActive:!1,isUsingDirectEditing:null!==(0,l.loadState)("text","directEditingToken",null)}},computed:{minLeft:function(){return this.linkMenuIsActive||!this.editor.isActive.link()?150:225}},methods:{showLinkMenu:function(n){var t=this;this.linkUrl=n.href,this.linkMenuIsActive=!0,this.$nextTick((function(){t.$refs.linkInput.focus()}))},hideLinkMenu:function(){this.linkUrl=null,this.linkMenuIsActive=!1},selectFile:function(n){var e=this;if(OC.getCurrentUser()){var i=this.filePath.split("/").slice(0,-1).join("/");OC.dialogs.filepicker(t("text","Select file to link to"),(function(t){OC.Files.getClient().getFileInfo(t).then((function(t,i){var o=(0,c.Lz)(e.filePath,"".concat(i.path,"/").concat(i.name)).split("/").map(encodeURIComponent).join("/");n({href:"".concat(o,"?fileId=").concat(i.id)}),e.hideLinkMenu()}))}),!1,[],!0,void 0,i)}},setLinkUrl:function(n,t){t&&![/^[a-zA-Z]+:/,/^\//,/\?fileId=/,/^\.\.?\//,/^[^.]*[/$]/,/^#/].find((function(n){return t.match(n)}))&&(t="https://"+t),t.replaceAll(" ","%20"),n({href:t}),this.hideLinkMenu()},bubblePosition:function(n){var t,e=Math.max(this.minLeft,n.left),i=(null===(t=this.contentWrapper)||void 0===t?void 0:t.scrollTop)||0;return{top:"".concat(n.top+i+5,"px"),left:"".concat(e,"px")}}}};var A=i(93379),d=i.n(A),u=i(7795),p=i.n(u),h=i(90569),C=i.n(h),f=i(3565),m=i.n(f),b=i(19216),v=i.n(b),g=i(44589),k=i.n(g),x=i(40407),w={};w.styleTagTransform=k(),w.setAttributes=m(),w.insert=C().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=v();d()(x.Z,w);x.Z&&x.Z.locals&&x.Z.locals;const y=(0,i(51900).Z)(s,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("EditorMenuBubble",{staticClass:"menububble",attrs:{editor:n.editor},on:{hide:n.hideLinkMenu},scopedSlots:n._u([{key:"default",fn:function(t){var i=t.commands,o=t.isActive,r=t.getMarkAttrs,a=t.menu;return[e("div",{staticClass:"menububble",class:{"is-active":a.isActive},style:n.bubblePosition(a)},[n.linkMenuIsActive?e("form",{staticClass:"menububble__form",on:{submit:function(t){return t.preventDefault(),n.setLinkUrl(i.link,n.linkUrl)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.linkUrl,expression:"linkUrl"}],ref:"linkInput",staticClass:"menububble__input",attrs:{type:"text",placeholder:"https://"},domProps:{value:n.linkUrl},on:{keydown:function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:n.hideLinkMenu.apply(null,arguments)},input:function(t){t.target.composing||(n.linkUrl=t.target.value)}}}),n._v(" "),e("button",{staticClass:"menububble__button icon-confirm",attrs:{type:"button",tabindex:"0"},on:{click:function(t){return n.setLinkUrl(i.link,n.linkUrl)}}})]):[e("button",{staticClass:"menububble__button",class:{"is-active":o.link()},on:{click:function(t){n.showLinkMenu(r("link"))}}},[e("span",{staticClass:"icon-link"}),n._v(" "),e("span",{staticClass:"menububble__buttontext"},[n._v("\n\t\t\t\t\t"+n._s(o.link()?n.t("text","Update Link"):n.t("text","Add Link"))+"\n\t\t\t\t")])]),n._v(" "),n.isUsingDirectEditing?n._e():e("button",{staticClass:"menububble__button",class:{"is-active":o.link()},on:{click:function(t){return n.selectFile(i.link)}}},[e("span",{staticClass:"icon-file"}),n._v(" "),e("span",{staticClass:"menububble__buttontext"},[n._v(n._s(n.t("text","Link file")))])])]],2)]}}])})}),[],!1,null,"4f7a9200",null).exports}}]);
//# sourceMappingURL=editor-rich.js.map?v=c5d9ef0f7817c145c00a
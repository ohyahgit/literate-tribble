(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{237:function(t,e,n){var content=n(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("dc093880",content,!0,{sourceMap:!1})},277:function(t,e,n){"use strict";var r={name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}},o=n(93),c=n(149),l=n.n(c),v=n(415),d=n(421),m=n(416),f=n(278),_=n(422),h=n(417),w=n(185),V=n(186),x=n(121),k=n(187),y=n(90),D=n(418),L=n(420),N=n(419),I=n(272),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[n("v-icon",[t._v("mdi-application")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[n("v-icon",[t._v("mdi-minus")])],1),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[n("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),n("v-main",[n("v-container",[n("Nuxt")],1)],1),t._v(" "),n("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[n("v-list",[n("v-list-item",{nativeOn:{click:function(e){t.right=!t.right}}},[n("v-list-item-action",[n("v-icon",{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),n("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),n("v-footer",{attrs:{absolute:!t.fixed,app:""}},[n("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:v.a,VAppBar:d.a,VAppBarNavIcon:m.a,VBtn:f.a,VContainer:_.a,VFooter:h.a,VIcon:w.a,VList:V.a,VListItem:x.a,VListItemAction:k.a,VListItemContent:y.a,VListItemTitle:y.b,VMain:D.a,VNavigationDrawer:L.a,VSpacer:N.a,VToolbarTitle:I.a})},284:function(t,e,n){n(285),t.exports=n(286)},316:function(t,e,n){"use strict";n(237)},317:function(t,e,n){var r=n(20)(!1);r.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=r},81:function(t,e,n){"use strict";var r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(316),n(93)),c=n(149),l=n.n(c),v=n(415),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[284,6,1,7]]]);
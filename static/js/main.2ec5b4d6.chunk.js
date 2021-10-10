(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(21),s=a.n(c),o=a(12),i=a(4),l=a(5),u=a(7),h=a(6),d=a(0),m=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchInput:"",searchResult:[]},e.getSubmitValue=function(t){t.preventDefault(),e.props.submit(e.state.searchInput),e.setState({searchInput:""})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.getSubmitValue,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(t){return e.setState({searchInput:t.target.value})},value:this.state.searchInput})]})})})}}]),a}(r.Component),p=a(11),g=a.n(p),j=a(22),b=a(23),f=a.n(b).a.create({baseURL:"https://pixabay.com/api/"}),O=function(e){return{params:e}},v=function(){var e=Object(j.a)(g.a.mark((function e(){var t,a,r,n=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,a=n.length>1&&void 0!==n[1]?n[1]:3,r=n.length>2&&void 0!==n[2]?n[2]:"cat",e.abrupt("return",f.get("?key=23372923-aa63da10459dab2a89fc14fe7",O({q:r,per_page:a,page:t})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=v,S=function(e){var t=e.data,a=e.img,r=e.galleryList;return Object(d.jsx)("div",{children:Object(d.jsx)("ul",{className:"ImageGallery",ref:r,children:t.map((function(e){return Object(d.jsx)("li",{className:"ImageGalleryItem",children:Object(d.jsx)("img",{src:e.webformatURL,alt:e.tags,className:"ImageGalleryItem-image",onClick:function(){return a(e.largeImageURL)}})},e.id)}))})})},x=function(e){var t=e.clicker;return Object(d.jsx)("button",{onClick:t,className:"Button",children:"load more"})},w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).closeModals=function(t){"Escape"===t.code&&e.props.modalSwitch()},e.backDropClose=function(t){t.target===t.currentTarget&&e.props.modalSwitch()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModals)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModals)}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"Overlay",children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{src:this.props.largeImage,alt:this.props.largeImage,onClick:function(){return e.props.modalSwitch()}})})})}}]),a}(r.Component),k=a(24),I=a.n(k),R=function(){return Object(d.jsx)(I.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})},N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={searchQuerry:"",searchResult:[],page:1,loading:!1,modal:!1,largeImage:""},e.galleryList=Object(r.createRef)(),e.loadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.searchQuerry=function(t){e.setState({searchQuerry:t})},e.modalOpen=function(t){e.setState({largeImage:t}),e.setState({modal:!0})},e.modalSwitch=function(){e.setState({modal:!1})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){var r=this,n=this.state.searchQuerry,c=t.searchQuerry,s=this.state.page,i=t.page;n!==c&&this.setState({page:1,searchResult:[]}),n===c&&s===i||(this.setState({loading:!0}),y(s,12,n).then((function(e){return e.data.hits})).then((function(e){return setTimeout((function(){r.setState((function(t){return{searchResult:[].concat(Object(o.a)(t.searchResult),Object(o.a)(e)),loading:!1}}))}),1e3)}))),a&&window.scrollTo({top:a,behavior:"smooth"})}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return t.searchResult.length<this.state.searchResult.length?this.galleryList.current.scrollHeight:null}},{key:"render",value:function(){var e=this.state,t=e.largeImage,a=e.searchResult,r=e.searchQuerry,n=e.loading,c=e.modal;return Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{submit:this.searchQuerry}),Object(d.jsx)(S,{data:a,img:this.modalOpen,galleryList:this.galleryList}),r&&Object(d.jsx)(x,{clicker:this.loadMore}),n&&Object(d.jsx)(R,{}),c&&Object(d.jsx)(w,{largeImage:t,modalSwitch:this.modalSwitch})]})}}]),a}(r.Component);a(69);s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.2ec5b4d6.chunk.js.map
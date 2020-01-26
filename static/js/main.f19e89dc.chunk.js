(this.webpackJsonpravenous=this.webpackJsonpravenous||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),c=a.n(r),o=(a(14),a(1)),i=a(2),l=a(4),u=a(3),h=a(6),m=a(5),p=(a(15),a(16),a(17),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.business;return s.a.createElement("div",{class:"Business"},s.a.createElement("div",{className:"image-container"},s.a.createElement("img",{src:"https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",alt:""})),s.a.createElement("h2",null,e.name),s.a.createElement("div",{className:"Business-information"},s.a.createElement("div",{className:"Business-address"},s.a.createElement("p",null,e.address),s.a.createElement("p",null,e.city),s.a.createElement("p",null,e.state," ",e.zipCode)),s.a.createElement("div",{className:"Business-reviews"},s.a.createElement("h3",null,e.category),s.a.createElement("h3",{className:"rating"},e.rate," stars"),s.a.createElement("p",null,e.reviewCount," reviews"))))}}]),t}(s.a.Component)),d=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"BusinessList"},this.props.businesses.map((function(e){return s.a.createElement(p,{key:e.id,business:e})})))}}]),t}(s.a.Component),f=(a(18),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSortByChange=function(e){a.props.searchYelp(a.state.term,a.state.location,e),a.setState({sortBy:e})},a.handleTermChange=function(e){a.setState({term:e.target.value})},a.handleLocationChange=function(e){a.setState({location:e.target.value})},a.handleSearchClick=function(e){a.props.searchYelp(a.state.term,a.state.location,a.state.sortBy),e.preventDefault()},a.handleSearchEnter=function(e){"Enter"===e.key&&(a.props.searchYelp(a.state.term,a.state.location,a.state.sortBy),e.preventDefault())},a.renderSortByOptions=function(){return Object.keys(a.sortByOptions).map((function(e){var t=a.sortByOptions[e];return s.a.createElement("li",{key:t,onClick:a.handleSortByChange.bind(Object(h.a)(a),t),className:a.getSortByClass(t)},e)}))},a.state={term:"",location:"",sortBy:"best_match"},a.sortByOptions={"Best Match":"best_match","Highest Rated":"rating","Most Reviewed":"review_count"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"getSortByClass",value:function(e){return this.state.sortBy===e?"active":""}},{key:"render",value:function(){return s.a.createElement("div",{className:"SearchBar",onKeyPress:this.handleSearchEnter},s.a.createElement("div",{className:"SearchBar-sort-options"},s.a.createElement("ul",null,this.renderSortByOptions())),s.a.createElement("div",{className:"SearchBar-fields"},s.a.createElement("input",{onChange:this.handleTermChange,placeholder:"Search Businesses"}),s.a.createElement("input",{onChange:this.handleLocationChange,placeholder:"Where?"})),s.a.createElement("div",{className:"SearchBar-submit"},s.a.createElement("a",{onClick:this.handleSearchClick,href:"foo"},"Let's Go")))}}]),t}(s.a.Component)),v={searchYelp:function(e,t,a){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t,"&sort_by=").concat(a),{headers:{Authorization:"Bearer ".concat("ff3CaiKPth6YCpr7eW4GhNuK0_QKoTIpETPswX4RVBAOj0I28rhbaLTFi60TBDK0txzaP1kvwVdSe2PaE-iCxqS6oM-1FVL6j0JbW63NrrqN-h7CHteYntL3AerEXXYx")}}).then((function(e){return e.json()})).then((function(e){if(e.businesses)return console.log(e.businesses),e.businesses.map((function(e){return console.log(e),{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zipCode,category:e.categories[0].title,rating:e.rating,reviewCount:e.reviewCount}}))}))}},b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={businesses:[]},a.searchYelp=a.searchYelp.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"searchYelp",value:function(e,t,a){var n=this;console.log("Searching Yelp with ".concat(e,", ").concat(t,", ").concat(a)),v.searchYelp(e,t,a).then((function(e){n.setState({businesses:e})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"ravenous"),s.a.createElement(f,{searchYelp:this.searchYelp}),s.a.createElement(d,{businesses:this.state.businesses}))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.f19e89dc.chunk.js.map
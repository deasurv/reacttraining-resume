(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){},25:function(e,t,a){e.exports=a(58)},30:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(10),r=a.n(i),o=(a(30),a(2)),s=a(3),l=a(5),m=a(4),u=a(6),p=a(7),h=(a(41),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"change-color",onMouseUp:this.props.colorize},c.a.createElement("i",{className:"fas fa-palette"}),c.a.createElement("span",null,"Colorize!")),c.a.createElement("div",{id:"menu"},c.a.createElement("div",{className:"sub-menu"},c.a.createElement(p.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,duration:500,onSetActive:this.handleSetActive},"About")),c.a.createElement("div",{className:"sub-menu"},c.a.createElement(p.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,duration:500,onSetActive:this.handleSetActive},"Portfolio"))))}}]),t}(n.Component)),b=(a(43),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.children;return c.a.createElement("div",{className:"full-screen-page ".concat(this.props.className||"")},e)}}]),t}(n.Component)),d=(a(45),a(23)),f=a(11),v=a(24);f.b.add(v.a);var j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("a",{href:this.props.link,className:"fa-social-icons ".concat(this.props.icon||"")},c.a.createElement(d.a,{icon:["fab",this.props.icon]}))}}]),t}(n.Component),E=(a(22),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"scroll-down bounce"},c.a.createElement(p.Link,{activeClass:"active",to:this.props.to,spy:!0,smooth:!0,duration:500,onSetActive:this.handleSetActive},c.a.createElement("span",null,"Click Me!"),c.a.createElement("i",{className:"fas fa-chevron-down"})))}}]),t}(n.Component)),g=a(8),y=(a(48),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(b,{name:"first",className:"first"},c.a.createElement("h1",{className:"title"},g.title),c.a.createElement("h3",{className:"subtitle"},g.subtitle),c.a.createElement("div",null,Object.keys(g.links).map(function(e){return c.a.createElement(j,{icon:e,link:g.links[e]})})),c.a.createElement(E,{to:"about"}))}}]),t}(n.Component)),O=(a(50),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(p.Element,{name:"about",className:"element"},c.a.createElement(b,{className:"second"},c.a.createElement("h2",{className:"title"},g.sections[0].title),c.a.createElement("div",null,g.sections[0].items.map(function(e){return c.a.createElement("p",null,e.content)})),c.a.createElement(E,{to:"skills"})))}}]),t}(n.Component)),k=(a(52),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.skill;return c.a.createElement("div",{className:"card-parent"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("img",{src:e.content.image})),c.a.createElement("div",{className:"content-wrapper"},c.a.createElement("h3",null,e.content.title))))}}]),t}(n.Component)),w=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"scroll-down bounce"},c.a.createElement(p.Link,{activeClass:"active",to:this.props.to,spy:!0,smooth:!0,duration:500,onSetActive:this.handleSetActive},c.a.createElement("span",null,"To Top"),c.a.createElement("i",{className:"fas fa-chevron-up"})))}}]),t}(n.Component),N=(a(54),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(p.Element,{name:"skills",className:"element"},c.a.createElement(b,{className:"third"},c.a.createElement("h2",{className:"title"},g.sections[1].title),c.a.createElement("div",{className:"card-container"},g.sections[1].items.map(function(e){return c.a.createElement(k,{skill:e})})),c.a.createElement(w,{to:"first"})))}}]),t}(n.Component)),C=(a(56),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).colorize=function(){e.setState({backgroundColor:"255, 255, 255"==e.state.backgroundColor?"44, 62, 80":"255, 255, 255",color:"#000"==e.state.color?"#fff":"#000"})},e.state={backgroundColor:"255, 255, 255",color:"#000"},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App",style:{color:this.state.color,backgroundColor:"rgb(".concat(this.state.backgroundColor,")")}},c.a.createElement(h,{colorize:this.colorize}),c.a.createElement(y,null),c.a.createElement(O,null),c.a.createElement(N,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e){e.exports={title:"Hello, I am Majid",subtitle:"Maybe a Developer! | Graphic Designer | Music Lover!",links:{"telegram-plane":"https://t.me/deasurv",instagram:"https://instagram.com/majid__fatahi","stack-overflow":"https://stackoverflow.com/story/deasurv",github:"https://github.com/deasurv"},sections:[{title:"About",items:[{type:"p",content:"I like JavaScript and everything web."},{type:"p",content:"When my dev senses kick-in I build presumably awesome stuff. I stay close to the community and try to keep tabs with the pace at which the web is evolving. I also like to blog what I learn."},{type:"p",content:"I built this site from scratch. By scratch, I mean absolutely from scratch without any UI library/framework (except React though) and had so much fun along the way."}]},{title:"Skills",items:[{type:"card",content:{image:"./image/js.png",title:"JavaScript"}},{type:"card",content:{image:"./image/reactjs.png",title:"ReactJS"}},{type:"card",content:{image:"./image/html.png",title:"HTML"}},{type:"card",content:{image:"./image/css.png",title:"CSS"}},{type:"card",content:{image:"./image/design.png",title:"Design"}},{type:"card",content:{image:"./image/linux.png",title:"Linux"}},{type:"card",content:{image:"./image/php.png",title:"PHP"}},{type:"card",content:{image:"./image/zf.png",title:"Zend Framework"}}]}]}}},[[25,2,1]]]);
//# sourceMappingURL=main.46abc175.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(t,e,a){"use strict";a.r(e);var n=a(7),s=a.n(n),r=a(0),i=a.n(r),o=a(150),d=(a(162),a(34),function(t){var e=t.score,a=t.reset;return i.a.createElement("div",{id:"open-modal",class:"modal-window"},i.a.createElement("div",null,i.a.createElement("h1",null,"Game Over!"),i.a.createElement("h2",null,"Your Score: ",e),i.a.createElement("button",{onClick:function(t){return a()}},"Try again")))}),l=function(t){function e(e){var a;return(a=t.call(this,e)||this).onEverySecond=function(){if(!a.state.dead){var t=a.state.direction;t[a.state.startI][a.state.startJ]=a.state.keyPressed;t[a.state.startI][a.state.startJ];var e=a.state.direction[a.state.endI][a.state.endJ],n=a.state.gameArray;if("left"==a.state.keyPressed?a.setState(Object.assign({},a.state,{startJ:0==a.state.startJ?19:a.state.startJ-1,lastPressed:"left"})):"right"==a.state.keyPressed?a.setState(Object.assign({},a.state,{startJ:19==a.state.startJ?0:a.state.startJ+1,lastPressed:"right"})):"down"==a.state.keyPressed?a.setState(Object.assign({},a.state,{startI:19==a.state.startI?0:a.state.startI+1,lastPressed:"down"})):"up"==a.state.keyPressed&&a.setState(Object.assign({},a.state,{startI:0==a.state.startI?19:a.state.startI-1,lastPressed:"up"})),2==a.state.gameArray[a.state.startI][a.state.startJ]){a.state.gameArray[a.state.startI][a.state.startJ]=0;for(var s=a.state.gameArray,r=Math.floor(20*Math.random()),i=Math.floor(20*Math.random());1===s[r][i];)r=Math.floor(20*Math.random()),i=Math.floor(20*Math.random());s[r][i]=2,a.setState(Object.assign({},a.state,{gameArray:s,points:a.state.points+1}))}else t[a.state.endI][a.state.endJ]=null,n[a.state.endI][a.state.endJ]=0,"left"==e?a.setState(Object.assign({},a.state,{endJ:0==a.state.endJ?19:a.state.endJ-1})):"right"==e?a.setState(Object.assign({},a.state,{endJ:19==a.state.endJ?0:a.state.endJ+1})):"down"==e?a.setState(Object.assign({},a.state,{endI:19==a.state.endI?0:a.state.endI+1})):"up"==e&&a.setState(Object.assign({},a.state,{endI:0==a.state.endI?19:a.state.endI-1}));1==n[a.state.startI][a.state.startJ]?(document.getElementById("open-modal").style.opacity=1,document.getElementById("open-modal").style.pointerEvents="auto",a.setState(Object.assign({},a.state,{dead:!0}))):(n[a.state.startI][a.state.startJ]=1,a.setState(Object.assign({},a.state,{gameArray:n,direction:t})))}},a.reset=function(){console.log("resetting"),document.getElementById("open-modal").style.opacity=0,document.getElementById("open-modal").style.pointerEvents="none";var t={dead:!1,startI:1,startJ:1,endI:0,endJ:1,keyPressed:"down",foodI:4,foodJ:4,points:0};document.addEventListener("keydown",a.keydown,!1);var e=Array(20).fill(0).map(function(t){return Array(20).fill(0)}),n=Array(20).fill(0).map(function(t){return Array(20).fill(null)});e[t.startI][t.startJ]=1,e[t.foodI][t.foodJ]=2,n[t.startI][t.startJ]="down",n[t.endI][t.endJ]="down",e[t.endI][t.endJ]=1,a.setState(Object.assign({},t,{gameArray:e,direction:n}))},a.keydown=function(t){"ArrowLeft"===t.key?"right"!==a.state.lastPressed&&a.setState(Object.assign({},a.state,{keyPressed:"left"})):"ArrowRight"===t.key?"left"!==a.state.lastPressed&&a.setState(Object.assign({},a.state,{keyPressed:"right"})):"ArrowDown"===t.key?"up"!==a.state.lastPressed&&a.setState(Object.assign({},a.state,{keyPressed:"down"})):"ArrowUp"===t.key&&"down"!==a.state.lastPressed&&a.setState(Object.assign({},a.state,{keyPressed:"up"}))},a.state={startI:1,startJ:1,endI:0,endJ:1,keyPressed:"down",foodI:4,foodJ:4,points:0},a}s()(e,t);var a=e.prototype;return a.componentDidMount=function(){document.addEventListener("keydown",this.keydown,!1);var t=Array(20).fill(0).map(function(t){return Array(20).fill(0)}),e=Array(20).fill(0).map(function(t){return Array(20).fill(null)});t[this.state.startI][this.state.startJ]=1,t[this.state.foodI][this.state.foodJ]=2,e[this.state.startI][this.state.startJ]="down",e[this.state.endI][this.state.endJ]="down",t[this.state.endI][this.state.endJ]=1,this.setState(Object.assign({},this.state,{gameArray:t,direction:e})),setInterval(this.onEverySecond,100)},a.render=function(){var t=this;return i.a.createElement("div",null,i.a.createElement(d,{score:this.state.points,reset:this.reset}),i.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},Array(20).fill(0).map(function(e,a){return i.a.createElement("div",{key:a,style:{display:"flex",flexDirection:"row"}},Array(20).fill(0).map(function(e,n){return i.a.createElement("div",{key:n,style:{display:"flex",alignContent:"center",alignItems:"center",justifyContent:"center",height:"2.1em",width:"2.1em",backgroundColor:t.state.gameArray?a==t.state.startI&&n==t.state.startJ?"#8fd3f4":1==t.state.gameArray[a][n]?"#8fd3f4":2==t.state.gameArray[a][n]?"#009966":"rgba(255, 255, 255, 0.5)":"rgba(255, 255, 255, 0.5)",animation:t.state.gameArray&&2==t.state.gameArray[a][n]?"smallbig 1s infinite":"none"}},i.a.createElement("span",null,t.state.gameArray&&a==t.state.startI&&n==t.state.startJ?i.a.createElement("div",{style:{height:"0.8em",width:"0.8em",backgroundColor:"red",borderRadius:"50%"}}):null))}))})))},e}(r.Component);a.d(e,"default",function(){return c});var c=function(t){function e(){return t.apply(this,arguments)||this}return s()(e,t),e.prototype.render=function(){return i.a.createElement(o.a,null,i.a.createElement(l,null))},e}(i.a.Component)},146:function(t,e,a){"use strict";a.d(e,"b",function(){return c});var n=a(0),s=a.n(n),r=a(4),i=a.n(r),o=a(33),d=a.n(o);a.d(e,"a",function(){return d.a});a(147);var l=s.a.createContext({}),c=function(t){return s.a.createElement(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},147:function(t,e,a){var n;t.exports=(n=a(149))&&n.default||n},148:function(t){t.exports={data:{site:{siteMetadata:{title:"The Snake Game"}}}}},149:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),s=a.n(n),r=a(4),i=a.n(r),o=a(55),d=a(2),l=function(t){var e=t.location,a=d.default.getResourcesForPathnameSync(e.pathname);return a?s.a.createElement(o.a,Object.assign({location:e,pageResources:a},a.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},150:function(t,e,a){"use strict";var n=a(148),s=a(0),r=a.n(s),i=a(4),o=a.n(i),d=a(146),l=function(t){var e=t.siteTitle;return r.a.createElement("header",{style:{background:"rgba(0,0,0,0)",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(d.a,{to:"/",style:{color:"#009966",textDecoration:"none"}},e))))};l.propTypes={siteTitle:o.a.string},l.defaultProps={siteTitle:""};var c=l,u=(a(151),a(152),function(t){var e=t.children;return r.a.createElement(d.b,{query:"755544856",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,{siteTitle:t.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,e)))},data:n})});u.propTypes={children:o.a.node.isRequired};e.a=u},162:function(t,e,a){var n=a(11);n(n.P,"Array",{fill:a(163)}),a(35)("fill")},163:function(t,e,a){"use strict";var n=a(25),s=a(74),r=a(14);t.exports=function(t){for(var e=n(this),a=r(e.length),i=arguments.length,o=s(i>1?arguments[1]:void 0,a),d=i>2?arguments[2]:void 0,l=void 0===d?a:s(d,a);l>o;)e[o++]=t;return e}}}]);
//# sourceMappingURL=component---src-pages-index-js-dd31cb8699ee3d6f86a7.js.map
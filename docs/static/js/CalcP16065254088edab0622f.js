(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{409:function(t,n,r){"use strict";var e={name:"CalcInput",props:{v:Array,PH:Array}},a=r(2),o=Object(a.a)(e,function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("Row",t._l(t.v,function(n,e){return r("Col",{key:e,attrs:{span:24/t.v.length}},[r("Input",{attrs:{number:"",placeholder:t.PH[e]},model:{value:t.v[e],callback:function(n){t.$set(t.v,e,n)},expression:"v[i]"}})],1)}))},[],!1,null,null,null);n.a=o.exports},410:function(t,n,r){"use strict";r.d(n,"b",function(){return f}),r.d(n,"a",function(){return l}),r.d(n,"i",function(){return s}),r.d(n,"h",function(){return h}),r.d(n,"g",function(){return P}),r.d(n,"c",function(){return C}),r.d(n,"f",function(){return k}),r.d(n,"d",function(){return R}),r.d(n,"e",function(){return O});var e=r(412),a=r.n(e),o=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},u=function(){return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,n){var r=[],e=!0,a=!1,o=void 0;try{for(var u,c=t[Symbol.iterator]();!(e=(u=c.next()).done)&&(r.push(u.value),!n||r.length!==n);e=!0);}catch(t){a=!0,o=t}finally{try{!e&&c.return&&c.return()}finally{if(a)throw o}}return r}(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function c(t){if(Array.isArray(t)){for(var n=0,r=Array(t.length);n<t.length;n++)r[n]=t[n];return r}return Array.from(t)}function i(t){return Array.isArray(t)?t:Array.from(t)}var f=function(t){return a.a.encode(t)},l=function(t){return a.a.decode(t)},s=function(t,n){arguments.length>2&&void 0!==arguments[2]&&!arguments[2]?localStorage[f(t)]=f(n):localStorage[f(t)]=f(JSON.stringify(n))},h=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=localStorage[f(t)];if(r)try{var e=l(r);return n?function(t){try{return JSON.parse(t)}catch(t){return""}}(e):e}catch(t){return""}return""},v=function(t){return((t.LV-1)*t.GC+t.IA)*t.ISI/100},d=function(t){var n=t.ISI,r=t.ISR;return 100*((n+(void 0===r?2.5:r))*t.FV/100).toFixed(3)/100},p=function(t,n,r,e,a){return~~(Math.min(t+e,150)*(r+4*n)/(Math.min(a,150)+4*e))},m=function(t){var n=u(t,4);return 4*n[0]+n[1]+n[2]+n[3]},g=function(t){var n=u(t,4),r=n[0],e=n[1];return.1*(r+n[2])+e+.05*n[3]},y=function(t){var n=u(t,4);return.1*(n[0]+n[1])+n[2]+.05*n[3]},F=function(t){var n=u(t,4);n[0],n[1],n[2];return n[3]},x=[{h:5,m:4.75,l:4.5},{h:5.2,m:4.95,l:4.7},{h:5.4,m:5.15,l:4.9},{h:5.6,m:5.35,l:5.1},{h:5.8,m:5.55,l:5.3},{h:6,m:5.75,l:5.5}],P=function(t){var n=t.reduce(function(t,n){return t+n});return n>=100?x[0]:n>=95?x[1]:n>=90?x[2]:n>=85?x[3]:n>=80?x[4]:x[5]},C=function(t){var n=t.GC,r=void 0===n?4:n,e=t.GPF,a=t.GPFR,o=t.f,u=t.FV,c=i(e),f=c[0],l=c[1],s=c.slice(2),h=s.map(function(t,n){return t+a[n]+o[n]}).map(function(t){return v({LV:f,GC:r,IA:l,ISI:t})}),p=s.map(function(t,n){return d({ISI:t+o[n],FV:u})}),x=+m(h).toFixed(2),P=+g(h).toFixed(2),C=+y(h).toFixed(2),k=+F(h).toFixed(2),b=+m(p).toFixed(4),I=+g(p).toFixed(4),w=+y(p).toFixed(4),A=+F(p).toFixed(4),S=+(I+w+A).toFixed(4);return{health:{hhp:h[0],hatk:h[1],hdef:h[2],hagi:h[3]},fourWei:[x,P,C,k],gRate:{vhp:b,vatk:I,vdef:w,vagi:A,vSum:S}}},k=function(t){var n=t.GC,r=void 0===n?4:n,e=t.GPF,a=t.GPFR,o=t.f,u=t.gf,f=t.tf,l=i(e),s=(l[0],l[1]),h=l.slice(2),P=[].concat(c(h),c(o)).reduce(function(t,n){return t+n}),C=function(t){var n=t.reduce(function(t,n){return t+n});return n>=100?11:n>=90?12:n>=85?13:n>=80?14:15}(h),k=u.reduce(function(t,n){return t+n}),b=[p(C,h[0]+o[0],u[0],P,k),p(C,h[1]+o[1],u[1],P,k),p(C,h[2]+o[2],u[2],P,k),p(C,h[3]+o[3],u[3],P,k)],I=b.map(function(t,n){return t+a[n]+ +f[n]}),w=function(t){var n=t.reduce(function(t,n){return t+n});return n>=130?x[0]:n>=100?x[1]:n>=95?x[2]:n>=85?x[3]:n>=80?x[4]:x[5]}(b.map(function(t,n){return t+ +f[n]})).m,A=I.map(function(t){return v({LV:1,GC:r,IA:s,ISI:t})}),S=b.map(function(t,n){return d({ISI:t+f[n],FV:w})}),R=+m(A).toFixed(2),_=+g(A).toFixed(2),O=+y(A).toFixed(2),G=+F(A).toFixed(2),j=+m(S).toFixed(4),N=+g(S).toFixed(4),V=+y(S).toFixed(4),E=+F(S).toFixed(4),J=+(N+V+E).toFixed(4);return{health:{hhp:A[0],hatk:A[1],hdef:A[2],hagi:A[3]},fourWei:[R,_,O,G],tGpf:b,gRate:{vhp:j,vatk:N,vdef:V,vagi:E,vSum:J}}},b=function(t){var n=[],r=[];return function t(e,a){for(var o=0;o<e[a].length;o++)r[a]=e[a][o],a!==e.length-1?t(e,a+1):n.push([].concat(r))}(t,0),n},I=[-2,-1,0,1,2],w=b([I,I,I,I]),A=[].concat(c(Array(11).keys())),S=b([A,A,A,A]).filter(function(t){return 10===t.reduce(function(t,n){return t+n})}),R=function(t){return new Promise(function(n){var r={},e=i(t),a=(e[0],e[1],e.slice(2)),c=P(a).m;setTimeout(function(){w.forEach(function(n){var e=u(n,4),a=e[0],i=e[1],f=e[2],l=e[3];S.forEach(function(n){var e=u(n,4),s=e[0],h=e[1],v=e[2],d=e[3],p=C({GPF:t,GPFR:[s,h,v,d],f:[a,i,f,l],FV:c}),m=u(p.fourWei,4),g=m[0],y=m[1],F=m[2],x=m[3],P=p.health,k=p.gRate,b=o({hp:g,atk:y,def:F,agi:x,ghp:s,gatk:h,gdef:v,gagi:d,fhp:a,fatk:i,fdef:f,fagi:l},P,k),I=~~g+","+~~y+","+~~F+","+~~x;r[I]?r[I].push(b):r[I]=[b]})}),n(r)},50)})},_=function(t,n){return Math.round(100*t/n-2.5,0)},O=function(t){var n=t.P,r=function(t){var n=u(t,4);return(1.1*n[0]-n[1]-n[2]-n[3])/4.2}(n),e=function(t){var n=u(t,5),r=(n[0],n[1]),e=n[2],a=n[3];return(10*r-e-.9*n[4]-.45*a)/9.9}([].concat(c(n),[r])),a=function(t){var n=u(t,5),r=(n[0],n[1]),e=n[2],a=n[3];return(10*e-r-.9*n[4]-.45*a)/9.9}([].concat(c(n),[r])),o=function(t){var n=u(t,4);n[0],n[1],n[2];return n[3]}(n),i=[];return x.forEach(function(t){var n=t.m,u=_(r,n)-2,c=_(e,n)-2,f=_(a,n)-2,l=_(o,n)-2;return P([u,c,f,l]).m===n&&(i.push({hp:u,atk:c,def:f,agi:l,m:n}),!0)}),i}},414:function(t,n,r){},420:function(t,n,r){"use strict";var e=r(414);r.n(e).a},432:function(t,n,r){"use strict";r.r(n);var e=r(410);function a(t){if(Array.isArray(t)){for(var n=0,r=Array(t.length);n<t.length;n++)r[n]=t[n];return r}return Array.from(t)}var o={name:"Home",data:function(){var t=Object(e.h)("CalcP")||[];return{name:"",P:[].concat(["","","",""]),columns:[{title:"成長檔",align:"center",className:"color1",children:[{title:"成長係數",key:"m",align:"center",className:"color1"},{title:"體",key:"hp",align:"center",className:"color1"},{title:"腕",key:"atk",align:"center",className:"color1"},{title:"耐",key:"def",align:"center",className:"color1"},{title:"速",key:"agi",align:"center",className:"color1"}]}],data:[],storage:t}},mounted:function(){try{var t=JSON.parse(Object(e.a)(this.$route.query.search)).P;this.P=t,this.handleCalc(!1)}catch(t){}},computed:{},methods:{handleCalc:function(){var t=this,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,r){return function e(a,o){try{var u=n[a](o),c=u.value}catch(t){return void r(t)}if(!u.done)return Promise.resolve(c).then(function(t){e("next",t)},function(t){e("throw",t)});t(c)}("next")})}}(regeneratorRuntime.mark(function r(){var o,u,c;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:o=[].concat(a(t.P)),u=t.name,c=Object(e.b)(JSON.stringify({P:o,name:u})),t.$router.push({path:"CalcP",query:{search:c}}),t.data=Object(e.e)(t),n&&(t.storage.unshift({name:u,P:o}),t.storage.length>4&&t.storage.pop(),Object(e.i)("CalcP",t.storage));case 6:case"end":return r.stop()}},r,t)}))()},handleRecodeCalc:function(t){var n=this.storage[t],r=n.P,e=n.name;this.name=e,this.P=[].concat(a(r)),this.handleCalc(!1)}},components:{CalcInput:r(409).a}},u=(r(420),r(2)),c=Object(u.a)(o,function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"container"},[r("Row",[r("Col",{attrs:{span:"12"}},[r("Row",[r("Col",{attrs:{span:"16"}},[r("Button",{attrs:{type:"info",long:""}},[t._v("\n                      基礎素質\n                  ")])],1),t._v(" "),r("Col",{attrs:{span:"8"}},[r("Input",{attrs:{placeholder:"寵物名稱"},model:{value:t.name,callback:function(n){t.name=n},expression:"name"}})],1)],1),t._v(" "),r("Row",[r("Col",{attrs:{span:"24"}},[r("Button",{attrs:{type:"info",long:""}},[t._v("\n                      成長率\n                  ")])],1)],1),t._v(" "),r("CalcInput",{attrs:{v:t.P,PH:["生命成長率","攻擊成長率","防禦成長率","速度成長率"]}}),t._v(" "),r("Row",[r("Col",{attrs:{span:"24"}},[r("Button",{attrs:{type:"success",long:"",icon:"ios-search"},on:{click:t.handleCalc}},[t._v("\n                      計算\n                  ")])],1)],1)],1),t._v(" "),r("Col",{attrs:{span:"12"}},t._l(t.storage,function(n,e){var a=n.P,o=n.name;return r("Button",{key:e,attrs:{type:"ghost",long:"",icon:"ios-search"},on:{click:function(n){t.handleRecodeCalc(e)}}},[t._v("\n              "+t._s(o+" "+a.join())+"\n          ")])}))],1),t._v(" "),r("Row",[r("Col",{attrs:{span:"24"}},[r("Table",{attrs:{border:"",columns:t.columns,data:t.data}})],1)],1)],1)},[],!1,null,"6e792979",null);n.default=c.exports}}]);
//# sourceMappingURL=CalcP16065254088edab0622f.js.map
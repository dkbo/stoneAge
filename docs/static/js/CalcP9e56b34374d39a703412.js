(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{409:function(t,n,r){"use strict";var e={name:"CalcInput",props:{v:Array,PH:Array}},a=r(2),o=Object(a.a)(e,function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("Row",t._l(t.v,function(n,e){return r("Col",{key:e,attrs:{span:24/t.v.length}},[r("Input",{attrs:{number:"",placeholder:t.PH[e]},model:{value:t.v[e],callback:function(n){t.$set(t.v,e,n)},expression:"v[i]"}})],1)}))},[],!1,null,null,null);n.a=o.exports},410:function(t,n,r){"use strict";r.d(n,"b",function(){return f}),r.d(n,"a",function(){return l}),r.d(n,"i",function(){return s}),r.d(n,"h",function(){return h}),r.d(n,"g",function(){return C}),r.d(n,"c",function(){return w}),r.d(n,"f",function(){return I}),r.d(n,"d",function(){return G}),r.d(n,"e",function(){return N});var e=r(412),a=r.n(e),o=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},u=function(){return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,n){var r=[],e=!0,a=!1,o=void 0;try{for(var u,c=t[Symbol.iterator]();!(e=(u=c.next()).done)&&(r.push(u.value),!n||r.length!==n);e=!0);}catch(t){a=!0,o=t}finally{try{!e&&c.return&&c.return()}finally{if(a)throw o}}return r}(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function c(t){if(Array.isArray(t)){for(var n=0,r=Array(t.length);n<t.length;n++)r[n]=t[n];return r}return Array.from(t)}function i(t){return Array.isArray(t)?t:Array.from(t)}var f=function(t){return a.a.encode(t)},l=function(t){return a.a.decode(t)},s=function(t,n){arguments.length>2&&void 0!==arguments[2]&&!arguments[2]?localStorage[f(t)]=f(n):localStorage[f(t)]=f(JSON.stringify(n))},h=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=localStorage[f(t)];if(r)try{var e=l(r);return n?function(t){try{return JSON.parse(t)}catch(t){return""}}(e):e}catch(t){return""}return""},v=function(t){return((t.LV-1)*t.GC+t.IA)*t.ISI/100},d=function(t){var n=t.ISI,r=t.ISR;return 100*((n+(void 0===r?2.5:r))*t.FV/100).toFixed(3)/100},p=function(t,n,r,e,a){return~~(Math.min(t+e,150)*(r+4*n)/(a+4*e))},m=function(t,n){return~~(t+139*n)},g=function(t){var n=u(t,4);return 4*n[0]+n[1]+n[2]+n[3]},y=function(t){var n=u(t,4),r=n[0],e=n[1];return.1*(r+n[2])+e+.05*n[3]},F=function(t){var n=u(t,4);return.1*(n[0]+n[1])+n[2]+.05*n[3]},x=function(t){var n=u(t,4);n[0],n[1],n[2];return n[3]},P=[{h:5,m:4.75,l:4.5},{h:5.2,m:4.95,l:4.7},{h:5.4,m:5.15,l:4.9},{h:5.6,m:5.35,l:5.1},{h:5.8,m:5.55,l:5.3},{h:6,m:5.75,l:5.5}],C=function(t){var n=t.reduce(function(t,n){return t+n});return n>=100?P[0]:n>=95?P[1]:n>=90?P[2]:n>=85?P[3]:n>=80?P[4]:P[5]},k=function(t){var n=t.reduce(function(t,n){return t+n});return n>=130?P[0]:n>=100?P[1]:n>=95?P[2]:n>=85?P[3]:n>=80?P[4]:P[5]},b={4.75:0,4.95:1,5.15:2,5.35:3,5.55:4,5.75:5},w=function(t){var n=t.GC,r=void 0===n?4:n,e=t.GPF,a=t.GPFR,o=t.f,u=t.FV,c=i(e),f=c[0],l=c[1],s=c.slice(2),h=s.map(function(t,n){return t+a[n]+o[n]}).map(function(t){return v({LV:f,GC:r,IA:l,ISI:t})}),p=s.map(function(t,n){return d({ISI:t+o[n],FV:u})}),m=+g(h).toFixed(2),P=+y(h).toFixed(2),C=+F(h).toFixed(2),k=+x(h).toFixed(2),b=+g(p).toFixed(4),w=+y(p).toFixed(4),I=+F(p).toFixed(4),A=+x(p).toFixed(4),S=+(w+I+A).toFixed(4);return{health:{hhp:h[0],hatk:h[1],hdef:h[2],hagi:h[3]},fourWei:[m,P,C,k],gRate:{vhp:b,vatk:w,vdef:I,vagi:A,vSum:S}}},I=function(t){var n=t.GC,r=void 0===n?4:n,e=t.GPF,a=t.GPFR,o=t.f,u=t.gf,f=t.tf,l=t.FV,s=i(e),h=s[0],P=s[1],C=s.slice(2),w=[].concat(c(C),c(o)).reduce(function(t,n){return t+n}),I=Math.min(u.reduce(function(t,n){return t+n}),150),A=~~(1.3*Math.max(~~Math.pow(I/100,5),0))+~~((h-100)/(1.2*(5-b[l])+5)),S=[p(A,C[0]+o[0],u[0],w,I),p(A,C[1]+o[1],u[1],w,I),p(A,C[2]+o[2],u[2],w,I),p(A,C[3]+o[3],u[3],w,I)],R=S.map(function(t,n){return t+a[n]+ +f[n]}),_=k(S.map(function(t,n){return t+ +f[n]})).m,O=R.map(function(t){return v({LV:1,GC:r,IA:P,ISI:t})}),G=S.map(function(t,n){return d({ISI:t+f[n],FV:_})}),j=+g(O).toFixed(2),N=+y(O).toFixed(2),V=+F(O).toFixed(2),E=+x(O).toFixed(2),J=+g(G).toFixed(4),M=+y(G).toFixed(4),$=+F(G).toFixed(4),B=+x(G).toFixed(4),H=+(M+$+B).toFixed(4),W=m(+j,+J),L=m(+N,+M),T=m(+V,+$),q=m(+B,+B);return{health:{hhp:O[0],hatk:O[1],hdef:O[2],hagi:O[3]},fourWei:[j,N,V,E],tGpf:S,gRate:{vhp:J,vatk:M,vdef:$,vagi:B,vSum:H},fullFourWei:{ffhp:W,ffatk:L,ffdef:T,ffagi:q}}},A=function(t){var n=[],r=[];return function t(e,a){for(var o=0;o<e[a].length;o++)r[a]=e[a][o],a!==e.length-1?t(e,a+1):n.push([].concat(r))}(t,0),n},S=[-2,-1,0,1,2],R=A([S,S,S,S]),_=[].concat(c(Array(11).keys())),O=A([_,_,_,_]).filter(function(t){return 10===t.reduce(function(t,n){return t+n})}),G=function(t){return new Promise(function(n){var r={},e=i(t),a=(e[0],e[1],e.slice(2)),c=C(a).m;setTimeout(function(){R.forEach(function(n){var e=u(n,4),a=e[0],i=e[1],f=e[2],l=e[3];O.forEach(function(n){var e=u(n,4),s=e[0],h=e[1],v=e[2],d=e[3],p=w({GPF:t,GPFR:[s,h,v,d],f:[a,i,f,l],FV:c}),m=u(p.fourWei,4),g=m[0],y=m[1],F=m[2],x=m[3],P=p.health,C=p.gRate,k=o({hp:g,atk:y,def:F,agi:x,ghp:s,gatk:h,gdef:v,gagi:d,fhp:a,fatk:i,fdef:f,fagi:l},P,C),b=~~g+","+~~y+","+~~F+","+~~x;r[b]?r[b].push(k):r[b]=[k]})}),n(r)},50)})},j=function(t,n){return Math.round(100*t/n-2.5,0)},N=function(t){var n=t.P,r=function(t){var n=u(t,4);return(1.1*n[0]-n[1]-n[2]-n[3])/4.2}(n),e=function(t){var n=u(t,5),r=(n[0],n[1]),e=n[2],a=n[3];return(10*r-e-.9*n[4]-.45*a)/9.9}([].concat(c(n),[r])),a=function(t){var n=u(t,5),r=(n[0],n[1]),e=n[2],a=n[3];return(10*e-r-.9*n[4]-.45*a)/9.9}([].concat(c(n),[r])),o=function(t){var n=u(t,4);n[0],n[1],n[2];return n[3]}(n),i=[];return P.forEach(function(t){var n=t.m,u=j(r,n)-2,c=j(e,n)-2,f=j(a,n)-2,l=j(o,n)-2;return C([u,c,f,l]).m===n&&(i.push({hp:u,atk:c,def:f,agi:l,m:n}),!0)}),i}},414:function(t,n,r){},420:function(t,n,r){"use strict";var e=r(414);r.n(e).a},432:function(t,n,r){"use strict";r.r(n);var e=r(410);function a(t){if(Array.isArray(t)){for(var n=0,r=Array(t.length);n<t.length;n++)r[n]=t[n];return r}return Array.from(t)}var o={name:"Home",data:function(){var t=Object(e.h)("CalcP")||[];return{name:"",P:[].concat(["","","",""]),columns:[{title:"成長檔",align:"center",className:"color1",children:[{title:"成長係數",key:"m",align:"center",className:"color1"},{title:"體",key:"hp",align:"center",className:"color1"},{title:"腕",key:"atk",align:"center",className:"color1"},{title:"耐",key:"def",align:"center",className:"color1"},{title:"速",key:"agi",align:"center",className:"color1"}]}],data:[],storage:t}},mounted:function(){try{var t=JSON.parse(Object(e.a)(this.$route.query.search)).P;this.P=t,this.handleCalc(!1)}catch(t){}},computed:{},methods:{handleCalc:function(){var t=this,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,r){return function e(a,o){try{var u=n[a](o),c=u.value}catch(t){return void r(t)}if(!u.done)return Promise.resolve(c).then(function(t){e("next",t)},function(t){e("throw",t)});t(c)}("next")})}}(regeneratorRuntime.mark(function r(){var o,u,c;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:o=[].concat(a(t.P)),u=t.name,c=Object(e.b)(JSON.stringify({P:o,name:u})),t.$router.push({path:"CalcP",query:{search:c}}),t.data=Object(e.e)(t),n&&(t.storage.unshift({name:u,P:o}),t.storage.length>4&&t.storage.pop(),Object(e.i)("CalcP",t.storage));case 6:case"end":return r.stop()}},r,t)}))()},handleRecodeCalc:function(t){var n=this.storage[t],r=n.P,e=n.name;this.name=e,this.P=[].concat(a(r)),this.handleCalc(!1)}},components:{CalcInput:r(409).a}},u=(r(420),r(2)),c=Object(u.a)(o,function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"container"},[r("Row",[r("Col",{attrs:{span:"12"}},[r("Row",[r("Col",{attrs:{span:"16"}},[r("Button",{attrs:{type:"info",long:""}},[t._v("\n                      基礎素質\n                  ")])],1),t._v(" "),r("Col",{attrs:{span:"8"}},[r("Input",{attrs:{placeholder:"寵物名稱"},model:{value:t.name,callback:function(n){t.name=n},expression:"name"}})],1)],1),t._v(" "),r("Row",[r("Col",{attrs:{span:"24"}},[r("Button",{attrs:{type:"info",long:""}},[t._v("\n                      成長率\n                  ")])],1)],1),t._v(" "),r("CalcInput",{attrs:{v:t.P,PH:["生命成長率","攻擊成長率","防禦成長率","速度成長率"]}}),t._v(" "),r("Row",[r("Col",{attrs:{span:"24"}},[r("Button",{attrs:{type:"success",long:"",icon:"ios-search"},on:{click:t.handleCalc}},[t._v("\n                      計算\n                  ")])],1)],1)],1),t._v(" "),r("Col",{attrs:{span:"12"}},t._l(t.storage,function(n,e){var a=n.P,o=n.name;return r("Button",{key:e,attrs:{type:"ghost",long:"",icon:"ios-search"},on:{click:function(n){t.handleRecodeCalc(e)}}},[t._v("\n              "+t._s(o+" "+a.join())+"\n          ")])}))],1),t._v(" "),r("Row",[r("Col",{attrs:{span:"24"}},[r("Table",{attrs:{border:"",columns:t.columns,data:t.data}})],1)],1)],1)},[],!1,null,"6e792979",null);n.default=c.exports}}]);
//# sourceMappingURL=CalcP9e56b34374d39a703412.js.map
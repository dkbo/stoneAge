(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{410:function(n,a,t){"use strict";var e={name:"CalcInput",props:{v:Array,PH:Array}},r=t(2),o=Object(r.a)(e,function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("Row",n._l(n.v,function(a,e){return t("Col",{key:e,attrs:{span:24/n.v.length}},[t("Input",{attrs:{number:"",placeholder:n.PH[e]},model:{value:n.v[e],callback:function(a){n.$set(n.v,e,a)},expression:"v[i]"}})],1)}))},[],!1,null,null,null);a.a=o.exports},411:function(n,a,t){"use strict";t.d(a,"b",function(){return m}),t.d(a,"a",function(){return l}),t.d(a,"j",function(){return f}),t.d(a,"i",function(){return s}),t.d(a,"h",function(){return b}),t.d(a,"c",function(){return k}),t.d(a,"g",function(){return I}),t.d(a,"d",function(){return j}),t.d(a,"e",function(){return D}),t.d(a,"f",function(){return E});var e=t(413),r=t.n(e),o=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},i=function(){return function(n,a){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,a){var t=[],e=!0,r=!1,o=void 0;try{for(var i,u=n[Symbol.iterator]();!(e=(i=u.next()).done)&&(t.push(i.value),!a||t.length!==a);e=!0);}catch(n){r=!0,o=n}finally{try{!e&&u.return&&u.return()}finally{if(r)throw o}}return t}(n,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function u(n){if(Array.isArray(n)){for(var a=0,t=Array(n.length);a<n.length;a++)t[a]=n[a];return t}return Array.from(n)}function c(n){return Array.isArray(n)?n:Array.from(n)}var m=function(n){return r.a.encode(n)},l=function(n){return r.a.decode(n)},f=function(n,a){arguments.length>2&&void 0!==arguments[2]&&!arguments[2]?localStorage[m(n)]=m(a):localStorage[m(n)]=m(JSON.stringify(a))},s=function(n){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=localStorage[m(n)];if(t)try{var e=l(t);return a?function(n){try{return JSON.parse(n)}catch(n){return""}}(e):e}catch(n){return""}return""},h=function(n){return((n.LV-1)*n.GC+n.IA)*n.ISI/100},F=function(n){var a=n.ISI,t=n.ISR;return 100*((a+(void 0===t?2.5:t))*n.FV/100).toFixed(3)/100},d=function(n,a,t,e,r){return~~(Math.min(n+e,150)*(t+4*a)/(r+4*e))},p=function(n,a){return~~(n+139*a)},P=function(n){var a=i(n,4);return 4*a[0]+a[1]+a[2]+a[3]},v=function(n){var a=i(n,4),t=a[0],e=a[1];return.1*(t+a[2])+e+.05*a[3]},G=function(n){var a=i(n,4);return.1*(a[0]+a[1])+a[2]+.05*a[3]},g=function(n){var a=i(n,4);a[0],a[1],a[2];return a[3]},y=[{h:5,m:4.75,l:4.5},{h:5.2,m:4.95,l:4.7},{h:5.4,m:5.15,l:4.9},{h:5.6,m:5.35,l:5.1},{h:5.8,m:5.55,l:5.3},{h:6,m:5.75,l:5.5}],b=function(n){var a=n.reduce(function(n,a){return n+a});return a>=100?y[0]:a>=95?y[1]:a>=90?y[2]:a>=85?y[3]:a>=80?y[4]:y[5]},x=function(n){var a=n.reduce(function(n,a){return n+a});return a>=130?y[0]:a>=100?y[1]:a>=95?y[2]:a>=85?y[3]:a>=80?y[4]:y[5]},C={4.75:0,4.95:1,5.15:2,5.35:3,5.55:4,5.75:5},k=function(n){var a=n.GC,t=void 0===a?4:a,e=n.GPF,r=n.GPFR,o=n.f,i=n.FV,u=c(e),m=u[0],l=u[1],f=u.slice(2),s=f.map(function(n,a){return n+r[a]+o[a]}).map(function(n){return h({LV:m,GC:t,IA:l,ISI:n})}),d=f.map(function(n,a){return F({ISI:n+o[a],FV:i})}),p=+P(s).toFixed(2),y=+v(s).toFixed(2),b=+G(s).toFixed(2),x=+g(s).toFixed(2),C=~~(~~p/4)+~~y+~~b+~~x,k=+P(d).toFixed(4),I=+v(d).toFixed(4),w=+G(d).toFixed(4),A=+g(d).toFixed(4),S=+(I+w+A).toFixed(4);return{health:{hhp:s[0],hatk:s[1],hdef:s[2],hagi:s[3]},fourWei:[p,y,b,x,C],gRate:{vhp:k,vatk:I,vdef:w,vagi:A,vSum:S}}},I=function(n){var a=n.GC,t=void 0===a?4:a,e=n.GPF,r=n.GPFR,o=n.f,i=n.gf,m=n.tf,l=n.FV,f=c(e),s=f[0],y=f[1],b=f.slice(2),k=[].concat(u(b),u(o)).reduce(function(n,a){return n+a}),I=Math.min(i.reduce(function(n,a){return n+a}),150),w=~~(1.3*Math.max(~~Math.pow(I/100,5),0))+~~((s-100)/(1.2*(5-C[l])+5)),A=[d(w,b[0]+o[0],i[0],k,I),d(w,b[1]+o[1],i[1],k,I),d(w,b[2]+o[2],i[2],k,I),d(w,b[3]+o[3],i[3],k,I)],S=A.map(function(n,a){return n+r[a]+ +m[a]}),_=x(A.map(function(n,a){return n+ +m[a]})).m,O=S.map(function(n){return h({LV:1,GC:t,IA:y,ISI:n})}),j=A.map(function(n,a){return F({ISI:n+m[a],FV:_})}),R=+P(O).toFixed(2),D=+v(O).toFixed(2),E=+G(O).toFixed(2),V=+g(O).toFixed(2),H=~~(~~R/4)+~~D+~~E+~~V,N=+P(j).toFixed(4),J=+v(j).toFixed(4),M=+G(j).toFixed(4),$=+g(j).toFixed(4),T=+(J+M+$).toFixed(4),W=p(+R,+N),B=p(+D,+J),L=p(+E,+M),q=p(+$,+$),z=~~(W/4)+B+L+q;return{health:{hhp:O[0],hatk:O[1],hdef:O[2],hagi:O[3]},fourWei:[R,D,E,V,H],tGpf:A,gRate:{vhp:N,vatk:J,vdef:M,vagi:$,vSum:T},fullFourWei:{ffhp:W,ffatk:B,ffdef:L,ffagi:q,ffscore:z}}},w=function(n){var a=[],t=[];return function n(e,r){for(var o=0;o<e[r].length;o++)t[r]=e[r][o],r!==e.length-1?n(e,r+1):a.push([].concat(t))}(n,0),a},A=[-2,-1,0,1,2],S=w([A,A,A,A]),_=[].concat(u(Array(11).keys())),O=w([_,_,_,_]).filter(function(n){return 10===n.reduce(function(n,a){return n+a})}),j=function(n){return new Promise(function(a){var t={},e=c(n),r=(e[0],e[1],e.slice(2)),u=b(r).m;setTimeout(function(){S.forEach(function(a){var e=i(a,4),r=e[0],c=e[1],m=e[2],l=e[3];O.forEach(function(a){var e=i(a,4),f=e[0],s=e[1],h=e[2],F=e[3],d=k({GPF:n,GPFR:[f,s,h,F],f:[r,c,m,l],FV:u}),p=i(d.fourWei,5),P=p[0],v=p[1],G=p[2],g=p[3],y=p[4],b=d.health,x=d.gRate,C=o({hp:P,atk:v,def:G,agi:g,score:y,ghp:f,gatk:s,gdef:h,gagi:F,fhp:r,fatk:c,fdef:m,fagi:l},b,x),I=~~P+","+~~v+","+~~G+","+~~g;t[I]?t[I].push(C):t[I]=[C]})}),a(t)},50)})},R=function(n,a){return Math.round(100*n/a-2.5,0)},D=function(n){var a=n.P,t=function(n){var a=i(n,4);return(1.1*a[0]-a[1]-a[2]-a[3])/4.2}(a),e=function(n){var a=i(n,5),t=(a[0],a[1]),e=a[2],r=a[3];return(10*t-e-.9*a[4]-.45*r)/9.9}([].concat(u(a),[t])),r=function(n){var a=i(n,5),t=(a[0],a[1]),e=a[2],r=a[3];return(10*e-t-.9*a[4]-.45*r)/9.9}([].concat(u(a),[t])),o=function(n){var a=i(n,4);a[0],a[1],a[2];return a[3]}(a),c=[];return y.forEach(function(n){var a=n.m,i=R(t,a)-2,u=R(e,a)-2,m=R(r,a)-2,l=R(o,a)-2;return b([i,u,m,l]).m===a&&(c.push({hp:i,atk:u,def:m,agi:l,m:a}),!0)}),c},E=function(n){for(var a=[],t=c(n),e=t[0],r=void 0===e?"":e,o=t[1],i=t.slice(2),m=(r+"").split("."),l=i.reduce(function(n,a){return n+a})+10,f=function(n){var t={};[].concat(u(Array(17))).map(function(n,a){return 8-a}).forEach(function(a){t["c"+a]=~~(((4*(n-1)+o)*(l+a)/100-20)/4).strip()}),t.lv=n,a.push(t)},s=1;s<=140;s++)f(s);return r&&(console.log(m),a=a.filter(function(n){var a=n.lv;return m.find(function(n){return+n==+a})})),a}},412:function(n,a,t){"use strict";var e=[{platform:"石器初心",data:[{name:"人龍系",arr:[{name:"邦奇諾",GPF:[26,25,42,18,24]},{name:"楊奇洛斯",GPF:[29,27,39,21,24]},{name:"利則諾頓",GPF:[23,25,38,25,21]},{name:"邦蒲洛斯",GPF:[25,25,40,20,24]},{name:"布魯頓",GPF:[25,25,39,18,27]}]},{name:"烏龜系",arr:[{name:"石龜",GPF:[20,26,27,42,19]}]},{name:"兔子系",arr:[{name:"克雷爾",GPF:[18,21,29,25,30]},{name:"克克爾",GPF:[18,22,30,25,29]},{name:"克洛爾",GPF:[18,21,32,22,30]},{name:"里斯基",GPF:[17,23,28,27,29]},{name:"克拉爾",GPF:[18,21,28,27,31]}]},{name:"舌頭系",arr:[{name:"貝洛恩",GPF:[24,38,30,35,15]}]}]},{platform:"石器傳說",data:[{name:"人龍系",arr:[{name:"邦奇洛",GPF:[26,28,40,19,21]},{name:"利則諾頓",GPF:[25,28,39,21,19]},{name:"布魯頓",GPF:[25,28,40,15,24]}]},{name:"凱比系",arr:[{name:"凱比特",GPF:[25,28,37,11,31]}]},{name:"舌頭系",arr:[{name:"貝洛恩",GPF:[28,30,36,19,24]}]},{name:"老虎系",arr:[{name:"貝魯卡",GPF:[27,28,35,18,25]},{name:"貝魯伊卡",GPF:[27,28,35,17,26]}]},{name:"雷龍系",arr:[{name:"水雷",GPF:[27,35,26,36,14]},{name:"紅雷",GPF:[27,34,36,26,14]}]},{name:"星星系",arr:[{name:"格爾頓",GPF:[28,28,37,18,25]}]},{name:"海主人系",arr:[{name:"姆依",GPF:[28,31,20,40,18]}]},{name:"跳狗系",arr:[{name:"拉奇魯哥",GPF:[27,29,38,15,25]}]}]},{platform:"石器EE",data:[{name:"馬年獸系",arr:[{name:"葛雷基歐",GPF:[39,24,40,27,22]},{name:"葛雷洛比",GPF:[39,27,40,24,22]},{name:"葛雷吉魯",GPF:[39,24,44,24,22]},{name:"葛雷馬恩",GPF:[39,23,40,22,30]}]},{name:"老虎系",arr:[{name:"貝魯卡",GPF:[24,23,28,16,25]},{name:"貝魯伊卡",GPF:[23,21,30,13,28]},{name:"格魯西斯",GPF:[21,20,30,13,28]},{name:"金格薩貝魯",GPF:[25,19,29,18,29]}]},{name:"雷龍系",arr:[{name:"布洛多斯",GPF:[25,37,27,33,6]},{name:"布林帖斯",GPF:[26,40,23,32,7]},{name:"布拉奇多斯",GPF:[24,35,35,28,6]},{name:"斯天多斯",GPF:[28,40,25,35,5]},{name:"邦恩多斯",GPF:[28,37,30,27,10]}]},{name:"暴龍系",arr:[{name:"奧卡洛斯",GPF:[25,26,34,28,19]},{name:"左迪洛斯",GPF:[26,28,30,22,22]},{name:"巴朵蘭恩",GPF:[27,23,37,20,25]},{name:"帖拉所伊朵",GPF:[28,23,35,25,21]}]},{name:"人龍系",arr:[{name:"利則諾頓",GPF:[22,27,37,19,17]},{name:"揚奇洛斯",GPF:[29,28,39,16,21]},{name:"邦奇諾",GPF:[26,24,39,16,20]},{name:"布魯頓",GPF:[25,25,39,14,26]}]},{name:"2D人龍系",arr:[{name:"2D揚奇洛斯",GPF:[32,28,42,18,25]},{name:"2D布魯頓",GPF:[26,26,41,17,29]},{name:"2D利則諾頓",GPF:[26,26,41,22,22]},{name:"2D邦奇洛",GPF:[26,25,43,20,23]}]},{name:"鯊魚系",arr:[{name:"加格",GPF:[23,30,36,15,19]}]},{name:"犀牛系",arr:[{name:"多洛布斯",GPF:[14,26,38,26,18]},{name:"貝恩達斯",GPF:[16,30,35,26,14]},{name:"多利諾布斯",GPF:[12,27,37,25,16]}]},{name:"鴕鳥系",arr:[{name:"克克洛斯",GPF:[20,20,34,12,36]},{name:"奇寶",GPF:[20,20,36,14,34]}]},{name:"水龍系",arr:[{name:"蘭貝魯斯",GPF:[21,26,37,21,21]}]},{name:"飛龍系",arr:[{name:"朵拉比斯",GPF:[23,22,36,18,28]}]},{name:"威威系",arr:[{name:"威威",GPF:[15,21,36,10,33]},{name:"烏卡魯",GPF:[13,25,35,11,29]},{name:"烏寶寶",GPF:[15,20,35,12,34]},{name:"威伯",GPF:[20,20,35,16,29]}]},{name:"拳王系",arr:[{name:"柏克爾",GPF:[20,23,38,22,24]}]},{name:"跳狗系",arr:[{name:"拉奇魯哥",GPF:[23,24,39,15,22]},{name:"魯尼帖斯",GPF:[22,27,37,16,20]}]},{name:"烏龜系",arr:[{name:"石龜",GPF:[20,27,23,48,5]}]},{name:"穿山甲系",arr:[{name:"卡達魯卡斯",GPF:[22,25,23,40,6]}]},{name:"海主人系",arr:[{name:"邦奇",GPF:[22,32,37,24,13]},{name:"姆伊",GPF:[20,35,35,22,13]},{name:"海主人",GPF:[21,31,35,26,14]},{name:"多魯寶",GPF:[24,30,38,24,14]}]},{name:"加美系",arr:[{name:"邦奇",GPF:[18,20,37,13,34]}]}]},{platform:"水藍石器",data:[{name:"暴龍系",arr:[{name:"朵巴奈特",GPF:[25,28,43,29,27]}]},{name:"人龍系",arr:[{name:"楊格斯",GPF:[27,30,42,23,28]}]},{name:"鴕鳥系",arr:[{name:"塔斯夫",GPF:[19,22,24,13,38]}]},{name:"威威系",arr:[{name:"威比",GPF:[17,22,24,13,39]}]},{name:"烏龜系",arr:[{name:"石龜",GPF:[20,26,21,46,4]}]}]}];a.a=e},434:function(n,a,t){"use strict";t.r(a);var e=t(411),r=t(412),o=t(410),i=function(){return function(n,a){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,a){var t=[],e=!0,r=!1,o=void 0;try{for(var i,u=n[Symbol.iterator]();!(e=(i=u.next()).done)&&(t.push(i.value),!a||t.length!==a);e=!0);}catch(n){r=!0,o=n}finally{try{!e&&u.return&&u.return()}finally{if(r)throw o}}return t}(n,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function u(n){if(Array.isArray(n)){for(var a=0,t=Array(n.length);a<n.length;a++)t[a]=n[a];return t}return Array.from(n)}var c={name:"Home",data:function(){var n=Object(e.i)("CalcPostiveHp")||[],a=Object(e.i)("platform")||0,t=[].concat(u(Array(17))).map(function(n,a){var t=8-a;return{title:t,key:"c"+t,align:"center",className:"color1"}}),o={title:"各檔次毒血量",align:"center",className:"color1",children:[{title:"等級",key:"lv",align:"center",className:"color1"}].concat(u(t))};return{loading:!1,platform:a,pageIndex:1,name:"",name2:"",GPF:["",""].concat(["","","",""]),petData:r.a,columns:[o],data:[],pageData:[],storage:n}},mounted:function(){try{var n=JSON.parse(Object(e.a)(this.$route.query.search)),a=n.GPF,t=n.name;this.GPF=a,this.name=t,this.handleCalc(!1)}catch(n){}},computed:{getPetData:function(){return this.petData[this.platform].data}},methods:{handleChange:function(n){var a=n.split("."),t=i(a,2),e=t[0],r=t[1],o=this.getPetData[e].arr[r],c=o.name,m=o.GPF;this.GPF=[this.GPF[0]].concat(u(m)),this.name=c},handleChangePlatform:function(n){Object(e.j)("platform",n)},handleCalc:function(){var n=this,a=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(n){return function(){var a=n.apply(this,arguments);return new Promise(function(n,t){return function e(r,o){try{var i=a[r](o),u=i.value}catch(n){return void t(n)}if(!i.done)return Promise.resolve(u).then(function(n){e("next",n)},function(n){e("throw",n)});n(u)}("next")})}}(regeneratorRuntime.mark(function t(){var r,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=[].concat(u(n.GPF)),o=n.name,i=Object(e.b)(JSON.stringify({GPF:r,name:o})),n.$router.push({path:"CalcPostiveHp",query:{search:i}}),n.data=Object(e.f)(r),a&&(n.storage.unshift({name:o,GPF:r}),n.storage.length>3&&n.storage.pop(),Object(e.j)("CalcPostiveHp",n.storage)),n.pageData=[].concat(u(n.data.slice(15*(n.pageIndex-1),15)));case 7:case"end":return t.stop()}},t,n)}))()},handleRecodeCalc:function(n){var a=this.storage[n],t=a.GPF,e=a.name;this.name=e,this.GPF=[].concat(u(t)),this.handleCalc(!1)},handleChangePage:function(n){this.pageIndex=n,this.pageData=[].concat(u(this.data.slice(15*(n-1),15*n)))}},components:{CalcInput:o.a}},m=t(2),l=Object(m.a)(c,function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{staticClass:"container"},[t("Row",[t("Col",{attrs:{span:"12"}},[t("Row",[t("Col",{attrs:{span:"6"}},[t("Button",{attrs:{type:"info",long:""}},[n._v("\n                      基礎素質\n                  ")])],1),n._v(" "),t("Col",{attrs:{span:"6"}},[t("Select",{attrs:{filterable:"",long:""},on:{input:n.handleChangePlatform},model:{value:n.platform,callback:function(a){n.platform=a},expression:"platform"}},n._l(n.petData,function(n,a){var e=n.platform;return t("Option",{key:e,attrs:{label:e,value:a}})}))],1),n._v(" "),t("Col",{attrs:{span:"6"}},[t("Select",{attrs:{filterable:"",long:""},on:{input:n.handleChange},model:{value:n.name2,callback:function(a){n.name2=a},expression:"name2"}},n._l(n.getPetData,function(a,e){return t("OptionGroup",{key:a.name,attrs:{label:a.name}},n._l(a.arr,function(n,a){return t("Option",{key:n.name,attrs:{value:e+"."+a,label:n.name}})}))}))],1),n._v(" "),t("Col",{attrs:{span:"6"}},[t("Input",{attrs:{placeholder:"寵物名稱"},model:{value:n.name,callback:function(a){n.name=a},expression:"name"}})],1)],1),n._v(" "),t("CalcInput",{attrs:{v:n.GPF,PH:["等級","係數","體","腕","耐","速"]}}),n._v(" "),t("Row",[t("Col",{attrs:{span:"24"}},[t("Button",{attrs:{type:"success",long:"",icon:"ios-search"},on:{click:n.handleCalc}},[n._v("\n                      計算\n                  ")])],1)],1)],1),n._v(" "),t("Col",{attrs:{span:"12"}},n._l(n.storage,function(a,e){var r=a.GPF,o=a.name;return t("Button",{key:e,attrs:{type:"ghost",long:"",icon:"ios-search"},on:{click:function(a){n.handleRecodeCalc(e)}}},[n._v("\n              "+n._s(o+" "+r.join())+"\n          ")])}))],1),n._v(" "),t("Row",[t("Col",{attrs:{span:"24"}},[n.data.length?t("Page",{staticClass:"paging",attrs:{total:n.data.length,"page-size":15,"show-total":""},on:{"on-change":n.handleChangePage}}):n._e(),n._v(" "),t("Table",{attrs:{border:"",columns:n.columns,data:n.pageData,loading:n.loading}})],1)],1)],1)},[],!1,null,null,null);a.default=l.exports}}]);
//# sourceMappingURL=CalcPostiveHpa8a6876050e8f166ccd2.js.map
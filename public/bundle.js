(()=>{var e={88:(e,t)=>{function n(e,t,n){return e*(1-n)+n*t}t.a=function(e,t,r){var a,i=(r=r||{}).octaveCount||4,s=r.amplitude||.1,o=r.persistence||.2,l=function(e,t){for(var n=new Array(e*t),r=0;r<n.length;++r)n[r]=Math.random();return n}(e,t),c=new Array(i);for(a=0;a<i;++a)c[a]=v(a);var f=new Array(e*t),u=0;for(a=i-1;a>=0;--a){u+=s*=o;for(var g=0;g<f.length;++g)f[g]=f[g]||0,f[g]+=c[a][g]*s}for(a=0;a<f.length;++a)f[a]/=u;return f;function v(r){for(var a=new Array(e*t),i=Math.pow(2,r),s=1/i,o=0,c=0;c<t;++c)for(var f=Math.floor(c/i)*i,u=(f+i)%t,g=(c-f)*s,v=0;v<e;++v){var d=Math.floor(v/i)*i,h=(d+i)%e,m=(v-d)*s,w=n(l[f*e+d],l[u*e+d],g),p=n(l[f*e+h],l[u*e+h],g);a[o]=n(w,p,m),o+=1}return a}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{"use strict";function e(){return document.getElementById("canvas")}function t(e){e(),window.requestAnimationFrame((()=>t(e)))}function r(){return e().getContext("2d")}const a=Object.freeze(["./assets/images/HillGrassTile.svg","./assets/images/GrassTile.svg","./assets/images/SandTile.svg","./assets/images/WaterTile.svg","./assets/images/OceanTile.svg"]),i=Object.freeze({mapSize:32,tileSize:64}),s=new Map;var o=n(88);function l(e){let t;return t=e<.3?"WaterTile.svg":e<.5?"SandTile.svg":e<.7?"GrassTile.svg":"HillGrassTile.svg",s.get(t)}function c(e){let t;return t=e<.3?-.25:e<.5?0:e<.7?1:2,t}const f=e();var u;f.width=window.innerWidth,f.height=window.innerHeight,(u=a,Promise.all(u.map((function(e){return new Promise(((t,n)=>{const r=e.split("/").pop();if(s.has(r))return t(s.get(r));const a=new Image;a.onload=()=>{s.set(r,a),t(a)},a.onerror=()=>{console.error(`Failed to load asset: ${r}`),n()},a.src=e}))}))).then((()=>s))).then((()=>{const{tileSize:e}=i,n=r();let a=function(){const{mapSize:e,tileSize:t}=i,n=[],r=e*t/3,a=(0,o.a)(e,e);let s=0;for(let i=0;i<e;i++){n[i]=[];for(let o=0;o<e;o++){const e=a[s],f=l(e),u=t/2*(o-i)-0,g=(o+i)*(t/3)-r-c(e)*(t/3);n[i][o]={image:f,x:u,z:g},s++}}return n}(),s=1;window.addEventListener("wheel",(e=>{s=Math.min(Math.max(.5,s+-.001*e.deltaY),1.5)})),t((()=>{r().clearRect(0,0,innerWidth,innerHeight),n.save(),n.translate((innerWidth-e*s)/2,innerHeight/2),n.scale(s,s),function(e){const{tileSize:t}=i,n=r();for(const r of e)for(const e of r){const{image:r,x:a,z:i}=e;n.drawImage(r,a,i,t,t)}}(a),n.restore()}))}))})()})();
(()=>{"use strict";var e=document.querySelectorAll(".caja"),n=document.querySelector("input"),r="",t=[],l="",c=[],o="0",i=!1,a=!1,p=!1,h=!0,u=!1,d=0;n.placeholder=o;for(var s=function(s){e[s].addEventListener("click",(function(){if(25==n.placeholder.length)if("Borrar"==e[s].innerText)g();else{if("AC"!=e[s].innerText)return;m()}if(0!=e[s].innerText&&1!=e[s].innerText&&2!=e[s].innerText&&3!=e[s].innerText&&4!=e[s].innerText&&5!=e[s].innerText&&6!=e[s].innerText&&7!=e[s].innerText&&8!=e[s].innerText&&9!=e[s].innerText||function(){if(String(r).length>=15)return n.placeholder="Número demasiado grande",void setTimeout((function(){return m()}),2e3);"0"==n.placeholder&&(o="",n.placeholder=o),u&&(o="",n.placeholder=o,t=[],c=[],u=!1),r=Number("".concat(r).concat(e[s].innerText)),o="".concat(o).concat(e[s].innerText),n.placeholder=o,p=!0,a=!0}(),","==e[s].innerText&&(h&&(u&&(o="",n.placeholder=o,t=[],c=[],u=!1),r="".concat(r,"."),o="".concat(o,","),n.placeholder=o),h=!1),"+"!=e[s].innerText&&"-"!=e[s].innerText&&"x"!=e[s].innerText&&"/"!=e[s].innerText&&"^"!=e[s].innerText||(p&&(""==!r&&(t.push(r),r=""),o="".concat(o).concat(e[s].innerText),n.placeholder=o,l=e[s].innerText,c.push(l),p=!1,a=!0,u=!1,h=!0),console.log(t),console.log(c)),"="==e[s].innerText){if(a){""==!r&&(t.push(r),r=""),T("^"),T("x"),T("/"),d+=t[0];for(var x=1;x<t.length;x++)"+"==c[x-1]&&(d+=t[x]),"-"==c[x-1]&&(d-=t[x]);(t=[]).push(d),f(d),d=new Intl.NumberFormat("es-CO").format(d),o="".concat(d),n.placeholder=o,d=0,c=[],u=!0,h=!0,i=!0}a=!1}"Raiz"==e[s].innerText&&t.length<=1&&(""==!r&&(t.push(r),r=""),d=Math.sqrt(t[0]),(t=[]).push(d),f(d),d=new Intl.NumberFormat("es-CO").format(d),o="".concat(d),n.placeholder=o,p="NaN"!=o,d=0,c=[],u=!0,h=!0,i=!1),"Borrar"==e[s].innerText&&g(),"AC"==e[s].innerText&&m()}))},x=0;x<e.length;x++)s(x);var T=function(e){for(;c.includes(e);){var n=c.indexOf(e),r=0;"^"==e?r=Math.pow(t[n],t[n+1]):"x"==e?r=t[n]*t[n+1]:"/"==e&&(r=t[n]/t[n+1]),t.splice(n,1),t.splice(n,1),t.splice(n,0,r),c.splice(n,1)}},f=function(e){if((e=String(e)).includes("."))for(e=(e=Number(e)).toFixed(5),e=String(e);"0"==e.at(-1);)e=e.slice(0,-1);return e},g=function(){if(0==o.at(-1)||1==o.at(-1)||2==o.at(-1)||3==o.at(-1)||4==o.at(-1)||5==o.at(-1)||6==o.at(-1)||7==o.at(-1)||8==o.at(-1)||9==o.at(-1)){r=(r=String(r)).slice(0,-1),r=Number(r),o=o.slice(0,-1),n.placeholder=o,0==o.length&&(o="0",n.placeholder=o);var e=t.at(-1);e=String(e),i&&(t.pop(),e.length>1&&(e=e.slice(0,-1),e=Number(e),r=e),i=!1),console.log(t)}else c.pop(),o=o.slice(0,-1),n.placeholder=o,p=!0,i=!0,console.log(c);n.placeholder,","==o.at(-1)&&(o=o.slice(0,-1),n.placeholder=o,h=!0),"Na"==o&&(o="0",n.placeholder=o,m()),u&&(o=o.replace(/[.]/g,""),n.placeholder=o,u=!1)},m=function(){r="",t=[],l="",c=[],o="0",n.placeholder=o,a=!1,p=!1,h=!0,u=!1,d=0,i=!1}})();
(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();let f=0,c=!1,u=0;function b(e,l,i,a,t,o,n,h){if(c)return h&&(u=0,c=!1,e[0].y=150),0;n?(e[0].x+=i*500,e[0].flip=!0):o&&(e[0].x-=i*500,e[0].flip=!1),o||n?e[0].y>0?e[0].image="\u{1F3C3}\u200D\u2642\uFE0F":e[0].image=Math.round(l*10)%2?"\u{1F9CD}\u200D\u2642\uFE0F":"\u{1F3C3}\u200D\u2642\uFE0F":e[0].image="\u{1F9CD}\u200D\u2642\uFE0F",e[0].x<0&&(e[0].x=0),e[0].x>750&&(e[0].x=750),a&&e[0].y==0&&(f=10),e[0].y+=f,e[0].y>0?f=f-.5:f=0;for(let r=1;r<4;r++)e[r].x-=i*(100+30*r+10*u),e[r].x<-50&&(e[r].x=800,u++);if(!c)for(let r=1;r<4;r++)Math.abs(e[r].x-e[0].x)<10&&e[0].y<30&&(c=!0,e[0].image="\u2620\uFE0F");return u}let d=[{image:"\u{1F3C3}\u200D\u2642\uFE0F",x:0,y:0,flip:!1},{image:"\u{1F9A1}",x:600,y:0,flip:!1},{image:"\u{1F9A1}",x:300,y:0,flip:!1},{image:"\u{1F9A1}",x:900,y:0,flip:!1}],y,s,g,x,w;document.onkeyup=document.onkeydown=function(e){let l=e.type=="keydown";switch(e.key){case"ArrowUp":y=l;break;case"ArrowDown":s=l;break;case"ArrowLeft":g=l;break;case"ArrowRight":x=l;break;case" ":w=l;break}};let k=document.querySelector("#score > span"),A=document.querySelectorAll("#app > div.sprite"),T=new Date().getTime(),m=new Date().getTime();function p(){let e=new Date().getTime(),l=(e-m)/1e3,i=(e-T)/1e3;m=e;for(let t=0;t<d.length;t++){let o=A[t],n=d[t];o.innerText=n.image,o.style.left=n.x+"px",o.style.bottom=n.y+"px",o.style.transform=n.flip?"scale(-1, 1)":""}let a=b(d,i,l,y,s,g,x,w);k.innerText=a,requestAnimationFrame(p)}requestAnimationFrame(p);
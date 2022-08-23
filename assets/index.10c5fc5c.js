(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="modulepreload",f=function(n){return"https://inokawa.github.io/webgpu-practice/"+n},l={},m=function(r,o,i){return!o||o.length===0?r():Promise.all(o.map(e=>{if(e=f(e),e in l)return;l[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":d,t||(c.as="script",c.crossOrigin=""),c.href=e,document.head.appendChild(c),t)return new Promise((a,u)=>{c.addEventListener("load",a),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r())},h=n=>{const r=document.getElementById(n);return r||(console.error(`There is no canvas with id ${n} on this page.`),null)},p=n=>{const r=()=>{n.width=window.innerWidth,n.height=window.innerHeight};r(),window.addEventListener("resize",r)},w=n=>{let r=requestAnimationFrame(o);function o(i){n(i),r=requestAnimationFrame(o)}return()=>{cancelAnimationFrame(r)}},g=(n,r,o)=>{const i=document.createElement("button");i.textContent=r,i.addEventListener("click",o),n.appendChild(i)};window.onload=async()=>{const n=h("app");if(!n)return;n.width=window.innerWidth,n.height=window.innerHeight,p(n);const r=n.getContext("webgpu");if(!r){const t=document.createElement("div");t.textContent="WebGPU is not enabled in your browser.",n.replaceWith(t);return}let o;const i=document.getElementById("menu");[["triangle",()=>m(()=>import("./triangle.f9818f8e.js"),[])]].forEach(([t,s])=>{g(i,t,async()=>{o==null||o(),o=await(await s()).init(r)})}),i.children[i.children.length-1].click()};export{w as r};

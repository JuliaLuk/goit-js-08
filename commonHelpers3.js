import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l as s}from"./assets/vendor-f8ab8876.js";const n=document.querySelector(".feedback-form"),o="feedback-form-state";let t={};function c(e){const a=e.target.value.trim(),r=e.target.name;t[r]=a,localStorage.setItem(o,JSON.stringify(t))}n.addEventListener("input",s(c,500));n.addEventListener("submit",e=>{e.preventDefault(),console.log(t),t={},localStorage.getItem(o),e.target.reset()});function l(){try{const e=localStorage.getItem(o);if(!e)return;t=JSON.parse(e),Object.entries(t).forEach(([a,r])=>{n.elements[a].value=r})}catch({message:e}){console.log(e)}}l();localStorage.removeItem(o);
//# sourceMappingURL=commonHelpers3.js.map
import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                     */import{i}from"./assets/vendor-77e16229.js";const o=document.querySelector(".form");o.addEventListener("submit",m);function m(e){e.preventDefault();const{delay:r,state:s}=e.currentTarget.elements;n(r.value,s.value).then(t=>{i.success({title:"OK",message:`✅ Fulfilled promise in ${t}ms`})}).catch(t=>{i.error({title:"Error",message:`❌ Rejected promise in ${t}ms`})}),e.currentTarget.reset()}function n(e,r){return new Promise((s,t)=>{setTimeout(()=>{r==="fulfilled"?s(e):t(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map

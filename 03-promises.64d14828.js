function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var i=r("7Y9D8");r("iQIUW");const l=document.querySelector('[name="delay"]'),u=document.querySelector('[name="step"]'),d=document.querySelector('[name="amount"]'),a=(document.querySelector('[type="submit"]'),document.querySelector("form"));let s,c,f={};a.addEventListener("submit",(function(e){e.preventDefault(),c=Number(l.value);const o=Number(u.value),t=Number(d.value);for(let e=0;e<t;e+=1)c+=o*e,s=e+1,f={position:s,delay:c},m(f)}));const m=o=>{setTimeout((()=>{(function({position:e,delay:o}){return Math.random()>.3?Promise.resolve({position:e,delay:o}):Promise.reject({position:e,delay:o})})(o).then((({position:o,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}))}),{delay:c})};
//# sourceMappingURL=03-promises.64d14828.js.map

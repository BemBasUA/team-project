parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"UISB":[function(require,module,exports) {
(()=>{const t={btnFront:document.querySelector(".arrow-button-front"),btnBack:document.querySelector(".arrow-button-back"),cardBox:document.querySelector(".card-box"),cardBack:document.querySelector(".card-back")};function c(){t.cardBox.classList.toggle("do-flip"),t.cardBack.classList.toggle("do-flip")}t.btnFront.addEventListener("click",c),t.btnBack.addEventListener("click",c)})(),(()=>{const t={btnFront2:document.querySelector(".arrow-button-front-2"),btnBack2:document.querySelector(".arrow-button-back-2"),cardBox2:document.querySelector(".card-box-2"),cardBack2:document.querySelector(".card-back-2")};function c(){t.cardBox2.classList.toggle("do-flip"),t.cardBack2.classList.toggle("do-flip")}t.btnFront2.addEventListener("click",c),t.btnBack2.addEventListener("click",c)})(),(()=>{const t={btnFront3:document.querySelector(".arrow-button-front-3"),btnBack3:document.querySelector(".arrow-button-back-3"),cardBox3:document.querySelector(".card-box-3"),cardBack3:document.querySelector(".card-back-3")};function c(){t.cardBox3.classList.toggle("do-flip"),t.cardBack3.classList.toggle("do-flip")}t.btnFront3.addEventListener("click",c),t.btnBack3.addEventListener("click",c)})();
},{}]},{},["UISB"], null)
//# sourceMappingURL=/team-project/products.7fad9c9b.js.map
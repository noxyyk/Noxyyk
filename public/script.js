
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var logoContainer = document.getElementsByClassName('arrow')[0];
  if (scrollPosition >= 100) logoContainer.classList.add('arrow--scrolled');
  else logoContainer.classList.remove('arrow--scrolled');
});

/*
  smoothScroll, by alicelieutier
  https://github.com/alicelieutier/smoothScroll
*/

!function(e,t){"use strict";"function"==typeof define&&define.amd?define(t):"object"==typeof exports&&"object"==typeof module?module.exports=t():e.smoothScroll=t()}(this,function(){"use strict";if("object"==typeof window&&void 0!==document.querySelectorAll&&void 0!==window.pageYOffset&&void 0!==history.pushState){var e=function(e,t,o,n){return o>n?t:e+(t-e)*((i=o/n)<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1);var i},t=function(t,o,n,i){o=o||1500;var r,a,u=(i=i||window).scrollTop||window.pageYOffset;if("number"==typeof t)var d=parseInt(t);else d=(a=u,"HTML"===(r=t).nodeName?-a:r.getBoundingClientRect().top+a);var s=Date.now(),c=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,15)},f=function(){var r=Date.now()-s;i!==window?i.scrollTop=e(u,d,r,o):window.scroll(0,e(u,d,r,o)),r>o?"function"==typeof n&&n(t):c(f)};f()},o=function(e){e.preventDefault(),location.hash!==this.hash&&window.history.pushState(null,null,this.hash);var o=document.getElementById(this.hash.substring(1));o&&t(o,1500,function(e){location.replace("#"+e.id)})};return document.addEventListener("DOMContentLoaded",function(){for(var e,t=document.querySelectorAll('a[href^="#"]:not([href="#"])'),n=t.length;e=t[--n];)e.addEventListener("click",o,!1)}),t}});

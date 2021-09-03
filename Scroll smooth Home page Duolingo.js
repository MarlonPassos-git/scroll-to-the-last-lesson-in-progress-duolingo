// ==UserScript==
// @name         Scroll smooth Home page Duolingo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       MarlonPassos
// @match        https://www.duolingo.com/learn
// @icon         https://www.google.com/s2/favicons?domain=duolingo.com
// @grant        none
// ==/UserScript==

(function() {
window.addEventListener('load', function () {
  let listCrows = document.querySelectorAll('[data-test="level-crown"]')
    window.scroll({
        top: listCrows[listCrows.length -1].getBoundingClientRect().y - document.documentElement.clientHeight / 2,
        left: 0,
        behavior: 'smooth'
    })
})



})();

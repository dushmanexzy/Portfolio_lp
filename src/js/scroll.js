"use strict";

var navList = document.querySelector('.js-navList');

function handleLinkClick(e) {
  var target = e.target;

  if (target.classList.contains('js-navLink')) {
    e.preventDefault();
    
    var href = target.getAttribute('href');
    var sectionEl = document.querySelector(href);

    sectionEl.scrollIntoView({block: "start", behavior: "smooth"});
  }
};

navList.addEventListener('click', handleLinkClick);
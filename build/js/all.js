var siteContainerEl = document.querySelector('.js-siteContainer');
var menuBtnEl = document.querySelector('.js-menuBtn');
var menuEl = document.querySelector('.js-navList');

function toggleMenu() {
  siteContainerEl.classList.toggle('menu-open');
}

menuBtnEl.addEventListener('click', function(e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener('click', function (e) {
  var target = e.targetl
  var its_menu = target == menuEl || menuEl.contains(target);
  var its_btnMenu = (target == menuBtnEl);
  var menu_is_active = siteContainerEl.classList.contains('menu-open');

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenu();
  }
});
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
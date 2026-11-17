/* PinkLazerCat Redesign portfolio — small, dependency-free helpers.
   The site works without this file; it only adds comfort. */

(function () {
  'use strict';

  /* 1. Mobile menu toggle */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* 2. Reveal elements as they scroll into view */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* 3. Highlight the current section in the Research sub-navigation */
  var subLinks = document.querySelectorAll('.subnav a[href^="#"]');
  if ('IntersectionObserver' in window && subLinks.length) {
    var map = {};
    subLinks.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          subLinks.forEach(function (a) { a.classList.remove('is-active'); a.removeAttribute('aria-current'); });
          var link = map[entry.target.id];
          if (link) { link.classList.add('is-active'); link.setAttribute('aria-current', 'true'); }
        }
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    Object.keys(map).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) spy.observe(section);
    });
  }

  /* 4. Idea Wall: expand / collapse all cards */
  var allBtn = document.getElementById('toggle-all');
  var ideas = document.querySelectorAll('details.idea');
  if (allBtn && ideas.length) {
    var refresh = function () {
      var allOpen = Array.prototype.every.call(ideas, function (d) { return d.open; });
      allBtn.textContent = allOpen ? 'Collapse all ideas' : 'Expand all ideas';
      allBtn.setAttribute('aria-expanded', String(allOpen));
    };
    allBtn.addEventListener('click', function () {
      var allOpen = Array.prototype.every.call(ideas, function (d) { return d.open; });
      ideas.forEach(function (d) { d.open = !allOpen; });
      refresh();
    });
    ideas.forEach(function (d) { d.addEventListener('toggle', refresh); });
    refresh();
  }
})();

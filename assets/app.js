/* JasonPan · Agent notes — interactions */
(function () {
  'use strict';

  /* ---------- reveal on scroll ---------- */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && items.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    items.forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i, 6) * 55) + 'ms';
      io.observe(el);
    });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- bar chart fill on view ---------- */
  var bars = document.querySelectorAll('.bar .fill');
  function fill(el) {
    el.style.width = (el.getAttribute('data-w') || '0') + '%';
  }
  if ('IntersectionObserver' in window && bars.length) {
    var bo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          fill(e.target);
          bo.unobserve(e.target);
        }
      });
    }, { threshold: 0.25 });
    bars.forEach(function (b) { bo.observe(b); });
  } else {
    bars.forEach(fill);
  }

  /* ---------- mobile nav ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.textContent = nav.classList.contains('open') ? '关闭' : '菜单';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.textContent = '菜单';
      }
    });
  }

  /* ---------- footer year ---------- */
  var y = document.getElementById('yr');
  if (y) y.textContent = new Date().getFullYear();
})();

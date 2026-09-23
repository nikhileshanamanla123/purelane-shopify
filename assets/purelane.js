(function () {
  'use strict';

  var toast = document.querySelector('[data-cart-toast]');
  var toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove('is-visible');
    }, 3200);
  }

  function updateCartCount(count) {
    document.querySelectorAll('[data-cart-count]').forEach(function (element) {
      element.textContent = count;
    });
  }

  function addItems(items) {
    var validItems = items.filter(function (item) { return item.id; });
    if (!validItems.length) {
      showToast('Choose products in the theme editor first.');
      return Promise.resolve();
    }
    return fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ items: validItems })
    })
      .then(function (response) {
        if (!response.ok) throw new Error('Unable to add item');
        return Promise.all([response.json(), fetch('/cart.js').then(function (res) { return res.json(); })]);
      })
      .then(function (result) {
        updateCartCount(result[1].item_count);
        showToast('Added to your cart.');
      })
      .catch(function () {
        showToast('This product could not be added. Please try again.');
      });
  }

  document.querySelectorAll('[data-product-form]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var submit = form.querySelector('[type="submit"]');
      if (submit) submit.disabled = true;
      addItems([{ id: form.querySelector('[name="id"]').value, quantity: 1 }]).finally(function () {
        if (submit) submit.disabled = false;
      });
    });
  });

  document.querySelectorAll('.combo-add').forEach(function (button) {
    button.addEventListener('click', function () {
      button.disabled = true;
      addItems(['variant1', 'variant2', 'variant3'].map(function (key) {
        return { id: button.dataset[key], quantity: 1 };
      })).finally(function () { button.disabled = false; });
    });
  });

  var menuButton = document.querySelector('[data-menu-toggle]');
  var mobileMenu = document.querySelector('[data-mobile-menu]');
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('[data-horizontal-rail]').forEach(function (rail) {
    rail.addEventListener('wheel', function (event) {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        rail.scrollLeft += event.deltaY;
        event.preventDefault();
      }
    }, { passive: false });
  });
})();
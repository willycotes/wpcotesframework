/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./js/woocommerce/sticky-add-to-cart.js ***!
  \**********************************************/
/*global wpcotestheme_sticky_add_to_cart_params */
(function () {
  // eslint-disable-next-line @wordpress/no-global-event-listener
  document.addEventListener('DOMContentLoaded', function () {
    var stickyAddToCart = document.getElementsByClassName('wpcotestheme-sticky-add-to-cart');

    if (!stickyAddToCart.length) {
      return;
    } // eslint-disable-next-line camelcase


    if (typeof wpcotestheme_sticky_add_to_cart_params === 'undefined') {
      return;
    }

    var trigger = document.getElementsByClassName(wpcotestheme_sticky_add_to_cart_params.trigger_class);

    if (trigger.length > 0) {
      var stickyAddToCartToggle = function stickyAddToCartToggle() {
        if (trigger[0].getBoundingClientRect().top + trigger[0].scrollHeight < 0) {
          stickyAddToCart[0].classList.add('wpcotestheme-sticky-add-to-cart--slideInDown');
          stickyAddToCart[0].classList.remove('wpcotestheme-sticky-add-to-cart--slideOutUp');
        } else if (stickyAddToCart[0].classList.contains('wpcotestheme-sticky-add-to-cart--slideInDown')) {
          stickyAddToCart[0].classList.add('wpcotestheme-sticky-add-to-cart--slideOutUp');
          stickyAddToCart[0].classList.remove('wpcotestheme-sticky-add-to-cart--slideInDown');
        }
      };

      stickyAddToCartToggle(); // eslint-disable-next-line @wordpress/no-global-event-listener

      window.addEventListener('scroll', function () {
        stickyAddToCartToggle();
      }); // Get product id

      var productId = null;
      document.body.classList.forEach(function (item) {
        if (item.substring(0, 7) === 'postid-') {
          productId = item.replace(/[^0-9]/g, '');
        }
      });

      if (productId) {
        var product = document.getElementById('product-' + productId);

        if (product) {
          if (!product.classList.contains('product-type-simple') && !product.classList.contains('product-type-external')) {
            var selectOptions = document.getElementsByClassName('wpcotestheme-sticky-add-to-cart__content-button');
            selectOptions[0].addEventListener('click', function (event) {
              event.preventDefault();
              document.getElementById('product-' + productId).scrollIntoView();
            });
          }
        }
      }
    }
  });
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFULENBQXdCLGFBQWFQLFNBQXJDLEVBQWdEVyxjQUFoRDtBQUNELGFBSEQ7QUFJRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGLEdBaEZEO0FBaUZELENBbkZELEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy93b29jb21tZXJjZS9zdGlja3ktYWRkLXRvLWNhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypnbG9iYWwgd2lsbHlkZXZ0aGVtZV9zdGlja3lfYWRkX3RvX2NhcnRfcGFyYW1zICovXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB3b3JkcHJlc3Mvbm8tZ2xvYmFsLWV2ZW50LWxpc3RlbmVyXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHN0aWNreUFkZFRvQ2FydCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICd3aWxseWRldnRoZW1lLXN0aWNreS1hZGQtdG8tY2FydCcsXHJcbiAgICApO1xyXG5cclxuICAgIGlmICghc3RpY2t5QWRkVG9DYXJ0Lmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxyXG4gICAgaWYgKHR5cGVvZiB3aWxseWRldnRoZW1lX3N0aWNreV9hZGRfdG9fY2FydF9wYXJhbXMgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0cmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgd2lsbHlkZXZ0aGVtZV9zdGlja3lfYWRkX3RvX2NhcnRfcGFyYW1zLnRyaWdnZXJfY2xhc3MsXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0cmlnZ2VyLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3Qgc3RpY2t5QWRkVG9DYXJ0VG9nZ2xlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRyaWdnZXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdHJpZ2dlclswXS5zY3JvbGxIZWlnaHQgPFxyXG4gICAgICAgICAgMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgc3RpY2t5QWRkVG9DYXJ0WzBdLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgICAgICd3aWxseWRldnRoZW1lLXN0aWNreS1hZGQtdG8tY2FydC0tc2xpZGVJbkRvd24nLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHN0aWNreUFkZFRvQ2FydFswXS5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAgICAgICAnd2lsbHlkZXZ0aGVtZS1zdGlja3ktYWRkLXRvLWNhcnQtLXNsaWRlT3V0VXAnLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgc3RpY2t5QWRkVG9DYXJ0WzBdLmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgICAgJ3dpbGx5ZGV2dGhlbWUtc3RpY2t5LWFkZC10by1jYXJ0LS1zbGlkZUluRG93bicsXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBzdGlja3lBZGRUb0NhcnRbMF0uY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAgICAgJ3dpbGx5ZGV2dGhlbWUtc3RpY2t5LWFkZC10by1jYXJ0LS1zbGlkZU91dFVwJyxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzdGlja3lBZGRUb0NhcnRbMF0uY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICAgICAgJ3dpbGx5ZGV2dGhlbWUtc3RpY2t5LWFkZC10by1jYXJ0LS1zbGlkZUluRG93bicsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIHN0aWNreUFkZFRvQ2FydFRvZ2dsZSgpO1xyXG5cclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB3b3JkcHJlc3Mvbm8tZ2xvYmFsLWV2ZW50LWxpc3RlbmVyXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc3RpY2t5QWRkVG9DYXJ0VG9nZ2xlKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gR2V0IHByb2R1Y3QgaWRcclxuICAgICAgbGV0IHByb2R1Y3RJZCA9IG51bGw7XHJcblxyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0uc3Vic3RyaW5nKDAsIDcpID09PSAncG9zdGlkLScpIHtcclxuICAgICAgICAgIHByb2R1Y3RJZCA9IGl0ZW0ucmVwbGFjZSgvW14wLTldL2csICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHByb2R1Y3RJZCkge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC0nICsgcHJvZHVjdElkKTtcclxuXHJcbiAgICAgICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXByb2R1Y3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9kdWN0LXR5cGUtc2ltcGxlJykgJiZcclxuICAgICAgICAgICAgIXByb2R1Y3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9kdWN0LXR5cGUtZXh0ZXJuYWwnKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdE9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgICAgICAgICd3aWxseWRldnRoZW1lLXN0aWNreS1hZGQtdG8tY2FydF9fY29udGVudC1idXR0b24nLFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0T3B0aW9uc1swXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtJyArIHByb2R1Y3RJZCkuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGlja3lBZGRUb0NhcnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGVuZ3RoIiwid2lsbHlkZXZ0aGVtZV9zdGlja3lfYWRkX3RvX2NhcnRfcGFyYW1zIiwidHJpZ2dlciIsInRyaWdnZXJfY2xhc3MiLCJzdGlja3lBZGRUb0NhcnRUb2dnbGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzY3JvbGxIZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb250YWlucyIsIndpbmRvdyIsInByb2R1Y3RJZCIsImJvZHkiLCJmb3JFYWNoIiwiaXRlbSIsInN1YnN0cmluZyIsInJlcGxhY2UiLCJwcm9kdWN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWxlY3RPcHRpb25zIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbEludG9WaWV3Il0sInNvdXJjZVJvb3QiOiIifQ==
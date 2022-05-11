/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./js/navigation.js ***!
  \**************************/
/* global wpcotesthemeScreenReaderText */

/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 * Also adds a focus class to parent li's for accessibility.
 */
(function () {
  // eslint-disable-next-line @wordpress/no-global-event-listener
  document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('site-navigation');

    if (!container) {
      return;
    }

    var button = container.querySelector('button');

    if (!button) {
      return;
    }

    var menu = container.querySelector('ul'); // Hide menu toggle button if menu is empty and return early.

    if (!menu) {
      button.style.display = 'none';
      return;
    }

    button.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-expanded', 'false');
    menu.classList.add('nav-menu');
    button.addEventListener('click', function () {
      container.classList.toggle('toggled');
      var expanded = container.classList.contains('toggled') ? 'true' : 'false';
      button.setAttribute('aria-expanded', expanded);
      menu.setAttribute('aria-expanded', expanded);
    }); // Add dropdown toggle that displays child menu items.

    var handheld = document.getElementsByClassName('handheld-navigation');

    if (handheld.length > 0) {
      [].forEach.call(handheld[0].querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a'), function (anchor) {
        // Add dropdown toggle that displays child menu items
        var btn = document.createElement('button');
        btn.setAttribute('aria-expanded', 'false');
        btn.classList.add('dropdown-toggle');
        var btnSpan = document.createElement('span');
        btnSpan.classList.add('screen-reader-text');
        btnSpan.appendChild(document.createTextNode(wpcotesthemeScreenReaderText.expand));
        btn.appendChild(btnSpan);
        anchor.parentNode.insertBefore(btn, anchor.nextSibling); // Set the active submenu dropdown toggle button initial state

        if (anchor.parentNode.classList.contains('current-menu-ancestor')) {
          btn.setAttribute('aria-expanded', 'true');
          btn.classList.add('toggled-on');
          btn.nextElementSibling.classList.add('toggled-on');
        } // Add event listener


        btn.addEventListener('click', function () {
          btn.classList.toggle('toggled-on'); // Remove text inside span

          while (btnSpan.firstChild) {
            btnSpan.removeChild(btnSpan.firstChild);
          }

          var expanded = btn.classList.contains('toggled-on');
          btn.setAttribute('aria-expanded', expanded);
          btnSpan.appendChild(document.createTextNode(expanded ? wpcotesthemeScreenReaderText.collapse : wpcotesthemeScreenReaderText.expand));
          btn.nextElementSibling.classList.toggle('toggled-on');
        });
      });
    } // Add focus class to parents of sub-menu anchors.


    [].forEach.call(document.querySelectorAll('.site-header .menu-item > a, .site-header .page_item > a, .site-header-cart a'), function (anchor) {
      anchor.addEventListener('focus', function () {
        // Remove focus class from other sub-menus previously open.
        var elems = document.querySelectorAll('.focus');
        [].forEach.call(elems, function (el) {
          if (!el.contains(anchor)) {
            el.classList.remove('focus'); // Remove blocked class, if it exists.

            if (el.firstChild && el.firstChild.classList) {
              el.firstChild.classList.remove('blocked');
            }
          }
        }); // Add focus class.

        var li = anchor.parentNode;
        li.classList.add('focus');
      });
    }); // Ensure the dropdowns close when user taps outside the site header

    [].forEach.call(document.querySelectorAll('body #page > :not( .site-header )'), function (element) {
      element.addEventListener('click', function () {
        [].forEach.call(document.querySelectorAll('.focus, .blocked'), function (el) {
          el.classList.remove('focus');
          el.classList.remove('blocked');
        });
      });
    }); // Add an identifying class to dropdowns when on a touch device
    // This is required to switch the dropdown hiding method from a negative `left` value to `display: none`.

    if (('ontouchstart' in window || window.navigator.maxTouchPoints) && window.innerWidth > 767) {
      [].forEach.call(document.querySelectorAll('.site-header ul ul, .site-header-cart .widget_shopping_cart'), function (element) {
        element.classList.add('sub-menu--is-touch-device');
      }); // Add blocked class to links that open sub-menus, and prevent from navigating away on first touch.

      var acceptClick = false;
      [].forEach.call(document.querySelectorAll('.site-header .menu-item > a, .site-header .page_item > a, .site-header-cart a'), function (anchor) {
        anchor.addEventListener('click', function (event) {
          if (anchor.classList.contains('blocked') && acceptClick === false) {
            event.preventDefault();
          }

          acceptClick = false;
        });
        anchor.addEventListener('pointerup', function (event) {
          if (anchor.classList.contains('blocked') || event.pointerType === 'mouse') {
            acceptClick = true;
          } else if (anchor.className === 'cart-contents' && anchor.parentNode.nextElementSibling && anchor.parentNode.nextElementSibling.textContent.trim() !== '' || anchor.nextElementSibling) {
            anchor.classList.add('blocked');
          } else {
            acceptClick = true;
          }
        });
      });
    }
  });
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxrQkFEbkIsSUFFQ1gsTUFBTSxDQUFDUSxVQUFQLENBQWtCRyxrQkFBbEIsQ0FBcUNrQixXQUFyQyxDQUFpREMsSUFBakQsT0FDRSxFQUhKLElBSUE5QixNQUFNLENBQUNXLGtCQUxGLEVBTUw7QUFDQVgsWUFBQUEsTUFBTSxDQUFDWCxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixTQUFyQjtBQUNELFdBUk0sTUFRQTtBQUNMa0MsWUFBQUEsV0FBVyxHQUFHLElBQWQ7QUFDRDtBQUNGLFNBakJEO0FBa0JELE9BL0JIO0FBaUNEO0FBQ0YsR0ExTEQ7QUEyTEQsQ0E3TEQsSSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL25hdmlnYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHdpbGx5ZGV2dGhlbWVTY3JlZW5SZWFkZXJUZXh0ICovXHJcblxyXG4vKipcclxuICogbmF2aWdhdGlvbi5qc1xyXG4gKlxyXG4gKiBIYW5kbGVzIHRvZ2dsaW5nIHRoZSBuYXZpZ2F0aW9uIG1lbnUgZm9yIHNtYWxsIHNjcmVlbnMuXHJcbiAqIEFsc28gYWRkcyBhIGZvY3VzIGNsYXNzIHRvIHBhcmVudCBsaSdzIGZvciBhY2Nlc3NpYmlsaXR5LlxyXG4gKi9cclxuKGZ1bmN0aW9uICgpIHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHdvcmRwcmVzcy9uby1nbG9iYWwtZXZlbnQtbGlzdGVuZXJcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtbmF2aWdhdGlvbicpO1xyXG4gICAgaWYgKCFjb250YWluZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxuXHJcbiAgICBpZiAoIWJ1dHRvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVudSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCd1bCcpO1xyXG5cclxuICAgIC8vIEhpZGUgbWVudSB0b2dnbGUgYnV0dG9uIGlmIG1lbnUgaXMgZW1wdHkgYW5kIHJldHVybiBlYXJseS5cclxuICAgIGlmICghbWVudSkge1xyXG4gICAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcclxuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ25hdi1tZW51Jyk7XHJcblxyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgndG9nZ2xlZCcpO1xyXG4gICAgICBjb25zdCBleHBhbmRlZCA9IGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZ2dsZWQnKVxyXG4gICAgICAgID8gJ3RydWUnXHJcbiAgICAgICAgOiAnZmFsc2UnO1xyXG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZXhwYW5kZWQpO1xyXG4gICAgICBtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGV4cGFuZGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFkZCBkcm9wZG93biB0b2dnbGUgdGhhdCBkaXNwbGF5cyBjaGlsZCBtZW51IGl0ZW1zLlxyXG4gICAgY29uc3QgaGFuZGhlbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoYW5kaGVsZC1uYXZpZ2F0aW9uJyk7XHJcblxyXG4gICAgaWYgKGhhbmRoZWxkLmxlbmd0aCA+IDApIHtcclxuICAgICAgW10uZm9yRWFjaC5jYWxsKFxyXG4gICAgICAgIGhhbmRoZWxkWzBdLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhLCAucGFnZV9pdGVtX2hhc19jaGlsZHJlbiA+IGEnLFxyXG4gICAgICAgICksXHJcbiAgICAgICAgZnVuY3Rpb24gKGFuY2hvcikge1xyXG4gICAgICAgICAgLy8gQWRkIGRyb3Bkb3duIHRvZ2dsZSB0aGF0IGRpc3BsYXlzIGNoaWxkIG1lbnUgaXRlbXNcclxuICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG4gICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLXRvZ2dsZScpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGJ0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICBidG5TcGFuLmNsYXNzTGlzdC5hZGQoJ3NjcmVlbi1yZWFkZXItdGV4dCcpO1xyXG4gICAgICAgICAgYnRuU3Bhbi5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUod2lsbHlkZXZ0aGVtZVNjcmVlblJlYWRlclRleHQuZXhwYW5kKSxcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgYnRuLmFwcGVuZENoaWxkKGJ0blNwYW4pO1xyXG5cclxuICAgICAgICAgIGFuY2hvci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShidG4sIGFuY2hvci5uZXh0U2libGluZyk7XHJcblxyXG4gICAgICAgICAgLy8gU2V0IHRoZSBhY3RpdmUgc3VibWVudSBkcm9wZG93biB0b2dnbGUgYnV0dG9uIGluaXRpYWwgc3RhdGVcclxuICAgICAgICAgIGlmIChhbmNob3IucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2N1cnJlbnQtbWVudS1hbmNlc3RvcicpKSB7XHJcbiAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgndG9nZ2xlZC1vbicpO1xyXG4gICAgICAgICAgICBidG4ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZWQtb24nKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZWQtb24nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0ZXh0IGluc2lkZSBzcGFuXHJcbiAgICAgICAgICAgIHdoaWxlIChidG5TcGFuLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgICBidG5TcGFuLnJlbW92ZUNoaWxkKGJ0blNwYW4uZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZGVkID0gYnRuLmNsYXNzTGlzdC5jb250YWlucygndG9nZ2xlZC1vbicpO1xyXG5cclxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGV4cGFuZGVkKTtcclxuICAgICAgICAgICAgYnRuU3Bhbi5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcclxuICAgICAgICAgICAgICAgIGV4cGFuZGVkXHJcbiAgICAgICAgICAgICAgICAgID8gd2lsbHlkZXZ0aGVtZVNjcmVlblJlYWRlclRleHQuY29sbGFwc2VcclxuICAgICAgICAgICAgICAgICAgOiB3aWxseWRldnRoZW1lU2NyZWVuUmVhZGVyVGV4dC5leHBhbmQsXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYnRuLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGVkLW9uJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBmb2N1cyBjbGFzcyB0byBwYXJlbnRzIG9mIHN1Yi1tZW51IGFuY2hvcnMuXHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgJy5zaXRlLWhlYWRlciAubWVudS1pdGVtID4gYSwgLnNpdGUtaGVhZGVyIC5wYWdlX2l0ZW0gPiBhLCAuc2l0ZS1oZWFkZXItY2FydCBhJyxcclxuICAgICAgKSxcclxuICAgICAgZnVuY3Rpb24gKGFuY2hvcikge1xyXG4gICAgICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vIFJlbW92ZSBmb2N1cyBjbGFzcyBmcm9tIG90aGVyIHN1Yi1tZW51cyBwcmV2aW91c2x5IG9wZW4uXHJcbiAgICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb2N1cycpO1xyXG5cclxuICAgICAgICAgIFtdLmZvckVhY2guY2FsbChlbGVtcywgZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgIGlmICghZWwuY29udGFpbnMoYW5jaG9yKSkge1xyXG4gICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzJyk7XHJcblxyXG4gICAgICAgICAgICAgIC8vIFJlbW92ZSBibG9ja2VkIGNsYXNzLCBpZiBpdCBleGlzdHMuXHJcbiAgICAgICAgICAgICAgaWYgKGVsLmZpcnN0Q2hpbGQgJiYgZWwuZmlyc3RDaGlsZC5jbGFzc0xpc3QpIHtcclxuICAgICAgICAgICAgICAgIGVsLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYmxvY2tlZCcpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gQWRkIGZvY3VzIGNsYXNzLlxyXG4gICAgICAgICAgY29uc3QgbGkgPSBhbmNob3IucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdmb2N1cycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBFbnN1cmUgdGhlIGRyb3Bkb3ducyBjbG9zZSB3aGVuIHVzZXIgdGFwcyBvdXRzaWRlIHRoZSBzaXRlIGhlYWRlclxyXG4gICAgW10uZm9yRWFjaC5jYWxsKFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdib2R5ICNwYWdlID4gOm5vdCggLnNpdGUtaGVhZGVyICknKSxcclxuICAgICAgZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgW10uZm9yRWFjaC5jYWxsKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9jdXMsIC5ibG9ja2VkJyksXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYmxvY2tlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgLy8gQWRkIGFuIGlkZW50aWZ5aW5nIGNsYXNzIHRvIGRyb3Bkb3ducyB3aGVuIG9uIGEgdG91Y2ggZGV2aWNlXHJcbiAgICAvLyBUaGlzIGlzIHJlcXVpcmVkIHRvIHN3aXRjaCB0aGUgZHJvcGRvd24gaGlkaW5nIG1ldGhvZCBmcm9tIGEgbmVnYXRpdmUgYGxlZnRgIHZhbHVlIHRvIGBkaXNwbGF5OiBub25lYC5cclxuICAgIGlmIChcclxuICAgICAgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzKSAmJlxyXG4gICAgICB3aW5kb3cuaW5uZXJXaWR0aCA+IDc2N1xyXG4gICAgKSB7XHJcbiAgICAgIFtdLmZvckVhY2guY2FsbChcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgJy5zaXRlLWhlYWRlciB1bCB1bCwgLnNpdGUtaGVhZGVyLWNhcnQgLndpZGdldF9zaG9wcGluZ19jYXJ0JyxcclxuICAgICAgICApLFxyXG4gICAgICAgIGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N1Yi1tZW51LS1pcy10b3VjaC1kZXZpY2UnKTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gQWRkIGJsb2NrZWQgY2xhc3MgdG8gbGlua3MgdGhhdCBvcGVuIHN1Yi1tZW51cywgYW5kIHByZXZlbnQgZnJvbSBuYXZpZ2F0aW5nIGF3YXkgb24gZmlyc3QgdG91Y2guXHJcbiAgICAgIGxldCBhY2NlcHRDbGljayA9IGZhbHNlO1xyXG5cclxuICAgICAgW10uZm9yRWFjaC5jYWxsKFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAnLnNpdGUtaGVhZGVyIC5tZW51LWl0ZW0gPiBhLCAuc2l0ZS1oZWFkZXIgLnBhZ2VfaXRlbSA+IGEsIC5zaXRlLWhlYWRlci1jYXJ0IGEnLFxyXG4gICAgICAgICksXHJcbiAgICAgICAgZnVuY3Rpb24gKGFuY2hvcikge1xyXG4gICAgICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChhbmNob3IuY2xhc3NMaXN0LmNvbnRhaW5zKCdibG9ja2VkJykgJiYgYWNjZXB0Q2xpY2sgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYWNjZXB0Q2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIGFuY2hvci5jbGFzc0xpc3QuY29udGFpbnMoJ2Jsb2NrZWQnKSB8fFxyXG4gICAgICAgICAgICAgIGV2ZW50LnBvaW50ZXJUeXBlID09PSAnbW91c2UnXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGFjY2VwdENsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAoYW5jaG9yLmNsYXNzTmFtZSA9PT0gJ2NhcnQtY29udGVudHMnICYmXHJcbiAgICAgICAgICAgICAgICBhbmNob3IucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcgJiZcclxuICAgICAgICAgICAgICAgIGFuY2hvci5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudC50cmltKCkgIT09XHJcbiAgICAgICAgICAgICAgICAgICcnKSB8fFxyXG4gICAgICAgICAgICAgIGFuY2hvci5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBhY2NlcHRDbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwidG9nZ2xlIiwiZXhwYW5kZWQiLCJjb250YWlucyIsImhhbmRoZWxkIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsImZvckVhY2giLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsImFuY2hvciIsImJ0biIsImNyZWF0ZUVsZW1lbnQiLCJidG5TcGFuIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsIndpbGx5ZGV2dGhlbWVTY3JlZW5SZWFkZXJUZXh0IiwiZXhwYW5kIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiY29sbGFwc2UiLCJlbGVtcyIsImVsIiwicmVtb3ZlIiwibGkiLCJlbGVtZW50Iiwid2luZG93IiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJpbm5lcldpZHRoIiwiYWNjZXB0Q2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicG9pbnRlclR5cGUiLCJjbGFzc05hbWUiLCJ0ZXh0Q29udGVudCIsInRyaW0iXSwic291cmNlUm9vdCI6IiJ9
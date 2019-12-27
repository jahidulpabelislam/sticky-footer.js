;/**
 * A jQuery plugin that is used to create a sticky footer effect
 *
 * @version 2.0.0
 * @license: GPL-3.0
 * @copyright (c) 2010 - 2019 JPI
 * @author Jahidul Pabel Islam <me@jahidulpabelislam.com>
 */
(function(jQuery) {

    "use strict";

    /**
     * http://davidwalsh.name/javascript-debounce-function
     */
    var debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;

            var later = function() {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            };

            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) {
                func.apply(context, args);
            }
        };
    };

    /**
     * Get a jQuery object by selector, if element exists else return null
     */
    var getElem = function(selector) {
        if (selector) {
            var elem = jQuery(selector);
            if (elem.length) {
                return elem;
            }
        }

        return null;
    };

    jQuery.fn.stickyFooter = function() {

        /**
         * Store global variables for the instance
         */
        var global = {
            windowElem: null,
            mainContentElem: null,
        };

        var fn = {

            /**
             * Check and create the sticky footer effect if default content is too short
             */
            repositionFooter: function() {
                // Make section default height to work out if content is too small or big
                global.mainContentElem.height("auto");

                var windowHeight = global.windowElem.height();
                var currentPageHeight = getElem("html").height();

                // If default height of content is shorter than screen height main content is extended to fill the difference
                if (windowHeight > currentPageHeight) {
                    var newHeight = windowHeight - currentPageHeight + global.mainContentElem.height();
                    global.mainContentElem.height(newHeight);
                }
            },

            initListeners: function() {
                global.windowElem.on("orientationchange resize", debounce(fn.repositionFooter, 150));
            },
        };

        global.windowElem = getElem(window);
        global.mainContentElem = getElem(this);

        fn.initListeners();
        fn.repositionFooter();

        return this;
    };

})(jQuery);

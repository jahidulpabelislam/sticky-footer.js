;/**
 * A library that is used to create a sticky footer effect using jQuery
 *
 * @version 1.2.0
 * @license: GPL-3.0
 * @copyright (c) 2010 - 2019 JPI
 * @author Jahidul Pabel Islam <me@jahidulpabelislam.com>
 */
window.StickyFooter = (function(jQuery) {

    "use strict";

    var StickyFooter = function(mainContentSelector) {

        /**
         * Store global variables for the instance
         */
        var global = {
            windowElem: null,
            htmlElem: null,
            mainContentElem: null,
        };

        var fn = {

            /**
             * http://davidwalsh.name/javascript-debounce-function
             */
            debounce: function(func, wait, immediate) {
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
            },

            /**
             * Get a jQuery object by selector, if element exists else return null
             */
            getElem: function(selector) {
                if (selector) {
                    return jQuery(selector);
                }

                return null;
            },

            /**
             * Check and create the sticky footer effect if default content is too short
             */
            repositionFooter: function() {
                // Make section default height to work out if content is too small or big
                global.mainContentElem.css("min-height", "");

                var windowHeight = global.windowElem.height();
                var currentPageHeight = global.htmlElem.height();

                // If default height of content is shorter than screen height main content is extended to fill the difference
                if (windowHeight > currentPageHeight) {
                    var newHeight = windowHeight - currentPageHeight + global.mainContentElem.height();
                    global.mainContentElem.css("min-height", newHeight);
                }
            },

            initListeners: function() {
                global.windowElem.on("orientationchange resize", fn.debounce(fn.repositionFooter, 150));
            },
        };

        global.windowElem = fn.getElem(window);
        global.htmlElem = fn.getElem("html");
        global.mainContentElem = fn.getElem(mainContentSelector);

        fn.initListeners();
        fn.repositionFooter();

        // Keep a set of public facing functions and only return these to global usage
        return {
            repositionFooter: fn.repositionFooter,
        };
    };

    return StickyFooter;

})(jQuery);

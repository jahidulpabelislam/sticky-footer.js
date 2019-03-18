;/*
 * sticky-footer.js
 *
 * A library that is used to create a sticky footer effect using jQuery
 *
 * @author Jahidul Pabel Islam <me@jahidulpabelislam.com>
 * @copyright (c) 2012 - 2019 JPI
 * @license: GPL-3.0
 */
window.StickyFooter = (function(jQuery) {

    "use strict";

    var StickyFooter = function(mainContentSelector) {

        /*
         * Store global variables for the instance
         */
        var global = {
            windowElem: null,
            mainContentElem: null,
        };

        var fn = {

            /*
             * Get a jQuery object by selector, if element exists else return null
             */
            getElem: function(selector) {
                if (selector && jQuery && jQuery(selector).length) {
                    return jQuery(selector);
                }

                return null;
            },

            /*
             * Check and create the sticky footer effect if default content is too short
             */
            repositionFooter: function() {
                // Make section default height to work out if content is too small or big
                global.mainContentElem.height("auto");

                var windowHeight = global.windowElem.height();
                var currentPageHeight = fn.getElem("body").height();

                // If default height of content is shorter than screen height main content is extended to fill the difference
                if (windowHeight > currentPageHeight) {
                    var newHeight = windowHeight - currentPageHeight + global.mainContentElem.height();
                    global.mainContentElem.height(newHeight);
                }
            },

            initListeners: function() {
                global.windowElem.on("orientationchange resize", fn.repositionFooter);
            },
        };

        global.windowElem = fn.getElem(window);
        global.mainContentElem = fn.getElem(mainContentSelector);

        fn.initListeners();
        fn.repositionFooter();

        // Keep a set of public facing functions and only return these to global usage
        return {
            repositionFooter: fn.repositionFooter,
        };
    };

    return StickyFooter;

}(jQuery));

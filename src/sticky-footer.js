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
            return jQuery(selector);
        }

        return null;
    };

    var addListener = function(element, events, callback) {
        var adder = jQuery.fn.on ? "on" : "bind";
        element[adder](events.join(" "), callback);
    };

    jQuery.fn.adjustHeightForScreen = function() {

        /**
         * Store global variables for the instance
         */
        var windowElem = getElem(window);
        var htmlElem = getElem("html");
        var mainContentElem = getElem(this);

        /**
         * Check and create the sticky footer effect if default content is too short
         */
        var updateContentHeight = function() {
            // Make section default height to work out if content is too small or big
            mainContentElem.css("min-height", "");

            var windowHeight = windowElem.height();
            var currentPageHeight = htmlElem.height();

            // If default height of content is shorter than screen height main content is extended to fill the difference
            if (windowHeight > currentPageHeight) {
                var newHeight = windowHeight - currentPageHeight + mainContentElem.height();
                mainContentElem.css("min-height", newHeight);
            }
        };

        updateContentHeight();
        var reset = debounce(updateContentHeight, 150);
        addListener(windowElem, ["orientationchange", "resize"], reset);

        return this;
    };

})(jQuery);

;(function(jQuery, StickyFooter) {

    "use strict";

    var init = function() {
        new StickyFooter(".main-content");
    };

    jQuery(window).on("load", init);

})(jQuery, StickyFooter);

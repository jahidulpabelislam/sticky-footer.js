;(function(jQuery) {

    "use strict";

    var init = function() {
        jQuery(".main-content").adjustHeightForScreen();
    };

    jQuery(window).on("load", init);

})(jQuery);

;(function(jQuery) {

    "use strict";

    var init = function() {
        jQuery(".main-content").stickyFooter();
    };

    jQuery(window).on("load", init);

})(jQuery);

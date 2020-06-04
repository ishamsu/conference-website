// Custome theme code

if ($('.clean-gallery').length > 0) {
    baguetteBox.run('.clean-gallery', { animation: 'slideIn' });
}

if ($('.clean-product').length > 0) {
    $(window).on("load", function() {
        $('.sp-wrap').smoothproducts();
    });
}
$(document).ready(function() {
    $(".tip-top").tooltip({
        placement: 'top'
    });
    $(".tip-right").tooltip({
        placement: 'right'
    });
    $(".tip-bottom").tooltip({
        placement: 'bottom'
    });
    $(".tip-left").tooltip({
        placement: 'left'
    });
});

jQuery(document).ready(function($) {
    var promoticker = function() {
        var window_width = window.innerWidth;
        var speed = 17 * window_width;
        $('#promo-notifications li:first').animate({ left: '-980px' }, speed, 'linear', function() {
            $(this).detach().appendTo('#promo-notifications ul').css('left', "100%");
            promoticker();
        });
    };
    if ($("#promo-notifications li").length > 1) {
        promoticker();
    }
});
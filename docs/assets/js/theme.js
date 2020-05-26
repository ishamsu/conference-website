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
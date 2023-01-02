//bx slider

$(document).ready(function(){
    $('.slider').bxSlider({
        auto: true,
    });
    jQuery('.menuBar').meanmenu({
        meanMenuOpen: "<span></span><span></span><span></span>",
        meanMenuContainer: '.menu_plg',
        meanScreenWidth: 768,
    });
});
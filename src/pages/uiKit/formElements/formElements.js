import './formElements.scss';
import './jquery.maskedinput';


$(function(){
    $("#phone").mask("99.99.9999");
});

$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 500,
    grid: true
});
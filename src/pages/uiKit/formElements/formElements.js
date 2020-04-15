import './formElements.scss';
import './jquery.maskedinput';


$( function() {
    $( "#slider" ).slider();
  } );

$(function(){
    $("#phone").mask("99.99.9999");
});

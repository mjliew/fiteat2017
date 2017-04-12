$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});

//this causes errors wen #qa-answers are made to toggle
$('#qa-click-switch-icon-error').click(function() {
    $('#qa-answers').toggle('1000');
    $("i", this).toggleClass("fa fa-minus-circle fa fa-plus-circle");
});

//but without it I can toggle the icons, but it won't close/open the answers
$('#qa-switch-icon-only').click(function() {
    $("i", this).toggleClass("fa fa-plus-circle fa fa-minus-circle");
});
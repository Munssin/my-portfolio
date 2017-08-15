$('body').css('overflow-x', 'hidden');
$(document).ready(function() {
	new WOW().init();
});

$("#1, #m1").click(function() {
    $('html, body').animate({
        scrollTop: $("#features").offset().top
    }, 2000);
});

$('#menu-button').click(function () {
  $('#menu-button').css('display', 'none');
  $('nav').css('right', '0');
  $('#close').css('display', 'block');
  $('body').css('padding-right', '300px');
})
$('#close').click(function () {
  $('#close').css('display', 'none');
  $('nav').css('right', '-400px');
  $('#menu-button').css('display', 'block');
  $('body').css('padding-right', '0');
})

// $('nav').slideAndSwipe();

$('h1').hide().delay(1300).fadeIn('slow');
$('h2').hide().delay(1700).fadeIn('slow');

$(".but-down").click(function() {
    $('html, body').animate({
        scrollTop: $(".quote").offset().top
    }, 2000);
});
$(".but-skill").click(function() {
    $('html, body').animate({
        scrollTop: $("#skill").offset().top
    }, 2000);
});
$(".but-portf").click(function() {
    $('html, body').animate({
        scrollTop: $("#works").offset().top
    }, 2000);
});

$(".items").hide();

$(".see-more").click(function(){
    $(".items").show();
    $('.see-more').css('display', 'none');
});

$("#submit").click(function(){
    $('.mails').css('left', '-600px');
    $('.mails').css('top', '-50px');
});


$(".1").click(function() {
    $('html, body').animate({
        scrollTop: $("header").offset().top
    }, 2000);
    $('#close').css('display', 'none');
    $('nav').css('right', '-400px');
    $('#menu-button').css('display', 'block');
    $('body').css('padding-right', '0');
});
$(".2").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
    $('#close').css('display', 'none');
    $('nav').css('right', '-400px');
    $('#menu-button').css('display', 'block');
    $('body').css('padding-right', '0');
});
$(".3").click(function() {
    $('html, body').animate({
        scrollTop: $("#skill").offset().top
    }, 2000);
    $('#close').css('display', 'none');
    $('nav').css('right', '-400px');
    $('#menu-button').css('display', 'block');
    $('body').css('padding-right', '0');
});
$(".4").click(function() {
    $('html, body').animate({
        scrollTop: $("#works").offset().top
    }, 2000);
    $('#close').css('display', 'none');
    $('nav').css('right', '-400px');
    $('#menu-button').css('display', 'block');
    $('body').css('padding-right', '0');
});
$(".5").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2000);
    $('#close').css('display', 'none');
    $('nav').css('right', '-400px');
    $('#menu-button').css('display', 'block');
    $('body').css('padding-right', '0');
});

// if ($(".items").show()){
//   $(".see-more").hide();
// }

// $(document).ready(function() {
// var movementStrength = 50;
// var height = movementStrength / $(window).height();
// var width = movementStrength / $(window).width();
// $("#skill").mousemove(function(e){
//           var pageX = e.pageX - ($(window).width() / 2);
//           var pageY = e.pageY - ($(window).height() / 2);
//           var newvalueX = width * pageX * -1 - 25;
//           var newvalueY = height * pageY * -1 - 50;
//           $('#skill').css("background-position", newvalueX+"px     "+newvalueY+"px");
// });
// });

// $('#toggle').click(function () {
//     $(this).toggleClass('active');
//     $('#overlay').toggleClass('open');
//     // $('body').css('overflow-y', 'hidden');
// });
//
// $('.search').click(function () {
//   $('.dis_sea').css('display', 'block');
// });

$('input[type="submit"]').click( function() {
    var words = $('#e-mail').val().split(' ');
    alert(words.length);
});

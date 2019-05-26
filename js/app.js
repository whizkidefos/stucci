new WOW().init();

TweenMax.from("#brand", 1, {
    delay: 0.4,
    y: 10,
    opacity: 0,
    ease: Expo.easInOut
})
TweenMax.staggerFrom("#menu li a", 1, {
    delay: 0.4,
    opacity: 0,
    ease: Expo.easInOut
})


$("#toggle").click(function(){
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

$("#resize ul li a").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

$(".close-btn").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});
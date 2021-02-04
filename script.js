$('.btn').click(function(){
    $(this).toggleClass("click"); // basildiginda css de carpi olussun diye tanimlandi
    $('.sidebar').toggleClass("show"); // basildiginda soldan cikmasi icin ayarlandi
});
$('.feat-btn').click(function(){
    $('nav ul .feat-show').toggleClass("show");
    $('nav ul .first').toggleClass("rotate");
});
$('.serv-btn').click(function(){
    $('nav ul .serv-show').toggleClass("show1");
    $('nav ul .second').toggleClass("rotate");
});
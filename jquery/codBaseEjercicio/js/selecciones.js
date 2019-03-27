$( document ).ready(function() {
  $("body").click(function(){
    //Realiza las selecciones en este bloque de código
    $("div > h1").css("color","yellow");
    $("div > a").find("i").css("color","yellow");
    $("#fh5co-main-nav").find(":contains('Home')").css("color","yellow");
    $("img[src$='2.jpg']+a").find(":contains('15 images')").css("color","yellow");
    $("#fh5co-about").find("h2:contains('Jean Smith') ~ p").css("color","yellow");
    $("#fh5co-contact").find("a:contains('Get in touch')").css("color","yellow");
    $("ul.slides cite").css("color","yellow");
    $("ul.slides cite").css("color","yellow");
    $(".fh5co-footer-widget p:nth-of-type(2):not(a)").css("color","yellow");
  });
});

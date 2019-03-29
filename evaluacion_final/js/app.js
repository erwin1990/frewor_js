
function amarrillo(elemento) {
  $(elemento).animate({
    color: "#FFFFFF",
  },500,function (){
    blanco(elemento)
    }
  )
}

function blanco(elemento) {
  $(elemento).animate({
    color: "#ECFF33",
  },10,function (){
    amarrillo(elemento)
    }
  )
}

var car1 = "<div class='caramelo'><img src='image/1.png'/></div>"
var car2 = "<div class='caramelo'><img src='image/2.png'/></div>"
var car3 = "<div class='caramelo'><img src='image/3.png'/></div>"
var car3 = "<div class='caramelo'><img src='image/4.png'/></div>"

$(".col-1").attr("src",function(){
  var numero = Math.floor((Math.random() * 3) +1);
  var ruta = "image/"+numero+".png";
  return ruta;
});

$( function() {

  amarrillo($(".main-titulo"));
  blanco($(".main-titulo"));


  $(".col-1").append(car1)


});

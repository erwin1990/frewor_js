
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


$( function() {

  amarrillo($(".main-titulo"));
  blanco($(".main-titulo"));


 var columnas = $(".panel-tablero div");
  for (var i = 0; i < columnas.length; i++){
  for (var j = 0; j < 5; j++){
    var numero = Math.floor((Math.random() * 4) +1);
    var car = "<div class='caramelo'><img src='image/"+numero+".png' /></div>"
     $(".col-"+i).append(car)
  }};





});


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

});

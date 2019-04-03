
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


function abajo(elemento) {
  $(elemento).animate(
    {
      top:"-=400"
    }
  )
}
function caramelos() {
  var columnas = $(".panel-tablero div");
   for (var i = 0; i < 8; i++){
   for (var j = 0; j < 5; j++){
     var numero = Math.floor((Math.random() * 4) +1);
     var caramelo = "<img src='image/"+numero+".png'/>"
      $(".col-"+i).append(caramelo)
   }};
}

// funcionas validacion de 3 caramelos en linia
function horizontal() {
  var bushori=0;
  for (var j = 0; j < 8; j++){
    for (var k = 0; k < 6; k++){
      var res1=$(".col-"+k).children("img("+j+")").attr("src");
      var res2=$(".col-"+(k+1)).children("img("+j+")").attr("src");
      var res3=$(".col-"+(k+2)).children("img("+j+")").attr("src");
      if((res1==res2) && (res2==res3) && (res1!=null) && (res2!=null) && (res3!=null)) {
        $(".col-"+k).children("img").attr("class","activo");
        $(".col-"+(k+1)).children("img").attr("class","activo");
        $(".col-"+(k+2)).children("img").attr("class","activo");
        busHori=1;
      }
    }
  }
  return busHori;
};

function vertical() {
  var busVerti=0;
  for (var j = 0; j < 6; j++){
    for (var k = 0; k < 8; k++){
      var res1=$(".col-"+k).children("img("+j+")").attr("src");
      var res2=$(".col-"+(k+1)).children("img("+j+")").attr("src");
      var res3=$(".col-"+(k+2)).children("img("+j+")").attr("src");
      if((res1==res2) && (res2==res3) && (res1!=null) && (res2!=null) && (res3!=null)) {
        $(".col-"+k).children("img").attr("class","activo");
        $(".col-"+(k+1)).children("img").attr("class","activo");
        $(".col-"+(k+2)).children("img").attr("class","activo");
        busVerti=1;
      }
    }
  }
  return busVerti;
};
//funcion para eliminar los caramelos y retornar el valor
function booster(busVerti,busHori) {
  var boosH = busHori * 100
  var boos2 = busVerti + busHori * 200
  var boosV = busVerti * 100
  if (busHori = 1) {
    $(".activo").hide("pulsate",1000)
  }
  if (busVerti = 1) {
    $(".activo").hide("pulsate",1000)
  }
  return boosH + boosV + boos2
}

$( function() {
  amarrillo($(".main-titulo"));
  blanco($(".main-titulo"));

  $(".btn-reinicio").click(function(){
    caramelos()
  });

});

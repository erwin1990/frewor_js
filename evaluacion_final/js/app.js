
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

function horizontal() {
  var bushori=0;
  for (var i = 0; i < 8; i++){
    for (var i = 0; i < 6; i++){
      var res1=$(".col-"+k).children("img:nth-last-child("+j+")").attr("src");
      var res2=$(".col-"+(k+1)).children("img:nth-last-child("+j+")").attr("src");
      var res3=$(".col-"+(k+2)).children("img:nth-last-child("+j+")").attr("src");
      if((res1==res2) && (res2==res3) && (res1!=null) && (res2!=null) && (res3!=null)) {
        $(".col-"+k).children("img:nth-last-child("+j+")").attr("class","elemento activo");
        $$(".col-"+(k+1)).children("img:nth-last-child("+j+")").attr("class","elemento activo");
        $$(".col-"+(k+2)).children("img:nth-last-child("+j+")").attr("class","elemento activo");
        busHori=1;
      }
    }
  }
  return busHori;
};

function vertical() {
  var bushori=0;
  for (var i = 0; i < 6; i++){
    for (var i = 0; i < 8; i++){
      var res1=$(".col-"+k).children("img:nth-last-child("+j+")").attr("src");
      var res2=$(".col-"+(k+1)).children("img:nth-last-child("+j+")").attr("src");
      var res3=$(".col-"+(k+2)).children("img:nth-last-child("+j+")").attr("src");
      if((res1==res2) && (res2==res3) && (res1!=null) && (res2!=null) && (res3!=null)) {
        $(".col-"+k).children("img:nth-last-child("+j+")").attr("class","elemento activo");
        $$(".col-"+(k+1)).children("img:nth-last-child("+j+")").attr("class","elemento activo");
        $$(".col-"+(k+2)).children("img:nth-last-child("+j+")").attr("class","elemento activo");
        busHori=1;
      }
    }
  }
  return busHori;
};






$( function() {

  amarrillo($(".main-titulo"));
  blanco($(".main-titulo"));



 var columnas = $(".panel-tablero div");
  for (var i = 0; i < 8; i++){
  for (var j = 0; j < 5; j++){
    var numero = Math.floor((Math.random() * 4) +1);
    var car = "<div class='caramelo+'-'+numero'><img src='image/"+numero+".png' /></div>"
     $(".col-"+i).append(car)
  }};


});

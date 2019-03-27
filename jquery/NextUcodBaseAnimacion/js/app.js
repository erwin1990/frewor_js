//Animación que mueve un elemento hacia la derecha
function derecha(elemento, desplazamiento, velocidad){
  $(elemento).animate(
    {
      left: "+="+desplazamiento
    }, velocidad, function(){
      izquierda(elemento, desplazamiento, velocidad)
    }
  )
}

//Animación que mueve un elemento hacia la izquierda
function izquierda(elemento, desplazamiento, velocidad){
  $(elemento).animate(
    {
      left: "-="+desplazamiento
    }, velocidad, function(){
      derecha(elemento, desplazamiento, velocidad)
    }
  )
}


function arriba(elemento){
  $(elemento).animate(
    {
      top: "-=400"
    }, 500, function(){
      abajo(elemento)
    }
  )
}

function abajo(elemento){
  $(elemento).animate(
    {
      top: "+=400"
    }, 500, function(){
      arriba(elemento)
    }
  )
}


$(function(){
  var vecesPresionada=0;
  var posHorizontal;
  var posVertical;
  $(document).on("keypress",function(e){

    if (e.which==32) {
      e.preventDefault();
      vecesPresionada++;
      if (vecesPresionada==1) {
        derecha($("#fHorizontal"),730);
        derecha($("#arquero"),230,1500);
      }else if (vecesPresionada==2) {
        $("#fHorizontal").stop();
        arriba($("#fVertical"));
      }else if (vecesPresionada==3) {
        $("#fVertical").stop();
        posHorizontal = $("#fHorizontal").css("left");
        posVertical = $("#fVertical").css("top");
      }
    }
  })

  $("#balon").on("click", function(){
    $(this)
    .animate(
      {
        top: posVertical,
        left: posHorizontal
      },600)
      .animate(
          {
            width: "-=70"
          },
          {
            step: function(now){
              $(this).css("transform","rotate("+now*10+"deg)")
            },
            queue: false,
            duration: 1200
          }
        )
      .delay(1000)
      .animate(
        {
          top: "400px"
        }, 1000
      )
    if ((x<454||x>1009)||(y<55||y>409)){
      rebote(elemento, "lejos");
    }
  });

  //Animación para cuando se falla el cobro
  function rebote(elemento, direccion){
    if (direccion=="izquierda") {
      $(elemento)
        .css("zIndex","4")
        .animate(
          {
            top: "380px",
            left: "-50px"
          },{
            step: function(now, fx){
              $(elemento).css("transform","rotate("+now*2+"deg)");
            },
            duration: 500
          }
        )
    }else if (direccion=="arriba") {
      $(elemento)
        .css("zIndex","4")
        .animate(
          {
            top: "-50px"
          },{
            step: function(now, fx){
              $(elemento).css("transform","rotate("+now*2+"deg)");
            },
            duration: 500
          }
        )
    }else if (direccion=="derecha") {
      $(elemento)
        .css("zIndex","4")
        .animate(
          {
            top: "380px",
            left: "1600px"
          },{
            step: function(now, fx){
              $(elemento).css("transform","rotate("+now*2+"deg)");
            },
            duration: 500
          }
        )
    }else if (direccion=="lejos"){
      $(elemento)
        .css("zIndex","1")
        .animate(
          {
            top: "380px",
            width: "-=50"
          },{
            step: function(now, fx){
              $(elemento).css("transform","rotate("+now*2+"deg)");
            },
            duration: 1000
          }
        )
    }


  }







});

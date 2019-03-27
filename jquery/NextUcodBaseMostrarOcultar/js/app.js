$(function(){

  $("#btn-vaca").on("click", function(){
    $("#vaca").toggle(1000, function(){
      $("#mensaje").show();
      $("#mensaje").text("La vaca hace Muuuu");
    });
  });



  $("#btn-cerdo").on("click", function(){
    $("#cerdo").toggle(1000, function(){
      $("#mensaje").show();
      $("#mensaje").text("El cerdo hace oink");
    });
  });

  $("#btn-gallina").on("click", function(){
    $("#gallina").toggle(1000, function(){
      $("#mensaje").show();
      $("#mensaje").text("La gallina hace cloac");
    });
  });

  $("#btn-oveja").on("click", function(){
    $("#oveja").toggle(1000, function(){
      $("#mensaje").show();
      $("#mensaje").text("La oveja hace beee");
    });
  });


  $("#bCorte").on("click", function(){
    $("body").removeClass("cursorConstruir");
    $("body").addClass("cursorCorte");
  });

  $("#bConstruir").on("click", function(){
    $("body").removeClass("cursorCorte");
    $("body").addClass("cursorConstruir");
    $(".cerca").show(function(){
      $("h1").text("Construye una cerca");
    });
    $(".animalP").show();
  });

  $(".arbusto").hover(function(){
    if ($("body").hasClass("cursorCorte")) {
        $(this).hide(250);
    }
  });

  //Función que activa el movimiento de los objetos del corral al hacer click en ellos
  $(".cerca, .animalP").mousedown(function(){
    var self = $(this);
    $(this).on('dragstart', function(event) {
      event.preventDefault();
    });
    //Función anidada que cambia la posición del elemento si se presiona el click y se mueve
    $("body").mousemove(function(event){
      self.css("left", function(){
        var newLeft = event.pageX;
        return newLeft+"px";
      });
      self.css("top", function(){
        var newLeft = event.pageY;
        return newLeft+"px";
      });
    });
  });

  //Función que posiciona el elemento en la ubicación en que el mouse se levanta
  $("body").mouseup(function(event){
    $(this).off("mousemove");
    var x = $(event.target).css("left");
    var y = $(event.target).css("top");
    $(event.target).css("left",x);
    $(event.target).css("top",y);
  });

  //Acción que termina el juego con el mensaje Muy Bien
  $("#bCursor").on("click", function(){
    cursorNormal();
    $(".cerca, .animalP, .animal, #mensaje").hide(1000, function(){
      $("h1").text("Muy Bien!");
    })
  });

});


//Document.Ready
$(function(){

  //Inicializador del elemento select de materialize css
  $('select').material_select();

  //Evento para cambiar de color al item seleccionado
  $(".elemento-tabla .collection-item").on("click",function(){
    $(".collection-item").removeClass("selected-item");
    $(this).toggleClass("selected-item");
    var checkAsociadoId= $(this).attr("id")+"Check";
    $("#"+checkAsociadoId).parent().toggleClass("selected-item");
  });

$(".collection").on("click",)



})

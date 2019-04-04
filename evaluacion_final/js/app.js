
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

function caramelos() {
   for (var i = 1; i < 8; i++){
     for (var j = 1; j < 6; j++){
     var numero = Math.floor((Math.random() * 4) +1);
     img ="image/"+numero+".png";
      $(".col-"+i).append("<img src="+img+" class='elemento'/>")
   }};
 }



// funcionas validacion de 3 caramelos en linia
function horizontal() {
  var bushori=0;
  for (var j = 0; j < 8; j++){
    for (var k = 0; k < 6; k++){
      var res1=$(".col-"+k).children("img("+j+")");
      var res2=$(".col-"+(k+1)).children("img("+j+")");
      var res3=$(".col-"+(k+2)).children("img("+j+")");
      if((res1==res2) && (res2==res3) && (res1!=null) && (res2!=null) && (res3!=null)) {
        $(".col-"+k).children("img("+(j)+")").attr("class","activo");
        $(".col-"+(k+1)).children("img("+(j)+")").attr("class","activo");
        $(".col-"+(k+2)).children("img("+(j)+")").attr("class","activo");
        busHori=1;
      }
    }
  }
  return busHori;
};

function vertical() {
  var busVerti=0;
  for (var v = 0; v < 6; v++){
    for (var k = 0; k < 8; k++){
      var res1=$(".col-"+k).children("img("+v+")");
      var res2=$(".col-"+(k+1)).children("img("+v+")");
      var res3=$(".col-"+(k+2)).children("img("+v+")");
      if((res1==res2) && (res2==res3) && (res1!=null) && (res2!=null) && (res3!=null)) {
        $(".col-"+k).children("img("+(v)+")").attr("class","activo");
        $(".col-"+(k+1)).children("img("+(v+1)+")").attr("class","activo");
        $(".col-"+(k+2)).children("img("+(v+2)+")").attr("class","activo");
        busVerti=1;
      }
    }
  }
  return busVerti;
};

function eliminardulces(){
  busquedaH=horizontal();
	busquedaV=vertical();
  if (busquedaH==1 || busquedaV==1) {
    $(".activo").hide("pulsate",1000)
  }
}

function nuevoscaramelos(){
  for(var j=1;j<8;j++){
		lencolum[j-1]=$(".col-"+j).children().length;}
	if(buscarNuevosDulces==0){
		for(var j=0;j<7;j++){
			lenrest[j]=(7-lencolum[j]);}
		maximo=Math.max.apply(null,lenrest);
		contarTotal=maximo;}
	if(maximo!=0){
		if(buscarNuevosDulces==1){
			for(var j=1;j<8;j++){
				if(contadorTotal>(maximo-lenrest[j-1])){
					$(".col-"+j).children("img("+(lenrest[j-1])+")").remove("img");}}
		}
    if(buscarNuevosDulces==0){
			buscarNuevosDulces=1;
			for(var k=1;k<8;k++){
				for(var j=0;j<(lenrest[k-1]-1);j++){
					$(".col-"+k).prepend("<img src='' class='dulce' style='visibility:hidden'/>");}}
		}
    for(var j=1;j<8;j++){
			if(contadorTotal>(maximo-lenrest[j-1])){
				numero=Math.floor(Math.random()*4)+1;
				imagen="image/"+numero+".png";
				$(".col-"+j).prepend("<img src="+imagen+" class='dulce'/>");}
		}
}
if(contadorTotal==1){
  clearInterval(nuevosDulces);
  eliminar=setInterval(function(){
    eliminarhorver()
  },50);
}
contadorTotal=contadorTotal-1;
};

function booster(busVerti,busHori) {
  var boosH = busHori * 100
  var boos2 = busVerti + busHori * 200
  var boosV = busVerti * 100
  return boosH + boosV + boos2
}


function reloj(){
	if(seg!=0){
		seg=seg-1;}
	if(seg==0){
		if(min==0){
			clearInterval(eliminar);
			clearInterval(nuevosDulces);
			clearInterval(intervalo);
			clearInterval(tiempo);
			$(".panel-tablero").hide("drop","slow",funcioncita);
			$(".time").hide();}
		seg=59;
		min=min-1;}
	$("#timer").html("0"+min+":"+seg);
};

//---------Función para intercambiar dulces-------------------------------------
jQuery.fn.swap=function(b){
	b=jQuery(b)[0];
	var a=this[0];
	var t=a.parentNode.insertBefore(document.createTextNode(''),a);
	b.parentNode.insertBefore(a,b);
	t.parentNode.insertBefore(b,t);
	t.parentNode.removeChild(t);
	return this;
};

$( function() {
  amarrillo($(".main-titulo"));
  blanco($(".main-titulo"));

  $(".btn-reinicio").click(function(){
    setInterval(function(){
    caramelos()
    	},600);
  });

});

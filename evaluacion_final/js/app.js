$( function() {
  amarrillo($(".main-titulo"));
  blanco($(".main-titulo"));


  $(".btn-reinicio").click(function(){
    ciclo=setInterval(function(){
  		caramelos()
  	},600);
    booster()

});
});
var ciclo = 0;

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
var i = 0;
var eliminar = 0;
function caramelos(){
	i=i+1
  if(i<8){
		for(var j=1;j<8;j++){
			if($(".col-"+j).children("img:nth-child("+i+")").html()==null){
				numero=Math.floor(Math.random()*4)+1;
				imagen="image/"+numero+".png";
				$(".col-"+j).prepend("<img src="+imagen+" class='elemento'/>").css("justify-content","flex-start")
			}}}
	if(i==8){
	clearInterval(ciclo);
  eliminar=setInterval(function(){
		booster()
	},150);}

};


function verfiH(){
	var verfiH=0;
	for(var j=1;j<8;j++){
		for(var k=1;k<6;k++){
			var res1=$(".col-"+k).children("img:nth-last-child("+j+")").attr("src");
			var res2=$(".col-"+(k+1)).children("img:nth-last-child("+j+")").attr("src");
			var res3=$(".col-"+(k+2)).children("img:nth-last-child("+j+")").attr("src");
			if((res1==res2) && (res2==res3) && (res1!=null) && (res2!=null) && (res3!=null)){
				$(".col-"+k).children("img:nth-last-child("+(j)+")").attr("class","elemento linia");
				$(".col-"+(k+1)).children("img:nth-last-child("+(j)+")").attr("class","elemento linia");
				$(".col-"+(k+2)).children("img:nth-last-child("+(j)+")").attr("class","elemento linia");
				verfiH=1;
			}
		}
	}
	return verfiH;
};

function verfiV(){
	var verfiV=0;
	for(var l=1;l<6;l++){
		for(var k=1;k<8;k++){
			var res1=$(".col-"+k).children("img:nth-child("+l+")").attr("src");
			var res2=$(".col-"+k).children("img:nth-child("+(l+1)+")").attr("src");
			var res3=$(".col-"+k).children("img:nth-child("+(l+2)+")").attr("src");
			if((res1==res2) && (res2==res3) && (res1!=null) && (res2!=null) && (res3!=null)){
				$(".col-"+k).children("img:nth-child("+(l)+")").attr("class","elemento linia");
				$(".col-"+k).children("img:nth-child("+(l+1)+")").attr("class","elemento linia");
				$(".col-"+k).children("img:nth-child("+(l+2)+")").attr("class","elemento linia");
				verfiV=1;
			}
		}
	}
	return verfiV;
};

var  horizontal = 0;
var  vertical = 0;
var tablero = 0;
var eliminar = 0;

function booster(){
	tablero = 0;
	horizontal = verfiH();
	vertical = verfiV();
	for(var j=1 ; j<8 ; j++){
	tablero=tablero + $(".col-"+j).children().length;}
	if(horizontal==0 && vertical==0 && tablero!=49){
		clearInterval(eliminar);
		buscarNuevosDulces=0;
		nuevosDulces=setInterval(function(){
			nuevoscaramelos()
		},600);}

	if(horizontal==1||vertical==1){
		$("div[class^='col']").css("justify-content","flex-end");
		$(".linia").hide("pulsate",1000);
	}
};

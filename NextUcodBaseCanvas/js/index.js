// se define el ancho y alto del cuadrado que contiene
var height = 316
var width = 556
var tween = null;

//Crea una función que adicione una estrella de tamaño, rotación y posición aleatorias. Debe tener 5 puntas y contorno negro, color de fondo amarillo, un poco transparente, y que se pueda arrastrar al seleccionarla con el mouse.

function addStar(layer, stage) {
    var scale = Math.random();

    var star = new Konva.Star({
        x: Math.random() * stage.getWidth(),
        y: Math.random() * stage.getHeight(),
        numPoints: 5,
        innerRadius: 30,
        outerRadius: 50,
        fill: '#f9f120',
        opacity: 0.8,
        draggable: true,
        scale: {
            x : scale,
            y : scale
        },
        rotation: Math.random() * 180,
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffset: {
            x : 5,
            y : 5
        },
        shadowOpacity: 0.6,
        startScale: scale
    });

//Crea en la misma función anterior, una animación que haga rotar constantemente la estrella sobre su propio centro y que su tamaño incremente y decremente de manera aleatoria. Esto arroja como resultado una estrella giratoria cuyo tamaño varía
    layer.add(star);
    var angularSpeed = 90;
    var period = 7000;
    var anim = new Konva.Animation(function(frame) {
        var angleDiff = frame.timeDiff * angularSpeed / 1000;
        var newscale = Math.sin(frame.time * 2 * Math.PI / period) + 0.001;
        star.scale({ x :scale + newscale, y : scale + newscale});
        star.rotate(angleDiff);
    }, layer);

anim.start();

}

//Crea el escenario y capas necesarias para mostrar la ilustración, sin olvidar seleccionar el contenedor con el id “dibujo”.
var stage = new Konva.Stage({
    container: 'dibujo',
    width: width,
    height: height
});

//Añade mediante un ciclo 10 estrellas a la ilustración, usando la función que creaste en pasos anteriores.
var layer = new Konva.Layer();
var dragLayer = new Konva.Layer();

for(var n = 0; n < 10; n++) {
    addStar(layer, stage);
}

stage.add(layer);
stage.add(dragLayer);

window.onload = function cargartodo(){
    var contenedor = document.getElementById('contenedor_carga');

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity= '0';

    var contenerUno = document.getElementById('contenedor-1');
    contenerUno.style.display = 'block';

}

var audio = new Audio('cancion.mp3');
audio.volume = '0.8';
var audio2 = new Audio('cancion2.mp3');

function changevolume(amount) {
    var audioobject = audio;
    audioobject.volume = amount;
}

function continuar() {
    var contenerUno = document.getElementById('contenedor-1');

    contenerUno.style.display = 'none';

    
    var contenerDos = document.getElementById('contenedor-2');
    contenerDos.style.display = 'block';

    audio.play();
}

function playPause() {
    if (audio2.paused)
        audio2.play();
    else
        audio2.pause();
        audio2.currentTime = 0;
}
function pauseMusic() {
    audio.pause();
    audio.currentTime = 0;
}

/* preload video */

var req = new XMLHttpRequest();
req.open('GET', 'video.mp4', true);
req.responseType = 'blob';

req.onload = function() {
   // Onload is triggered even on 404
   // so we need to check the status code
   if (this.status === 200) {
      var videoBlob = this.response;
      var vid = URL.createObjectURL(videoBlob); // IE10+
      // Video is now downloaded
      // and we can set it as source on the video element
      video.src = vid;
   }
}
req.onerror = function() {
   // Error
}

req.send();








var vp = document.getElementById("mundo");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverLobo);

var xLobo = 20;
var yLobo = 350;

var xVaca = new Array();
var yVaca = new Array();

var xCerdo = new Array();
var yCerdo = new Array();

var xPollo = new Array();
var yPollo = new Array();

function moverLobo(e)
{
	var movimiento = 10;
	var teclas =
	{
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	}
	switch(e.keyCode)
	{
		case teclas.LEFT:
			xLobo = xLobo - movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.UP:
			yLobo = yLobo - movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.RIGHT:
			xLobo = xLobo + movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.DOWN:
			yLobo = yLobo + movimiento;
			dibujar(xLobo, yLobo);
		break;
	}
}

var fondo =
{
	url: "tile.png",
	carga: false
}

var lobo =
{
	url: "lobo.png",
	carga: false
}

var vaca =
{
	url: "vaca.png",
	carga: false
}

var pollo =
{
	url: "pollo.png",
	carga: false
}

var cerdo =
{
	url: "cerdo.png",
	carga: false
}

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargaLobo);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargaFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargaVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargaCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargaPollo);

function cargaLobo()
{
	lobo.carga = true;
	dibujar();
}

function cargaFondo()
{
	fondo.carga = true;
	dibujar();
}

function cargaPollo()
{
	pollo.carga = true;
	mantenerPosicion();
}

function cargaCerdo()
{
	cerdo.carga = true;
	mantenerPosicion();
}

function cargaVaca()
{
	vaca.carga = true;
	mantenerPosicion();
}

function mantenerPosicion()
{
	if(vaca.carga)
	{
		var cantidad = 2;
		for(var i=0; i<cantidad; i++)
		{
		var x = 2;
		var y = 3;
		x = x*70;
		y = y*70;
		xVaca[i] = x;
		yVaca[i] = y;
		}
		if(xLobo == xVaca)
		{
			alert("Perdiste! hiciste que jansom bajara de rango");
		}
		}
	{
		var cantidad = 1;
		for(var i=0; i<cantidad; i++)
		{
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x*70;
			y = y*70;
			xCerdo[i] = x;
			yCerdo[i] = y; 		
		}
	}
	if(pollo.carga)
	{
		var cantidad = 2;
		for(var i=0; i<cantidad; i++)
		{
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x*70;
			y = y*70;
			xPollo[i] = x;
			yPollo[i] = y; 		
		}
	}
	dibujar();
}

function dibujar()
{
	if(fondo.carga)
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if(vaca.carga)
	{
		for(var i=0; i<10; i++){
			papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);		
		}
	}
	if(cerdo.carga)
	{
		for(var i=0; i<10; i++){
			papel.drawImage(cerdo.imagen, xCerdo[i], yCerdo[i]);		
		}
	}
	if(pollo.carga)
	{
		for(var i=0; i<10; i++){
			papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);		
		}
	}
	if(lobo.carga)
	{
		papel.drawImage(lobo.imagen, xLobo, yLobo)
	}
}

if(xLobo == xVaca)
{
	alert("Perdiste! hiciste que jansom bajara de rango");
}

function aleatorio(max, min)
{
	var numero_aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
	return numero_aleatorio;
}
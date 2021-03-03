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

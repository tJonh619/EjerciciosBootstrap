
function loadYouTubeAPI() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  window.onload = loadYouTubeAPI;



// Array con los ID de los videos de YouTube
  var videoIds = [
    'p7PB-n8EANc',
    '6tfgKv93C_Q',
    'p7PB-n8EANc',
    '6tfgKv93C_Q',
    'p7PB-n8EANc',
    '6tfgKv93C_Q',
    'p7PB-n8EANc',
    '6tfgKv93C_Q',
    'p7PB-n8EANc',
    '6tfgKv93C_Q'
];

// Función que se llama cuando la API de YouTube está lista
function onYouTubeIframeAPIReady() {
    // Crear objetos de reproductor de video para cada video
    for (var i = 0; i < videoIds.length; i++) {
        var videoContainer = document.getElementById('video-container-' + i);
        
        var player = new YT.Player(videoContainer, {
            height: '360', // Altura del reproductor
            width: '640',  // Ancho del reproductor
            videoId: videoIds[i], // ID del video de YouTube a cargar
        playerVars: {
            // Opciones adicionales del reproductor (si las necesitas)
        },
        events: {
            'onReady': onPlayerReady, // Función que se ejecuta cuando el reproductor está listo
            // Otros eventos del reproductor (si los necesitas)
        }
    });
}

}




// Esta función se llama cuando el reproductor está listo
function onPlayerReady(event) {
    // Reproducir el video (opcional)
    event.target.playVideo();
}

if (!sessionStorage.getItem('pageReloaded')) {
    // Si la página no se ha recargado previamente, establecer una marca
    sessionStorage.setItem('pageReloaded', 'true');
  
    // Esperar 1 segundo (1000 milisegundos) antes de recargar la página
    setTimeout(function() {
      location.reload();
    }, 1000);
  }
let currentAudio = null;

function playAudio(card) {
    var audioSrc = card.getAttribute('data-audio');

    // Si ya hay un audio en reproducción se detiene
    if (currentAudio) {
        currentAudio.pause(); // Pausar el audio actual
        currentAudio.currentTime = 0; // Reiniciar audio
    }

    // Crea un nuevo elemento de audio
    currentAudio = new Audio(audioSrc);

    // Reproducir el nuevo audio
    currentAudio.play().catch(error => {
        console.error("Error al reproducir el audio:", error);
    });
}
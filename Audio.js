// Variable global para almacenar la instancia de audio actual
let currentAudio = null;

function playAudio(card) {
    // Obtén la ruta del archivo de audio desde el atributo data-audio
    var audioSrc = card.getAttribute('data-audio');

    // Si ya hay un audio en reproducción, deténlo
    if (currentAudio) {
        currentAudio.pause(); // Pausa el audio actual
        currentAudio.currentTime = 0; // Reinicia el tiempo del audio
    }

    // Crea un nuevo elemento de audio
    currentAudio = new Audio(audioSrc);

    // Reproduce el nuevo audio
    currentAudio.play().catch(error => {
        console.error("Error al reproducir el audio:", error);
    });
}
// function updateClock() {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();
//     const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     document.getElementById('clock').textContent = timeString;
// }

// setInterval(updateClock, 1000);

// updateClock();

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    document.getElementById('clock').textContent = timeString;
  }
  
  // Actualizar cada segundo
  setInterval(updateClock, 1000);
  
  // Llamar a la función al cargar la página para evitar un segundo de retraso
  updateClock();
  
  // Reproducir la música
  // const audio = document.getElementById('myAudio');
  // audio.play();

  document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('playButton');
    const audio = document.getElementById('myAudio');
  
    playButton.addEventListener('click', function () {
      // Verificar si la música ya se está reproduciendo
      if (audio.paused) {
        audio.play().catch(error => {
          console.error('Error al reproducir la música:', error.message);
        });
        playButton.textContent = 'Pausar Música';
      } else {
        audio.pause();
        playButton.textContent = 'Reproducir Música';
      }
    });
  });

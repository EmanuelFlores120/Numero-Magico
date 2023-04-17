// Función para generar un número aleatorio entre 1 y 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Variables globales
  var magicNumber = 0;
  var attempts = 0;

  // Evento click del botón "Comenzar"
  document.getElementById('startBtn').addEventListener('click', function() {
    magicNumber = generateRandomNumber();
    attempts = 0;
    alert('¡Comienza el juego! Se ha generado un número mágico entre 1 y 100. ¡Adivina cuál es!');
  });

  // Evento click del botón "Enviar"
  document.getElementById('guessBtn').addEventListener('click', function() {
    var guess = parseInt(document.getElementById('guessInput').value);
    if (isNaN(guess)) {
      alert('Por favor, ingresa un número válido.');
    } else {
      attempts++;
      if (guess === magicNumber) {
        alert('¡Felicidades! Adivinaste el número mágico ' + magicNumber + ' en ' + attempts + ' intentos.');
      } else if (guess < magicNumber) {
        alert('El número que ingresaste es menor al número mágico. Intenta nuevamente.');
      } else {
        alert('El número que ingresaste es mayor al número mágico. Intenta nuevamente.');
      }
    }
  });
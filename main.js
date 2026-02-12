/* inizializzo le varibili lampadina e bottone */
const lampadina = document.getElementById('lampadina'); 
const bottone = document.getElementById('interruttore'); 

/* Aggiungo l'ascoltatore di eventi sul click del bottone */
bottone.addEventListener('click', function () {

  /* quando clicco, cambio solo l'immagine da spenta ad accesa */
  lampadina.src = './img/yellow_lamp.png';
});
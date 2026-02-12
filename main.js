/* inizializzo le varibili lampadina e bottone */
const lampadina = document.getElementById('lampadina'); 
const bottone = document.getElementById('interruttore'); 

/* Aggiungo l'ascoltatore di eventi sul click del bottone */
bottone.addEventListener('click', function () {

    /* se contiene spenta la accendo */
   if (lampadina.src.includes('white_lamp.png')) {
  lampadina.src = './img/yellow_lamp.png';
  bottone.textContent = 'Spegni';
    } 

    /* altrimenti la spengo */
else {
    lampadina.src= './img/white_lamp.png';
    bottone.textContent= 'Accendi';
}
})

/* quando clicco, cambio solo l'immagine da spenta ad accesa 
lampadina.src = './img/yellow_lamp.png'; */
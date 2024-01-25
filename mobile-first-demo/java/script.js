// Haal de knopelementen op
var openModalBtn = document.getElementById('openBtn');
var closeModalBtn = document.getElementById('closeModalBtn');
var modal = document.getElementById('myBtn');

// Voeg een klikgebeurtenis toe aan de open knop
openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Voeg een klikgebeurtenis toe aan de sluitknop
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Sluit de modale popup als er buiten wordt geklikt
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});




// besquare button

document.getElementById('beSquare').addEventListener('click', function() {
    document.getElementById('openBeSquare').style.display = 'block';
});

document.getElementById('closeModalButton').addEventListener('click', function() {
    document.getElementById('close').style.display = 'none';
});




document.addEventListener("DOMContentLoaded", function() {
    // Array van mogelijke kleuren
    const kleuren = ["#000000","#ff7a41", "#ffc852", "#a560ff", "#00c46d", "#f3a0d6"];

    // Willekeurige index selecteren
    const willekeurigeIndex = Math.floor(Math.random() * kleuren.length);

    // Achtergrondkleur instellen
    document.body.style.backgroundColor = kleuren[willekeurigeIndex];
});


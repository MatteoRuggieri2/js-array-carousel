// MILESTONE 3
// Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile 
// in formato grande a sinistra e nel suo angolo in basso a destra dovranno comparire relativi:
//  - titolo e
//  - testo.
// Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.

// BONUS:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e 
// l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa 
// per l'ultima miniatura se l'utente clicca la freccia verso il basso.


// ARRAY
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// Seleziono il container delle img
const imageContainer = document.querySelector('.big-img-container');
const thumbsContainer = document.querySelector('.thumb-img-container');

for( let i = 0; i < items.length; i++ ) {
    const thisImg = items[i];
    const thisTitle = title[i];
    const thisText = text[i];


    // Inserisco le immagini e il loro testo
    const newImage = `
    <div class="single-big-img">
        <img src="${thisImg}" alt="${thisTitle}">

        <div class="text-big-img">
            <h3>${thisTitle}</h3>
            <p>${thisText}</p>
        </div>
    </div>
    `;

    imageContainer.innerHTML += newImage;

    // popolate thumbnails a destra
    const thumbs = `
    <div class="single-thumb-img">
        <img src="${thisImg}" alt="${thisTitle}">
    </div>
    `;

    thumbsContainer.innerHTML += thumbs;

}

// Do la classe active a un elemento
let activeImage = 0;
const allImages = document.getElementsByClassName('single-big-img');
const allThumb = document.getElementsByClassName('single-thumb-img');
allImages[activeImage].classList.add('active');
allThumb[activeImage].classList.add('active');

// Al click del tasto sotto le imagini vanno avanti
const nextChevron = document.querySelector('.chevron-down-icon');
nextChevron.addEventListener('click', function() {

    // Rimuovo active all'immagine corrente
    allImages[activeImage].classList.remove('active');
    allThumb[activeImage].classList.remove('active');

    // Incremento activeImage di 1 solo se non è l'ultima
    if( activeImage < items.length - 1 ) {
        activeImage++;
    } else {
        activeImage = 0; 
    }
        
    // Aggiungo active all'immagine successiva
    allImages[activeImage].classList.add('active');
    allThumb[activeImage].classList.add('active');
});

// Al click del tasto sopra le imagini vanno indietro
const backChevron = document.querySelector('.chevron-up-icon');
backChevron.addEventListener('click', function() {

    // Rimuovo active all'immagine corrente
    allImages[activeImage].classList.remove('active');
    allThumb[activeImage].classList.remove('active');

    // Decremento activeImage di 1 solo se non è la prima
    if( activeImage > 0 ) {
        activeImage--;
    } else {
        activeImage = items.length - 1; 
    }
        
    // Aggiungo active all'immagine successiva
    allImages[activeImage].classList.add('active');
    allThumb[activeImage].classList.add('active');
});
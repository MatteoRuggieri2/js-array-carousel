// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini e i testi delle 
// immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che 
// concatena un template literal. Al termine di questa fase ci ritroveremo con 
// lo stesso slider, ma costruito dinamicamente attraverso JavaScript.


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
const circleContainer = document.querySelector('.lista-dei-pallini');

for( let i = 0; i < items.length; i++ ) {
    const thisImg = items[i];
    const thisTitle = title[i];
    const thisText = text[i];

    // Inserisco le immagini e il loro testo
    const newImage = `
    <div class="single-img-container">
        <img src="${thisImg}" alt="Img: ${thisImg}">

        <div class="text-big-img">
            <h3>${thisTitle}</h3>
            <p>${thisText}</p>
        </div>
    </div>
    `;

    imageContainer.innerHTML += newImage;

    // Inserisco il contenitore di pallini
    const circle = `
    <li class="pallini"></li>
    `;

    circleContainer.innerHTML += circle;  // !!! QUESTO innerHTML NON FUNZIONA !!!

}

// Do la classe active a un elemento
let activeImage = 0;
const allImages = document.getElementsByName('single-img-container');
const allCircle = document.getElementsByName('pallini');
allImages[activeImage].classList.add('active');
allCircle[activeImage].classList.add('active');

// Al click dei tasti le imagini vanno avanti o indietro
const nextChevron = document.querySelector('.chevron-down-icon');
nextChevron.addEventListener('click', 
    function() {

        // Rimuovo active all'immagine corrente
        allImages[activeImage].classList.remove('active')
        allCircle[activeImage].classList.remove('active')

        // Incremento activeImage di 1 solo se non è l'ultima
        if( activeImage < items.length - 1 ) {

        }
        activeImage++;

        // Aggiungo active all'immagine successiva
        allImages[activeImage].classList.add('active')
        allCircle[activeImage].classList.add('active')
});
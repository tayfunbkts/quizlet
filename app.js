import { a2Flashcards } from "./a2.js";
import { c1verb } from "./c1.js";
import { c1worter} from "./c1worter.js";
import { c1adjektiv} from "./c1adjektiv.js";
// if (a2Flashcards && c1verb) {
//     console.log("modules loaded")
    
// }else{
//     console.log("hata")
// }
// console.log(a2Flashcards)

let flashcards = c1verb

document.querySelector(".top-buttons").addEventListener("click", function(event) {
    console.log(event.target.id)
    if (event.target.id == 'a2') {
        flashcards = a2Flashcards
        loadNewCard();
    }else if(event.target.id == 'c1verb'){
        flashcards = c1verb
        loadNewCard();
    }else if(event.target.id == 'c1worter'){
        flashcards = c1worter
        loadNewCard();
    }else if(event.target.id == 'c1adjektiv'){
        flashcards = c1adjektiv
        loadNewCard();
    }
})
// Google Sheet Formülü: ="{ question: """ & A2 & """, answer: """ & B2 & """ },"

let currentCard = {};
let languageDirection = "germanToEnglish"; // Varsayılan dil yönü Almanca → İngilizce

document.getElementById('toEnglish').addEventListener('click', function() {
    languageDirection = "germanToEnglish";
    loadNewCard();
});

document.getElementById('toGerman').addEventListener('click', function() {
    languageDirection = "englishToGerman";
    loadNewCard();
});

function loadNewCard() {
    // Rastgele bir kart seç
    currentCard = flashcards[Math.floor(Math.random() * flashcards.length)];
    
    if (languageDirection === "germanToEnglish") {
        document.querySelector('.card-front').textContent = currentCard.question;
        document.querySelector('.card-back').textContent = currentCard.answer;
    } else {
        document.querySelector('.card-front').textContent = currentCard.answer;
        document.querySelector('.card-back').textContent = currentCard.question;
    }
    
    // Kartı ilk yüklemede geri çevir
    document.querySelector('.card').classList.remove('flipped');
}

document.querySelector('.card').addEventListener('click', function() {
    const card = document.querySelector('.card');

    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped'); // Önce kartı çevir
        setTimeout(() => {
            loadNewCard(); // Animasyon tamamlandığında yeni karta geç
        }, 250); // 250ms, animasyon süresi
    } else {
        card.classList.toggle('flipped'); // Kartı çevir
    }
});

// Sayfa yüklendiğinde ilk kartı yükle
loadNewCard();

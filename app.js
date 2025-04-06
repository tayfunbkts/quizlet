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
document.getElementById("c1verb").style.backgroundColor = "#81c784";

let btns = document.querySelectorAll(".top-buttons button");  // Tüm butonları seç

btns.forEach(button => {
    button.addEventListener("click", function() {
        // Tüm butonları varsayılan rengine döndür
        btns.forEach(btn => {
            btn.style.backgroundColor = "#ff9800";  // Varsayılan turuncu renk
        });

        // Tıklanan butonu pastel yeşil yap
        this.style.backgroundColor = "#81c784";
    });
});

// Çalışma kitabı seçimi yapar
const flashcardTypes = {
    'a2': a2Flashcards,
    'c1verb': c1verb,
    'c1worter': c1worter,
    'c1adjektiv': c1adjektiv
};

document.querySelector(".top-buttons").addEventListener("click", function(event) {
    const flashcardsType = flashcardTypes[event.target.id];
    
    if (flashcardsType) {
        flashcards = flashcardsType;
        loadNewCard();
    }
});

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

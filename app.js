let flashcards = [
    { question: "abbauen", answer: "parçalamak" },
    { question: "abschalten", answer: "kapatmak" },
    { question: "abschneiden bei", answer: "kesip atmak" },
    { question: "abspeichern", answer: "bir yere kaydetmek" },
    { question: "abstürzen", answer: "hattın düşmek" },
    { question: "abweichen", answer: "farklılaşmak" },
    { question: "anbauen", answer: "yetiştirmek" },
    { question: "aneignen", answer: "edinmek" },
    { question: "annehmen", answer: "sanmak" },
    { question: "anregen zu", answer: "teşvik etmek" },
    { question: "ansprechen", answer: "konuşmak" },
    { question: "aufbauen", answer: "inşa etmek" },
    { question: "auffallen", answer: "dikkat çekmek" },
    { question: "auflösen", answer: "çözünmek" },
    { question: "aufsteigen", answer: "çıkmak" },
    { question: "aufzeigen", answer: "göstermek" },
    { question: "ausgrenzen", answer: "dışlamak" },
    { question: "ausnutzen", answer: "kötüye kullanmak" },
    { question: "beauftragen", answer: "görevlendirmek" },
    { question: "beheben", answer: "gidermek" },
    { question: "beherrschen", answer: "hakim olmak" },
    { question: "beitreten", answer: "katılmak" },
    { question: "beleidigen", answer: "hakaret etmek" },
    { question: "bemerken", answer: "fark etmek" },
    { question: "berichten", answer: "bilgi vermek" },
    { question: "beschleunigen", answer: "hızlandırmak" },
    { question: "beschreiben", answer: "betimlemek" },
    { question: "beseitigen", answer: "ortadan kaldırmak" },
    { question: "besprechen", answer: "görüşmek" },
    { question: "betonen", answer: "vurgulamak" },
    { question: "darstellen", answer: "temsil etmek" },
    { question: "duften", answer: "güzel kokmak" },
    { question: "durchführen", answer: "yürütmek" },
    { question: "durchrechnen", answer: "hesaplamak" },
    { question: "durchschauen", answer: "görmek" },
    { question: "einbauen", answer: "yerleştirmek" },
    { question: "eingehen", answer: "değinmek, bahsetmek" },
    { question: "einleben in", answer: "alışmak" },
    { question: "einreichen", answer: "göndermek" },
    { question: "einwählen", answer: "bağlanmak" },
    { question: "empfinden", answer: "hissetmek" },
    { question: "entdecken", answer: "keşfetmek" },
    { question: "entfliehen", answer: "kaçmak" },
    { question: "entschleunigen", answer: "yavaşlatmak" },
    { question: "entsperren", answer: "kilidini açmak" },
    { question: "entsprechen", answer: "uymak" },
    { question: "erfahren", answer: "tecrübe etmek" },
    { question: "erreichen", answer: "ulaşmak" },
    { question: "erwerben", answer: "edinmek" },
    { question: "es geht um", answer: "konusu olmak" },
    { question: "feststellen", answer: "fark etmek" },
    { question: "formulieren", answer: "çözüm oluşturmak" },
    { question: "fürchten", answer: "korkmak" },
    { question: "gegenüberstellen", answer: "karşılaştırmak" },
    { question: "gestalten", answer: "tasarlamak" },
    { question: "gezwungen sein", answer: "zorunda olmak" },
    { question: "gleichsetzen mit", answer: "haklarını eşitlemek" },
    { question: "gründen", answer: "kurmak" },
    { question: "hinweisen", answer: "işaret etmek, değinmek" },
    { question: "holen", answer: "almak" },
    { question: "imponieren", answer: "taklit etmek" },
    { question: "in Frage kommen", answer: "söz konusu olmak" },
    { question: "klettern", answer: "tırmanmak" },
    { question: "kontern", answer: "karşılık vermek" },
    { question: "kündigen", answer: "iptal etmek, bırakmak" },
    { question: "leiten", answer: "yönetmek" },
    { question: "meckern", answer: "mızmızlanmak" },
    { question: "meistern", answer: "ustalaşmak" },
    { question: "mitnehmen", answer: "yanında getirmek" },
    { question: "nachholen", answer: "telafi etmek" },
    { question: "nachkommen", answer: "takip etmek" },
    { question: "scheitern", answer: "başarısız olmak" },
    { question: "sich einprägen", answer: "ezberlemek" },
    { question: "sich positionieren", answer: "pozisyon almak" },
    { question: "sich rechnen", answer: "hesaplamak" },
    { question: "sich schämen für", answer: "bir şeyden dolayı utanmak" },
    { question: "sich sehnen", answer: "hasret olmak" },
    { question: "sich verhalten", answer: "davranmak" },
    { question: "sich verlieben", answer: "aşık olmak" },
    { question: "sich wehren gegen", answer: "kendini savunmak" },
    { question: "sich zerstreuen", answer: "dağıtmak" },
    { question: "sich zurechtfinden", answer: "yolunu bulmak" },
    { question: "sich zurückziehen", answer: "geri adım atmak" },
    { question: "speichern", answer: "kaydetmek" },
    { question: "stinken", answer: "kötü kokmak" },
    { question: "tragen", answer: "taşımak" },
    { question: "umbauen", answer: "yeniden inşa etmek" },
    { question: "unterfordern", answer: "to underwhelm" },
    { question: "unterlassen", answer: "kendini tutmak" },
    { question: "unterschätzen", answer: "küçümsemek" },
    { question: "unterstellen", answer: "suç atmak" },
    { question: "ursprünglich", answer: "aslında, ilk seferde" },
    { question: "überfordern", answer: "to overwhelm" },
    { question: "übertragen", answer: "aktarmak" },
    { question: "überzeugen", answer: "ikna etmek" },
    { question: "veranlassen", answer: "neden olmak" },
    { question: "verblüffen", answer: "şaşırtmak" },
    { question: "verletzen", answer: "yaralamak, incitmek" },
    { question: "verleumden", answer: "reddetmek" },
    { question: "vermeiden", answer: "göz ardı etmek" },
    { question: "vermitteln", answer: "iletmek" },
    { question: "vermuten", answer: "sanmak" },
    { question: "veröffentlichen", answer: "yayınlanmak" },
    { question: "verschütten", answer: "dökmek" },
    { question: "verschwenden", answer: "harcamak" },
    { question: "verwirren", answer: "kafasını karıştırmak" },
    { question: "vorbringen", answer: "öne sürmek" },
    { question: "wahrnehmen", answer: "algılamak" },
    { question: "zustimmen", answer: "katılmak" },
    { question: "zweifeln", answer: "şüphelenmek" },
    { question: "wegbrechen", answer: "kaçmak" },
    { question: "vernachlässigen", answer: "göz ardı etmek" },
    { question: "sich wehren gehen", answer: "kendini savunmak" },
    { question: "zusammenbrechen ", answer: "bağlantı kopması" },
    { question: "zocken ", answer: "kumar oynamak" },
];


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

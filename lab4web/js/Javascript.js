document.addEventListener('DOMContentLoaded', function() {
    var animatedElements = document.querySelectorAll('.animated');

    function checkAnimation() {
        animatedElements.forEach(function(element) {
            var position = element.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('animate__animated');
            }
        });
    }

    window.addEventListener('scroll', checkAnimation);
    checkAnimation();
});
AOS.init();

// Функція для відкриття вспливаючого вікна
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

// Функція для закриття вспливаючого вікна
function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Функції для відкриття вспливаючих вікон
function openRegistrationModal() {
    document.getElementById('registrationModal').style.display = 'block';
}

function openQuestionModal() {
    document.getElementById('questionModal').style.display = 'block';
}

// Функції для закриття вспливаючих вікон
function closeRegistrationModal() {
    document.getElementById('registrationModal').style.display = 'none';
}

function closeQuestionModal() {
    document.getElementById('questionModal').style.display = 'none';
}

function updateModels() {
    var firmSelect = document.getElementById("Firm");
    var modelSelect = document.getElementById("model");

    // Очищаємо поточний вміст модельного випадаючого списку
    modelSelect.innerHTML = "";

    // Відповідно до вибраної компанії, додаємо моделі
    if (firmSelect.value === "Volkswagen") {
        addOption(modelSelect, "Tiguan", "Tiguan");
        addOption(modelSelect,"Golf 7", "Golf 7")
        addOption(modelSelect, "Passat B8", "Passat B8");
        addOption(modelSelect, "Jetta", "Jetta");
        // Додайте інші моделі Volkswagen за необхідності
    } else if (firmSelect.value === "Audi") {
        addOption(modelSelect, "A4", "A4");
        addOption(modelSelect, "Q7", "Q7");
        addOption(modelSelect, "Q3", "Q3");
        addOption(modelSelect, "R8", "R8");
        // Додайте інші моделі Audi за необхідності
    } else if (firmSelect.value === "BWM") {
        addOption(modelSelect, "M5", "M5");
        addOption(modelSelect, "M3", "M3");
        addOption(modelSelect, "X5", "X5");
        addOption(modelSelect, "X3", "X3");
        // Додайте інші моделі BWM за необхідності
    } else if (firmSelect.value === "Mercedes") {
        addOption(modelSelect, "AMG", "AMG");
        addOption(modelSelect, "Benz", "Benz");
        addOption(modelSelect, "Gle", "Gle");
        addOption(modelSelect, "Cls 63", "Cls 63");
        // Додайте інші моделі Mercedes за необхідності
    }
}

function addOption(selectElement, value, text) {
    var option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
}

function redirectToHomePage() {
    // Використовуйте window.location.href для переадресації на головну сторінку
    window.location.href = 'index.html';
}
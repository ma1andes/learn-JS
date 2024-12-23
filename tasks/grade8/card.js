const TIME_LIMIT = 60;
const DEFAULT_SIZE = 4;

// Глобальные переменные
let gameTimer, remainingTime, timeoutId;
let boardSize, cards, firstCard, secondCard, matchedPairs;

// Кэшируем часто используемые DOM-элементы
const gameBoard = document.getElementById("game-board");
const timerElement = document.getElementById("timer");
const gridSizeInput = document.getElementById("grid-size");
const errorMessageElement = document.getElementById("error-message");

const generateCardNumbers = (size) => {
    const pairs = (size * size) / 2;
    return [...Array(pairs).keys(), ...Array(pairs).keys()].map((n) => n + 1);
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const createCard = (number) => {
    const card = document.createElement("div");
    card.classList.add("card", "hidden");
    card.dataset.number = number;
    card.textContent = number;
    card.addEventListener("click", onCardClick);
    return card;
};

const initializeBoard = (size) => {
    boardSize = size;

    // Генерация номеров карточек и их перемешивание
    const numbers = shuffleArray(generateCardNumbers(size));

    // Установка CSS-сетки
    gameBoard.style.gridTemplateColumns = `repeat(${size}, 80px)`;

    // Очистка содержимого игрового поля
    gameBoard.innerHTML = "";

    // Создание и добавление карточек
    cards = numbers.map((num) => createCard(num));
    cards.forEach((card) => gameBoard.appendChild(card));

    matchedPairs = 0; // Сброс счётчика совпавших пар
};

const onCardClick = (event) => {
    const card = event.target;

    if (!card.classList.contains("hidden") || card === firstCard || secondCard) return;

    card.classList.remove("hidden");

    if (!firstCard) {
        firstCard = card;
        firstCard.classList.add("matched");
    } else {
        secondCard = card;
        checkMatch();
    }
};

const checkMatch = () => {
    secondCard.classList.add("matched");
    const isMatch = firstCard.dataset.number === secondCard.dataset.number;

    if (isMatch) {
        firstCard = null;
        secondCard = null;
        matchedPairs++;
        if (matchedPairs === (boardSize * boardSize) / 2) {
            endGame(true);
        }
    } else {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            firstCard.classList.add("hidden");
            firstCard.classList.remove("matched");
            secondCard.classList.add("hidden");
            secondCard.classList.remove("matched");
            firstCard = null;
            secondCard = null;
        }, 1000);
    }
};

const endGame = (win) => {
    clearInterval(gameTimer);
    alert(win ? "Поздравляем, вы выиграли!" : "Время вышло! Попробуйте ещё раз.");
};

const startTimer = () => {
    remainingTime = TIME_LIMIT;
    timerElement.textContent = `Осталось времени: ${remainingTime} сек`;
    gameTimer = setInterval(() => {
        remainingTime--;
        timerElement.textContent = `Осталось времени: ${remainingTime} сек`;
        if (remainingTime <= 0) endGame(false);
    }, 1000);
};

const restartGame = () => {
    clearInterval(gameTimer);
    startTimer();
    initializeBoard(boardSize); 
};

const startGameWithInput = () => {
    const inputSize = parseInt(gridSizeInput.value, 10);

    // Очистка предыдущего сообщения об ошибке
    errorMessageElement.style.display = "none";
    errorMessageElement.textContent = "";

    // Проверка ввода
    if (isNaN(inputSize) || inputSize % 2 !== 0 || inputSize < 2 || inputSize > 10) {
        errorMessageElement.textContent = "Введите четное число от 2 до 10.";
        errorMessageElement.style.display = "inline";
        boardSize = DEFAULT_SIZE; // Используем значение по умолчанию
    } else {
        boardSize = inputSize;
        restartGame();
    }
};

// Добавляем обработчики событий
document.getElementById("start-btn").addEventListener("click", startGameWithInput);
document.getElementById("restart-btn").addEventListener("click", restartGame);

// Установка значения по умолчанию и старт игры
boardSize = DEFAULT_SIZE;
restartGame();

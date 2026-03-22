// 1. Создаем список слов (массив)
const words = [
    "Яблоко", "Велосипед", "Космос", "Программист", 
    "Арбуз", "Компьютер", "Счастье", "Музыка", 
    "Гитара", "Море", "Закат", "Кофе", 
    "Книга", "Дружба", "Путешествие", "Кот","дед мороз"
];

// 2. Функция, которая выбирает слово
function getRandomWord() {
    // Находим случайный индекс от 0 до длины списка слов
    const randomIndex = Math.floor(Math.random() * words.length);
    
    // Берем слово по этому индексу
    const randomWord = words[randomIndex];

    // Находим элемент на странице, куда нужно вставить слово
    const displayElement = document.getElementById('word-display');

    // Записываем слово
    displayElement.innerText = randomWord;
}
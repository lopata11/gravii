// Получаем ссылку на экран калькулятора
const display = document.getElementById('display');

// Функция добавления символа на экран
function appendToDisplay(input) {
    display.value += input;
}

// Функция очистки экрана (кнопка C)
function clearDisplay() {
    display.value = "";
}

// Функция удаления последнего символа (кнопка стрелочки)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Функция вычисления результата (кнопка =)
function calculate() {
    try {
        // eval() выполняет математическое выражение, записанное в строке
        display.value = eval(display.value);
    } catch (error) {
        display.value = "?";
    }
}
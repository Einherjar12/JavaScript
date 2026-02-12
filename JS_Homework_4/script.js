/* Задание 1. Написать функцию, которая принимает 2 числа и
возвращает -1, если первое меньше, чем второе; 1 – если первое
больше, чем второе; и 0 – если числа равны. */

function compareNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Ошибка: нужно ввести числа";
    }

    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

function task1() {
    let a = Number(prompt("Введите первое число:"));
    let b = Number(prompt("Введите второе число:"));

    let result = compareNumbers(a, b);
    alert("Результат: " + result);
}


/* Задание 2. Написать функцию, которая вычисляет факториал переданного ей числа. */
function factorial(n) {

    if (n < 0) {
        return "Факториал отрицательного числа не существует";
    }

    if (n === 0) return 1;

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

function task2() {
    let n = +prompt("Введите число:");
    alert(factorial(n));
}


/* Задание 3. Написать функцию, которая принимает три отдельные цифры и
превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149. */

function combineDigits(a, b, c) {
    return a * 100 + b * 10 + c;
}

function task3() {
    let a = +prompt("Введите первую цифру:");
    let b = +prompt("Введите вторую цифру:");
    let c = +prompt("Введите третью цифру:");
    alert(combineDigits(a, b, c));
}


/* Задание 4. Написать функцию, которая принимает длину и ширину
прямоугольника и вычисляет его площадь. Если в функцию
передали 1 параметр, то она вычисляет площадь квадрата */

function rectangleArea(length, width) {
    if (width === undefined) return length * length;
    return length * width;
}

function task4() {
    let length = +prompt("Введите длину:");
    let width = prompt("Введите ширину (если квадрат — оставьте пустым):");

    if (width === "" || width === null) {
        alert(rectangleArea(length));
    } else {
        alert(rectangleArea(length, +width));
    }
}


/* Задание 5. Написать функцию, которая проверяет, является ли
переданное ей число совершенным. Совершенное число – это
число, равное сумме всех своих собственных делителей.*/

function isPerfectNumber(num) {

    if (num <= 1) return false;

    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) sum += i;
    }

    return sum === num;
}

function task5() {
    let num = +prompt("Введите число:");
    alert(isPerfectNumber(num));
}


/* Задание 6. Написать функцию, которая принимает минимальное и максимальное
значения для диапазона, и выводит только те числа из диапазона, которые
являются совершенными.Используйте написанную ранее функцию, чтобы узнавать,
совершенное число или нет.*/

function perfectInRange(min, max) {
    let result = "";

    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) result += i + " ";
    }

    return result || "Совершенных чисел нет";
}

function task6() {
    let min = +prompt("Введите минимум:");
    let max = +prompt("Введите максимум:");
    alert(perfectInRange(min, max));
}


/* Задание 7. Написать функцию, которая принимает время (часы, минуты, секунды)
и выводит его на экран в формате «чч:мм:сс». Если при вызове функции минуты
и/или секунды не были переданы, то выводить их как 00.*/

function formatTime(hours, minutes = 0, seconds = 0) {

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    return secondsToTime(totalSeconds);
}

function task7() {
    let h = +prompt("Часы:");
    let m = +prompt("Минуты (можно 0):");
    let s = +prompt("Секунды (можно 0):");
    alert(formatTime(h, m, s));
}


/* Задание 8. Написать функцию, которая принимает часы,
минуты и секунды и возвращает это время в секундах.*/

function timeToSeconds(h, m, s) {
    return h * 3600 + m * 60 + s;
}

function task8() {
    let h = +prompt("Часы:");
    let m = +prompt("Минуты:");
    let s = +prompt("Секунды:");
    alert(timeToSeconds(h, m, s));
}


/* Задание 9. Написать функцию, которая принимает количество секунд,
переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».*/

function secondsToTime(totalSeconds) {

    let h = Math.floor(totalSeconds / 3600);
    let m = Math.floor((totalSeconds % 3600) / 60);
    let s = totalSeconds % 60;

    function addZero(num) {
        return num < 10 ? "0" + num : num;
    }

    return addZero(h) + ":" + addZero(m) + ":" + addZero(s);
}

function task9() {
    let seconds = +prompt("Введите количество секунд:");
    alert(secondsToTime(seconds));
}


/* Задание 10. Написать функцию, которая считает разницу между датами.
Функция принимает 6 параметров, которые описывают 2 даты, и возвращает
результат в виде строки «чч:мм:сс». При выполнении задания используйте
функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды,
узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс».*/

function timeDifference(h1, m1, s1, h2, m2, s2) {

    let t1 = timeToSeconds(h1, m1, s1);
    let t2 = timeToSeconds(h2, m2, s2);

    let difference = Math.abs(t1 - t2);

    return secondsToTime(difference);
}

function task10() {

    alert("Первая дата:");
    let h1 = +prompt("Часы:");
    let m1 = +prompt("Минуты:");
    let s1 = +prompt("Секунды:");

    alert("Вторая дата:");
    let h2 = +prompt("Часы:");
    let m2 = +prompt("Минуты:");
    let s2 = +prompt("Секунды:");

    alert(timeDifference(h1, m1, s1, h2, m2, s2));
}


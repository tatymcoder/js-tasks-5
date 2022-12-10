/* 
 Практическое задание 5.1
В программе объявлены две переменные start и end. 
Используя цикл, посчитайте сумму чисел из диапазона значений 
от start до end (включая концы), кратные значению 5. 
Результат выведите в консоль.
Пример значений переменных:
start = 0 end = 50
Пример результата:
275
*/

/*Мой Вариант решения №1 - ответ верный - 275
let start = 0, end = 50, result = 0;
for (let x = start; x >=start && x <= end; x++) {
    if (x % 5 === 0) {
        result += x;
    }
}
console.log(result);
*/

// Мой Вариант решения №2 - ответ верный - 275
/*
let start = 0, end = 50, result = 0;
for (; start <= end; start++) {
    if (start % 5 === 0) {
        result += start;
    }
}
console.log(result);
*/

// решение из тренажера с while

let start = 0, end = 50;
let result = 0; 

while (start <= end) {
    if (start % 5 === 0) {
       // console.log(start); // эту строчку можно не писать
        result = result + start;
    }
    start++;
    console.log(result);
}

/*
    Задача 5.2
    В программе объявлена переменная word со строковым значением. Переверните строку, используя цикл, и выведите результат в консоль.
    Пример значений переменных:
    word = "мир"
    Пример результата:
    "рим"
*/

let word = "Выносливость";
let fin = "";

        //console.log(word.length); // длина строки
        //console.log(word[0]); //Первая буква
        //console.log(word[word.length - 1]); //Последняя буква

for (let index = word.length - 1; index >=0; index--) {
     fin += word[index];
     console.log(fin);
 }

/*
    Задача 5.3
    В программе объявлена переменная word, в которой записано строковое значение. Определите, является ли word палиндромом:
    если является, выведите в консоль "Слово является палиндромом!";
    если не является, выведите в консоль "Слово не является палиндромом!".
    Примечание:
    Строка word состоит только из букв разного регистра (большие и маленькие).
    Пример значений переменных:
    word = "Доход"
    Пример результата:
    "Слово является палиндромом!"
*/

word = "Польза";
let palindrom = "";
/*
for (let index = word.length - 1; index >=0; index--) {
         palindrom += word[index];
}
         if (palindrom.toLowerCase() === word.toLowerCase()) { // не всегда можно менять переменную по регистру, поэтому см. вариант 2
            console.log("Слово является палиндромом!")
         } else {
            console.log("Слово не является палиндромом!");
        }
 */

        //вариант 2
        for (let index = word.length - 1; index >=0; index--) {
            palindrom += word[index].toLowerCase();
   }
        console.log(word.toLowerCase() === palindrom ? "Слово является палиндромом!" : "Слово не является палиндромом!");


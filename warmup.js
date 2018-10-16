'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if((typeof(a) != 'number') || (typeof(b) != 'number')) {
        throw new TypeError();
    }
    return a+b;
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year){
    if(typeof(year) != 'number') {
        throw new TypeError();
    }
    if(year <= 0) {
        throw new RangeError();
    }
    if(year <= 100) {
        return 1;
    }
    const yearStr = String(year);
    const yearFirstNumber = Number(yearStr.slice(0,-2));
    if(year % 100 == 0) {
        return yearFirstNumber;
    }
    else {
        return yearFirstNumber + 1;
    }
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 552, 255)'
 */
function colorsProblem(hexColor) {
    if(typeof(hexColor) != 'string') { 
        throw new TypeError();
    }
    if(hexColor[0] == '#') { 
        hexColor = hexColor.slice(1);
    }
    if(hexColor.length > 6) { 
        throw new RangeError();
    }
    const red = parseInt(hexColor.substr(0,2), 16);
    const green = parseInt(hexColor.substr(2,2), 16);
    const blue =  parseInt(hexColor.substr(4,2), 16);

    return ('(' + red +', ' + green + ', ' + blue + ')');
}
//console.log(colorsProblem('#0099FF'));
/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if(typeof(n) != 'number') {
        throw new TypeError();
    }
    if((n < 0) || (n % 1 !== 0)) {
        throw new RangeError();
    }
    if((n % 1 !== 0) && (n < 0)) {
        throw new RangeError();
    }
    if(n <= 2 ) {
        return 1;
    }
    let a = 1, b = 1;
    let total = 0;
    for(let i = 2; i < n; i++) {
        total = a + b;
        a = b;
        b = total;
    }
    return total;
}
//console.log(fibonacciProblem(100));
/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (!(matrix instanceof Array) || matrix.some((element) => 
    !(element instanceof Array)) || matrix.some((element) => 
    element.some((subelement) => 
    subelement instanceof Array))){ 
        throw new TypeError();
    }
    const columns = matrix.length;
    const rows = matrix[0].length;
    let newMatrix = [];
    for (let i = 0; i < rows; i++) {
        newMatrix[i] = Array(columns);
    }
    
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            newMatrix[i][j] = matrix[j][i];
        }
    }
    return newMatrix;
}

//console.log(matrixProblem([[1, 2, 3, 1], [4, 5, 6, 2], [7, 8, 9, 3]]));

/**
 * Переводит число в другую систему счисления
 * @param {Number} n Число для перевода в другую систему счисления
 * @param {Number} targetNs Система счисления, в которую нужно перевести (Число от 2 до 36)
 * @throws {TypeError} Когда переданы аргументы некорректного типа
 * @throws {RangeError} Когда система счисления выходит за пределы значений [2, 36]
 * @returns {String} Число n в системе счисления targetNs
 */
function numberSystemProblem(n, targetNs) {
    if(typeof(n) != 'number') { 
        throw new TypeError();
    }
    if(targetNs > 36 || targetNs < 2) {
        throw new RangeError();
    }
    return n.toString(targetNs);
}
//console.log(numberSystemProblem(85, 16));

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */

function phoneProblem(phoneNumber) {
    if(phoneNumber.length != 15){
        return false;
    }
    else if(phoneNumber[9] != '-' || phoneNumber[12] != '-') {
        return false;
    } 
    else if(phoneNumber.substr(0,6) != '8-800-') {
        return false;
    }
    else return true;
}
//console.log(phoneProblem('8-800-333-22-11'));

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if(typeof(text) != "string"){
        throw new TypeError();
    }
    let count = 0;
    for(let i = 0; i < text.length; i++){
        if(text.substr(i,3) == ':-)' || text.substr(i,3) == '(-:') {
            count += 1;
        }
    }
    return count;
}
//console.log(smilesProblem(':-) (-:   :-    (-:)      (-:-)         '))


/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    if(field[0][0] == field [1][1] && field [1][1] == field[2][2]) {
        return field[0][0];
    }
    if(field[2][0] == field[1][1] && field[1][1] == field[0][2]) {
        return field[2][0];
    }
    for(let i = 0; i < 3; i++) {
        if(field[i][0] == field[i][1] && field[i][1] == field[i][2]) {
            return field[i][0];
        }
        if(field[0][i] == field[1][i] && field[1][i] == field[2][i]) {
            return field[0][i];
        }
    }
    return 'draw';
}
//console.log(ticTacToeProblem([['x', 'o', 'x'], ['o', 'x', 'o'], ['o', 'x', 'o']]));

module.exports = {
    abProblem,
    centuryByYearProblem,
    colorsProblem,
    fibonacciProblem,
    matrixProblem,
    numberSystemProblem,
    phoneProblem,
    smilesProblem,
    ticTacToeProblem
};

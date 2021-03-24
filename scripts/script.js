'use strict'

console.log('Калькулятор')

let calc = {
    a: 0,
    b: 0,

    read(a, b) {
        this.a = a;
        this.b = b;
    },

    sum() {
        return this.a + this.b;
    },

    multiply() {
        return this.a * this.b;
    },

    subtraction() {
        return this.a - this.b;
    },

    division() {
        return this.a / this.b;
    }
}

calc.read(3, 6);
console.log('Умножение чисел ' + calc.a + ' на ' + calc.b + ' - ' + calc.multiply());
console.log('Сумма чисел ' + calc.a + ' и ' + calc.b + ' - ' + calc.sum());
console.log('Вычитание чисел ' + calc.a + ' и ' + calc.b + ' - ' + calc.subtraction());
console.log('Деление чисел ' + calc.a + ' на ' + calc.b + ' - ' + calc.division());

console.log('Лестница')

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },

    down() {
        this.step--;
        return this;
    },

    showStep: function () {
        alert(this.step);
        return this;
    }
};

let steps = ladder.up().up().up().up().down().showStep();
console.log(steps);

console.log('Калькулятор через конструктор')

function Calc(a, b) {
    this.a = a;
    this.b = b;

    this.sum = function () {
        return this.a + this.b;
    }

    this.multiply = function () {
        return this.a * this.b;
    }
}

calc = new Calc(5, 10);
console.log('Сумма чисел ' + calc.a + ' и ' + calc.b + ' - ' + calc.sum());
console.log('Умножение чисел ' + calc.a + ' на ' + calc.b + ' - ' + calc.multiply());


function Validator(id) {

    this.id = id;
    let notFilled = []; //хранение массива элементов с именем поля которое не заполнено
    let checked = true
    let information = document.getElementById(id); //получаем форму со всеми полями инпут
    let inputArray = Object.values(information); //приводим к одному объекту все поля инпут
    console.log(inputArray);


    for (let i = 0; i < inputArray.length; i++) { //ищем в каждом инпуте содержимое поля ввода
        if (inputArray[i].value === '' || inputArray[i].value === 'off') {
            alert('пустая строка')
            notFilled.push(inputArray[i].name); //получаем в массив имена инпутов для вывода незаполненых полей
        }

        else if (inputArray[i].value !== '') {
            alert('не пуста')
        }

        else if (notFilled.length >= 1){
            checked = false;
        }
    }

    for (let i = 0; i < notFilled.length; i++) {
        console.log('Не заполнено ' + notFilled[i]);
    }


    function validate(inputArray) {
        for (let i = 0; i < inputArray.length; i++) {
            console.log(inputArray[i]);
        }
    }


    function emptyArrayReturn() {

    }
}

let valid = new Validator('information'); // тут должно быть true

document.addEventListener('DOMContentLoaded', () => {

})
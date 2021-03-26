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


function Validator(form) {

    this.form = document.getElementById(form);
    let notFilled = []; //хранение массива элементов с именем поля которое не заполнено
    let inputs = this.form.querySelectorAll('input') //ищем и получаем все инпуты из формы

    this.validate = function () {

        for (let i = 0; i < inputs.length; i++) { //ищем в каждом инпуте содержимое поля ввода
            if (inputs[i].value.length === 0) {
                notFilled.push(inputs[i].name); //получаем в массив имена инпутов для вывода незаполненых полей
                alert('пусто')
                //return false;

            } else if (inputs[i].length !== 0) {
                alert('не пусто')
                //return true;
            }

        }
        this.emptyInputElements();
    }

    this.emptyInputElements = function () {
        for (let i = 0; i < notFilled.length; i++) {
            alert('Не заполнено ' + notFilled[i]);
        }
    }
}

let validator = new Validator('information');
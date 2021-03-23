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


document.addEventListener('DOMContentLoaded', () => {
    let submit = document.getElementById('submit');
})

function Validator(id) {

    function validate() {

    }

    function emptyArrayReturn() {

    }
}

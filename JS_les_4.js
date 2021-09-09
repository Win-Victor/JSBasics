"use strict"
console.log('*************************', 1, '*************************')
/* 1. (это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
Вам может пригодиться:
 Number.isInteger(value) – функция проверяет, является ли переданное число целым, подробнее здесь https://mzl.la/2XCVSsx
 Math.floor(value) - метод возвращает целое число, которое меньше или равно данному числу (проще говоря округляет в меньшую сторону), подробнее здесь https://mzl.la/2Qx42SO .
 Используйте также остаток от деления на 10, например 123 % 10 будет 3
 Вам также может пригодится делить число на 100 и на 10.
*/


function myNumber(num) {
    // по заданию мне показалось нужна именно функция, а не конструктор.
    if (Number.isInteger(num) && num <= 999 && num >= 0 && Number.isInteger(num)) {
        const obj = {
            units: num % 10,
            tens: Math.floor((num % 100) / 10),
            hundreds: Math.floor(num / 100, 1)
        }
        return console.log(num), obj;
    } else {
        console.log(num + " - данные не соответствуют условию")
        return {};
    }
}


console.log(myNumber('kj'));
console.log(myNumber(-4));
console.log(myNumber(0.5));
console.log(myNumber(110.5));
console.log(myNumber(1000));
console.log(myNumber(0));
console.log(myNumber(1));
console.log(myNumber(20));
console.log(myNumber(357));

console.log('\n*************************', 1.1, '*************************')
/* 1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).
*/

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
}
const product1 = new Product('siemens_a35', 1000);
console.log(product1);

product1.make25PercentDiscount();

console.log(product1);

class ProductClass {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price *= 0.75;
    }
}

const productFromClass = new ProductClass('Nokia_3210', 1200);
console.log(productFromClass);
productFromClass.make25PercentDiscount();
console.log(productFromClass);

console.log('\n*************************', 1.2, '*************************')
/*1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),*/
console.log('\n*************************', "a", '*************************')
/*а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
*/
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (newText) {
    this.text += '\n' + newText;
}

const mail1 = new Post('Tatiana', '\nI am writing to you - what more?\nWhat else can I say?', '23.01.1830');

console.log(mail1)

mail1.edit("Now, I know, in your will\nPunish me with contempt.")
console.log(mail1)


class PostClass {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(newText) {
        this.text += '\n' + newText;
    }
}

const mail2 = new PostClass('Evgeniy', '\nI foresee everything: will offend you\nA sad secret explanation.', '11.03.1830')
console.log(mail2);

mail2.edit('What a bitter contempt\nYour proud look will portray!');

console.log(mail2);

console.log('\n*************************', "б", '*************************')
/* б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.
*/

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
}

AttachedPost.prototype.highlighted = false;

AttachedPost.prototype = Object.create(Post.prototype);

AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

const objAttachedPost = new AttachedPost('Fedor', 'bla-bla-bla', '01.04.2021');

console.log(objAttachedPost);
console.log(objAttachedPost.highlighted);
objAttachedPost.makeTextHighlighted();
console.log(objAttachedPost);
objAttachedPost.edit('new text from method edit');
console.log(objAttachedPost);



class AttachedPostClass extends PostClass {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const objAttachedPostClass = new AttachedPostClass('Alexandr', 'bla-la-la la-la', '01.04.2021');

console.log(objAttachedPostClass);

objAttachedPostClass.makeTextHighlighted();

console.log(objAttachedPostClass);

objAttachedPostClass.edit('new text from method edit')

console.log(objAttachedPostClass);

console.log('\n*************************', 2, '*************************')
/* 2 (это задание не является частью учебной программы, делайте его по желанию). Для игры бродилка (которая
есть в дополнительных видео), добавить возможность ходить по диагонали цифрами 1, 3, 7, 9.
Также необходимо сделать так, чтобы пользователь не мог совершить шаг в стенку, т.е. при направлении в стенку
и игрок оставался на том же месте где стоял.
*/

// оставил для перспективного разаития.

console.log('\n*************************', 3, '*************************')
/* 3 (это задание не является частью учебной программы, делайте его по желанию). На базе игры (приняв за
пример), созданной в дополнительных видео, реализовать игру «Кто хочет стать миллионером?».
Т.е. у вас должен быть главный объект, содержащий всю логику игры, который будет иметь методы, например
метод run, возможно метод init и т.д.
В игре должны быть заранее подготовлены список вопросов и ответов (как минимум 5 вопросов).
Игра должна приветствовать пользователя, после чего задавать вопросы пользователю и предлагать варианты
ответов в виде теста, например:
Сколько букв в слове "привет":
a. Пять.
b. Шесть.
c. Семь.
d. Куда я попал?
Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.
По окончании игры, когда было задано 5 вопросов, вы должны сообщить пользователю его счет и предложить
сыграть снова.
Также должна быть возможность выхода из игры заранее, если пользователю надоело играть.
*/

// оставил для перспективного разаития.

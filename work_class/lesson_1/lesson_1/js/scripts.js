// Комментарий в JS. Комментирование одной строки

/* Многострочное
комментирование
в JS */

/* Для работы с JS используем
инструмент для разработчика в бразуере (F12, Ctrl+Shift+I)
и функцию для вывода в консоль conole.log(); */

// Вывод "Привет Мир!" в консоль
console.log('Привет Мир!');


// Переменные
// ----------------------------------------------------------

/* Имя переменной сл. давать латинскими буквами,
а также может состоять из цифр, символов $ и _.
Первый символ не должен быть цифрой. */

// Переменная объявляется (создается) с помощью var, но есть и другие способы (const, let)
var test123; // пустая переменная
var message;
var message2 = "Значение переменной"; // переменная со значением
var $ = 1; // объявили переменную с именем '$'
var _ = 2; // переменная с именем '_'

// сложные или длинные имена переменных нужно писать в стиле "CamelCase"
var myFirstName;

var a;
a = 12; // сохраним в переменную a значение 12
console.log(a); // выведем значение переменной a

var b = 34; // можно сохранять значение в переменную при ее объявлении
console.log(b);

// можно создавать сразу несколько переменных через запятую
var
	c = 0,
	d = 1,
	e,
	f = 'Какая-то строка';

// переменным можно присваивать значения других переменных (копировать)
var g = 5, z = g;
console.log(z);

// так тоже можно присваивать - присваивание происходит справа на лево
var y = 0, p = 3, x = y = p;
console.log(x); // 3

p = 22; // переменные можно перезаписывать
console.log(x = y = p); // и присвоить заново прямо в функции


// Типы данных (всего 6 типов)
// ----------------------------------------------------------

/* 1. Число. Может принимать целые числа,
числа с плавающей точкой, значения Infinity (бесконечность) и NaN (ошибка) */
var n = 123;
n = 12.345;
console.log(n); // 12.345
console.log(1 / 0); // Infinity
console.log( -1 / 0 ); // -Infinity (минус бесконечность)
console.log("нечисло" * 2); // NaN
console.log(0 / 0); // NaN (ошибка)

/* 2. Строка. */

var str = "Мама мыла раму";
str = 'Одинарные кавычки тоже подойдут';
console.log(str);

/* 3. Логический тип (булевый): true (истина) и false (ложь) */
var checked = true; // поле формы помечено галочкой
checked = false; // поле формы не содержит галочки
console.log(checked);

/* 4. Специальное значение null (ничего, неизвестное значение). */
var age = null;
console.log(age);

/* 5. Специальное значение undefined (значение не присвоино, но переменная есть). */
var x;
console.log(x); // выведет "undefined"
x = undefined; // undefined можно присваивать, но так делается редко

/* 6. Объекты. Сложный тип, который разберем подробнее позже. */
var user = { name: "Вася" };
console.log(user); // выведет информацию об объекте
console.log(user.name); // выведет информацию параметра объекта


/* Оператор typeof - возвращает тип аргумента.
Результатом typeof является строка, содержащая тип. */
var a = 45,
	b = 32.22222,
	c = 'Строка в одинарных кавычках',
	d = "Стркоа в двойных кавычках",
	e = true,
	f = null, // ошибка JS - тип не null, а object
	g,
	car = {
		name: "Ford",
		model: "Mondeo",
		type: "car"
	},
	arr = [], // массив
	h = function() {}; // тип function - особый тип

// Вывод типов объявленных переменных
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof car);
console.log(typeof arr);
console.log(typeof h);
"use strict";
alert('2. Объявить две переменные: admin и name. Записать в name строку "Василий". Скопировать значение из name в admin. Вывести в консоль переменную admin (должно вывести "Василий").');

let admin;
let name;
name = 'Василий';
admin = name;
console.log("admin == " + admin);
alert('let admin;\nlet name;\nname = \"Василий";\nadmin = name;\nconsole.log("admin == " + admin);');

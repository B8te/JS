"use strict";

// Возможная задача на собеседовании

// 1) Обычная функция: this = window, но если use strict = undefined

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this); //Что выведет здесь код? (undefined), Какой контекст вызова у sum?
//         return this.a + this.b; //Будет ли работать данная комбинация, и если нет, то как ее исправить?
//         // Чтобы сумма работала необходимо использовать замыкание функции, просто убрать this
//     }

//     console.log(sum());
// }

// showThis(4, 5);



// 2) Контекст у методов объекта - сам объект


// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this); // 1 пункт
//         }
//         shout();
//     }
// };

// obj.sum();

// 3)

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}

let ivan = new User('Ivan', 23);


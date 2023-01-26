"use strict";

// 1. Какое будет выведено значение:
let x = 5;
alert(x++); //5

// 2. Чему равно такое выражение: [] + false - null + true;?
console.log([] + false); //false
console.log([] + false - null); //NaN
console.log([] + false - null + true); //NaN

// 3. Что выведет данный код:
let y = 1;
let x = y = 2;
alert(x); // 2

// 4. Чему равна сумма: [] + 1 + 2?
console.log([] + 1 + 2); //12

// 5. Что выведет код:
alert("1"[0]); //1

// 6. Чему равно: 2 && 1 && null && 0 && undefined?
console.log (2 && 1 && null && 0 && undefined); //null

// 7. Есть ли разница между выражениями: !!(a && b) и (а && b)?
console.log(!!(1 && 2) === (1 && 2)); //false

// 8. Что выведет этот код: 
alert (null || 2 && 3 || 4); //3

// 9. Правда ли что a === b?
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a === b); //false

// 10. Что выведет этот код:
alert(+"Infinity"); // Infinity

// 11. Верно ли сравнение : "Ежик" > "яблоко"?
console.log("Ежик" > "яблоко"); //false

// 12. Чему равно 0 || "" || 2 || undefined || true || false?
console.log( 0 || "" || 2 || undefined || true || false);
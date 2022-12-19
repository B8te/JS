"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a, b){
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(10, 6));
console.log(calc(12, 7));

// Function Declaration
function ret() {
    let num = 50;
    return num;
}

const anNum = ret();
console.log(anNum);

// Function Expression
const logger = function(){
    console.log("Hello");
};

logger();

//Стрелочная функция
const prim = (a,b) => a + b;
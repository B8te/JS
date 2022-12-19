"use strict";

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 55);

for (let i = 1; i < 10; i++) {
    if(i === 6){
        // break;
        continue;
    }
    console.log(i);
}

for (let i = 0; i < 3; i++){
    console.log(i);
    for (let j = 0; j < 3; j++){
        console.log(j);
    }
}

let result = '';
const len = 7;

for (let i = 1; i < len; i++){

    for (let j = 0; j < i; j++){
        result += '*';
    }

    result += '\n';
}

console.log(result);

first: for (let i = 0; i < 3; i++){
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++){
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++){
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}

//first task
for (let i = 5; i < 11; i++){
    console.log(i);
}

//second task

for (let i = 20; i >=10; i--){
    if (i === 13) {
        break;
    }
    console.log(i);
}

// third task

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0){
        console.log(i);
    }
}

//fourth task
let i = 2;

while(i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}

//fifth task

const arrayOfNumbers = [];
for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i-5] = 5;
}
console.log(arrayOfNumbers);
return arrayOfNumbers;
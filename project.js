// task1(example1)
// let x1 =2;
// let y1 =3;
// let x2 =10;
// let y2 =5;

// let product = (x2 - x1) * (y2 - y1);
// console.log(product)

// // example2
// let a1 =2;
// let b1 =3;
// let a2 =10;
// let b2 =5;

// let product2 = (x2 - x1) * (y2 - y1);
// console.log(product2)




// task2

// function franctional(a, b, n){
//     const franctionalA = Math.floor((a % 1) * Math.pow(10, n));
//     const franctionalB = Math.floor((b % 1) * Math.pow(10, n));

//     console.log(`Дробные части a:`, franctionalA);
//     console.log(`дробные части b:`, franctionalB);

//     console.log(`Проверка:`);

//     console.log(`${franctionalA} < ${franctionalB}: ${franctionalA < franctionalB}`)
//     console.log(`${franctionalA} > ${franctionalB}: ${franctionalA > franctionalB}`);
//     console.log(`${franctionalA} <= ${franctionalB}: ${franctionalA <= franctionalB}`);
//     console.log(`${franctionalA} >= ${franctionalB}: ${franctionalA >= franctionalB}`);
//     console.log(`${franctionalA} === ${franctionalB}: ${franctionalA === franctionalB}`);
//     console.log(`${franctionalA} not= ${franctionalB}: ${franctionalA !== franctionalB}`);
// }

// franctional(13.123456789, 2.123, 5);
// franctional(13.890123, 2.891564, 2);
// franctional(13.890123, 2.891564, 3);



// task3
// function franction(a, b, n){
//     const franctionA = Math.floor((a % 1) * Math.pow(10, n));
//     const franctionB = Math.floor((b % 1) * Math.pow(10, n));

//     console.log('Дробные части a:', franctionA);
//     console.log('Дробные части b:', franctionB);

//     console.log('Сравнение');
//     console.log(`${franctionA} > ${franctionB}: ${franctionA > franctionB}`);
//     console.log(`${franctionA} < ${franctionB}: ${franctionA < franctionB}`);
//     console.log(`${franctionA} >= ${franctionB}: ${franctionA >= franctionB}`);
//     console.log(`${franctionA} <= ${franctionB}: ${franctionA <- franctionB}`);
//     console.log(`${franctionA} === ${franctionB}: ${franctionA === franctionB}`);
//     console.log(`${franctionA} not= ${franctionB}: ${franctionA !== franctionB}`);
// }

// franction(13.123456789, 2.123, 5);
// franction(13.890123, 2.891564, 2);
// franction(13.890123, 2.891564, 3);





// next block

// task1

// const password = '-_A'

// if (password.length >= 4 && (password.includes("-") || password.includes("_"))) {
//     console.log('Пароль подходит') 
// } else {
//     console.log("Пароль не подходит")
// }

// task2

// let userName = "иВАН"
// let userSurname = "иВаНОВ"

// function formatletter(str){
//     if (str.length === 0) return str;
//     const firstletter = str.substring(0, 1).toUpperCase();
//     const restofstring = str.substring(1).toLowerCase();
//     return firstletter + restofstring
// }

// const formattedName = formatletter(userName);
// const formattedSurname = formatletter(userSurname);

// const nameMessage = (userName === formattedName) ? "Имя было изменено" : "Имя осталось без изменений"
// const surnameMessage = (userSurname === formattedSurname) ? "Фамилия была изменена" : "Фамилия осталась без изменений"

// console.log("Форматированное имя: " + formattedName);
// console.log("Форматированная фамилия: " + formattedSurname);
// console.log(nameMessage);
// console.log(surnameMessage);   


// task3


// function checkRemainder(number, div){
//     const remainder = number % div;
//     if (remainder === 0){
//         console.log("число чётное");
//     } else {
//         console.log("число нечётное")
//     }
// }

// checkRemainder(10, 2);
// checkRemainder(10, 3); 
// checkRemainder(15, 5); 
// checkRemainder(7, 4);


// next block

// task1


// function myArray(count, m, n){
//     const array = [];

//     let min = Math.min(m, n);
//     let max = Math.max(m, n);

//     for (let i = 0; i < count; i++) {
//         let randomNum = Math.floor(Math.random() * (m - n + 1)) + n;
//         array.push(randomNum)
//     }

//     return array
// }

// const count = 10;
// const m = -5;
// const n = 5;
// const randomNum = myArray(count, m, n);
// console.log(randomNum);


// task2

function OrderedArray(count) {
    const Array = [];
    for (let i = 1; i <= count; i++) {
        Array.push(i);
    }
    return Array;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const count = 10; 
const orderedArray = OrderedArray(count);
shuffleArray(orderedArray);
console.log(orderedArray);



// task3




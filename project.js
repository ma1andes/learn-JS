








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




function randomNum(m, n) {
    if (n > m) { 
        [n, m] = [m, n];
    }
    const RandomNum1 = Math.floor(Math.random() * (n - m)) + n;
    const RandomNum2 = Math.floor(Math.random() * (m - n)) + n;

    return [RandomNum1, RandomNum2]
}

let randomNum1 = randomNum(1, 10);
let randomNum2 = randomNum(1, 10);

console.log(`${randomNum1} < ${randomNum2}: ${randomNum1 < randomNum2}`)
console.log(`${randomNum1} > ${randomNum2}: ${randomNum1 > randomNum2}`)
console.log(`${randomNum1} <= ${randomNum2}: ${randomNum1 <= randomNum2}`)
console.log(`${randomNum1} >= ${randomNum2}: ${randomNum1 >= randomNum2}`)
console.log(`${randomNum1} === ${randomNum2}: ${randomNum1 === randomNum2}`)
console.log(`${randomNum1} not= ${randomNum2}: ${randomNum1 !== randomNum2}`)








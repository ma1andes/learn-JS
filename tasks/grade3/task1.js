function myArray(count, m, n){
    const array = [];

    let min = Math.min(m, n);
    let max = Math.max(m, n);

    for (let i = 0; i < count; i++) {
        let randomNum = Math.floor(Math.random() * (m - n + 1)) + n;
        array.push(randomNum)
    }

    return array
}

const count = 10;
const m = -5;
const n = 5;
const randomNum = myArray(count, m, n);
console.log(randomNum);
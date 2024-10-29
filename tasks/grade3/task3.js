function findIndex(array, n) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            return i;
        }
    }
    return "Элемент не найден";
}

const array1 = [2,5,1,3,4];
const n1 = 3;
console.log(`Индекс элемента ${n1} = ${findIndex(array1, n1)}`);


const array2 = [5,1,3,2,7,6,4];
const n2 = 1;
console.log(`Индекс элемента ${n2} = ${findIndex(array2, n2)}`);


const array3 = [2,1,3];
const n3 = 7;
console.log(findIndex(array3, n3));

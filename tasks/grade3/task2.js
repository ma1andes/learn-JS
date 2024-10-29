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

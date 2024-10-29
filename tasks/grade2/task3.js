function checkRemainder(number, div){
    const remainder = number % div;
    if (remainder === 0){
        console.log("число чётное");
    } else {
        console.log("число нечётное")
    }
}

checkRemainder(10, 2);
checkRemainder(10, 3); 
checkRemainder(15, 5); 
checkRemainder(7, 4);
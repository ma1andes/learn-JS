const array = []
function getAge(birthYear) {
    let today = new Date();
    let year = today.getFullYear();
    const age = year - birthYear;
    return age;
}

console.log(getAge(1998));
console.log(getAge(1991));
console.log(getAge(2007));
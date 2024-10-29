let userName = "иВАН"
let userSurname = "иВаНОВ"

function formatletter(str){
    if (str.length === 0) return str;
    const firstletter = str.substring(0, 1).toUpperCase();
    const restofstring = str.substring(1).toLowerCase();
    return firstletter + restofstring
}

const formattedName = formatletter(userName);
const formattedSurname = formatletter(userSurname);

const nameMessage = (userName === formattedName) ? "Имя было изменено" : "Имя осталось без изменений"
const surnameMessage = (userSurname === formattedSurname) ? "Фамилия была изменена" : "Фамилия осталась без изменений"

console.log("Форматированное имя: " + formattedName);
console.log("Форматированная фамилия: " + formattedSurname);
console.log(nameMessage);
console.log(surnameMessage);   
function getOlderUserArray(users) {
    let getOlderUser = users[0]

    for (let i = 1; i < users.length; i++){ 
        if (users[i].age > getOlderUser.age) {
            getOlderUser = users[i]
        }
    }
    return getOlderUser.name
}
    

let allUsers = [
    { name: 'Валя', age: 11 },
    { name: 'Таня', age: 24 },
    { name: 'Рома', age: 21 },
    { name: 'Надя', age: 34 },
    { name: 'Антон', age: 7 }
];

let result = getOlderUserArray(allUsers);
console.log(result);
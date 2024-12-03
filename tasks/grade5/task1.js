function getOlderUser(user1, user2) { 
    return user1.age > user2.age ? user1.name : user2.name;
}

let user1 = { 
    name: 'Оля',
    age: 17
}

let user2 = {
    name: "Alyona",
    age: 18
}

let result = getOlderUser(users);
console.log(result);
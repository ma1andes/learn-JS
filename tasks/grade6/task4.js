

function createStudensList(listArr) {
    const list = document.createElement('ul');
    list.className = 'list';

    listArr.forEach(student => {
        let li = document.createElement('li');

        const nameHtml = document.createElement("h2");
        nameHtml.innerText = 'Имя: ' + student.name;

        const ageHtml = document.createElement("span");
        ageHtml.innerText = 'Возраст: ' + student.age;

        li.appendChild(nameHtml);
        li.appendChild(ageHtml);

        list.appendChild(li);
    });

    document.body.appendChild(list);
}

const listArr = [
    {name: 'Валя', age: 11},
    {name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
]

document.getElementById('button').addEventListener('click', () => createStudensList(listArr))



function createStudentCard(studentObj) {
    // Деструктуризация объекта
    const {name, age} = studentObj;

    // Создание корневого элемента div
    const card = document.createElement('div');
    card.className = 'student-card';

    // Создание заголовка h2 с именем
    const nameTitle = document.createElement('h2');
    nameTitle.textContent = name;

    // Создание span с возрастом
    const ageSpan = document.createElement('span');
    ageSpan.textContent = `Возраст: ${age} лет`;

    // Добавление дочерних элементов в карточку
    card.appendChild(nameTitle);
    card.appendChild(ageSpan);

    // Добавление карточки в body
    document.body.appendChild(card);
}

// Пример вызова функции
const studentObj1 = {name:'Игорь', age: 17};
const studentObj2 = {name:'Анна', age: 20};

createStudentCard(studentObj1);
createStudentCard(studentObj2);
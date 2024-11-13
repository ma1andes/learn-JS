function createStudentCard(name, age) { 
    const card = document.createElement('div');
    card.classList.add('student-card');

    const nameElement = document.createElement('h2');
    nameElement.textContent = name;

    const ageElement = document.createElement("span");
    ageElement.textContent = `Возраст: ${age} лет`;

    card.appendChild(nameElement);
    card.appendChild(ageElement);

    document.body.appendChild(card);
}

createStudentCard('Anna', 17);
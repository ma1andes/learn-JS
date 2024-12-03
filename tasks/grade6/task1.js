function createStudentCard(name, age) { 
    const card = document.createElement('div');
    card.classList.add('student-card');

    const nameTitle = document.createElement('h2');
    nameTitle.textContent = name;

    const ageSpan = document.createElement("span");
    ageSpan.textContent = `Возраст: ${age} лет`;

    card.appendChild(nameTitle);
    card.appendChild(ageSpan);

    document.body.appendChild(card);
}

createStudentCard('Anna', 17);
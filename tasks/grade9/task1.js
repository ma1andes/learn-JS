  // Массив студентов
  const students = [];
  const table = document.getElementById('students-table');
  const form = document.getElementById('add-student-form');
  const errorMessages = document.getElementById('error-messages');
  
  // Функция обновления таблицы
  function renderTable(data) {
    table.innerHTML = '';
    data.forEach(student => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.surname} ${student.name} ${student.patronymic}</td>
        <td>${student.faculty}</td>
        <td>${student.birthdate.toLocaleDateString()} (${new Date().getFullYear() - student.birthdate.getFullYear()} лет)</td>
        <td>${student.startYear}-${student.startYear + 4} (${new Date().getFullYear() - student.startYear > 4 ? 'закончил' : `${new Date().getFullYear() - student.startYear} курс`})</td>
      `;
      table.appendChild(row);
    });
  }

  // Валидация формы
  function validateForm(data) {
    const errors = [];
    const { name, surname, patronymic, birthdate, startYear, faculty } = data;

    if (!name.trim()) errors.push('Имя обязательно.');
    if (!surname.trim()) errors.push('Фамилия обязательна.');
    if (!patronymic.trim()) errors.push('Отчество обязательно.');
    if (!birthdate || birthdate < new Date(1900, 0, 1) || birthdate > new Date()) errors.push('Дата рождения некорректна.');
    if (!startYear || startYear < 2000 || startYear > new Date().getFullYear()) errors.push('Год начала некорректен.');
    if (!faculty.trim()) errors.push('Факультет обязателен.');

    return errors;
  }

  // Обработчик отправки формы
  form.addEventListener('submit', event => {
    event.preventDefault();
    errorMessages.textContent = '';

    const newStudent = {
      name: document.getElementById('input-name').value,
      surname: document.getElementById('input-surname').value,
      patronymic: document.getElementById('input-patronymic').value,
      birthdate: document.getElementById('input-birthdate').valueAsDate,
      startYear: parseInt(document.getElementById('input-start-year').value, 10),
      faculty: document.getElementById('input-faculty').value
    };

    const errors = validateForm(newStudent);
    if (errors.length) {
      errorMessages.textContent = errors.join(' ');
      return;
    }

    students.push(newStudent);
    renderTable(students);
    form.reset();
  });

  // Инициализация
  renderTable(students);
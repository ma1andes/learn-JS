// Массив студентов
const students = [];
const table = document.getElementById('students-table');
const form = document.getElementById('add-student-form');
const errorMessages = document.getElementById('error-messages');

// Элементы фильтра
const filterName = document.getElementById('filter-name');
const filterFaculty = document.getElementById('filter-faculty');
const filterStartYear = document.getElementById('filter-start-year');
const filterEndYear = document.getElementById('filter-end-year');

// Функция обновления таблицы
function renderTable(data) {
  table.innerHTML = '';
  data.forEach(student => {
    const currentYear = new Date().getFullYear();
    const yearsSinceStart = currentYear - student.startYear;
    const course =
      yearsSinceStart > 4 ? 'закончил' : `${yearsSinceStart === 0 ? 1 : yearsSinceStart} курс`;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.surname} ${student.name} ${student.patronymic}</td>
      <td>${student.faculty}</td>
      <td>${student.birthdate.toLocaleDateString()} (${currentYear - student.birthdate.getFullYear()} лет)</td>
      <td>${student.startYear}-${student.startYear + 4} (${course})</td>
    `;
    table.appendChild(row);
  });
}

// Функция фильтрации студентов
function filterStudents() {
  const filteredStudents = students.filter(student => {
    const nameFilter = filterName.value.trim().toLowerCase();
    const facultyFilter = filterFaculty.value.trim().toLowerCase();
    const startYearFilter = parseInt(filterStartYear.value, 10);
    const endYearFilter = parseInt(filterEndYear.value, 10);

    const nameMatches =
      nameFilter === '' ||
      `${student.name} ${student.surname} ${student.patronymic}`.toLowerCase().includes(nameFilter);
    const facultyMatches =
      facultyFilter === '' || student.faculty.toLowerCase().includes(facultyFilter);
    const startYearMatches =
      isNaN(startYearFilter) || student.startYear === startYearFilter;
    const endYearMatches =
      isNaN(endYearFilter) || student.startYear + 4 === endYearFilter;

    return nameMatches && facultyMatches && startYearMatches && endYearMatches;
  });

  renderTable(filteredStudents);
}

// Валидация формы
function validateForm(data) {
  const errors = [];
  const { name, surname, patronymic, birthdate, startYear, faculty } = data;

  const currentYear = new Date().getFullYear();

  if (!name.trim()) errors.push('Имя обязательно.');
  if (!surname.trim()) errors.push('Фамилия обязательна.');
  if (!patronymic.trim()) errors.push('Отчество обязательно.');
  if (!birthdate || birthdate < new Date(1900, 0, 1) || birthdate > new Date()) {
    errors.push('Дата рождения некорректна.');
  } else if (birthdate.getFullYear() + 17 > startYear) {
    errors.push('Год начала обучения не может быть раньше, чем студенту исполнится 17 лет.');
  }
  if (!startYear || startYear < 2000 || startYear > currentYear) {
    errors.push('Год начала некорректен.');
  }
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

// Привязка фильтрации к событиям ввода
filterName.addEventListener('input', filterStudents);
filterFaculty.addEventListener('input', filterStudents);
filterStartYear.addEventListener('input', filterStudents);
filterEndYear.addEventListener('input', filterStudents);

// Инициализация
renderTable(students);

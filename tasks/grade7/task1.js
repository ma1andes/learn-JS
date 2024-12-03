function createTodoApp(container, title, listName) {
    const todoListKey = listName || 'default-todo-list';

    let savedTasks = getFromLocalStorage(todoListKey) || [];

    const appTitle = document.createElement('h1');
    appTitle.textContent = title;
    appTitle.classList.add('text-center', 'mb-4');

    const form = document.createElement('form');
    form.classList.add('mb-3', 'd-flex', 'gap-2');
    const input = document.createElement('input');
    input.classList.add('form-control');
    input.type = 'text';
    input.placeholder = 'Введите название дела';
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить';
    button.disabled = true;
    form.append(input, button);

    const list = document.createElement('ul');
    list.classList.add('list-group');

    // Отрисовка сохраненных задач
    savedTasks.forEach(task => {
        const taskElement = createTaskElement(task, savedTasks, todoListKey);
        list.append(taskElement);
    });

    // Добавление новой задачи
    form.addEventListener('submit', event => {
        event.preventDefault();
        if (!input.value.trim()) return;

        const newTask = {
            id: generateId(savedTasks),
            name: input.value.trim(),
            done: false,
        };

        const taskElement = createTaskElement(newTask, savedTasks, todoListKey);
        savedTasks.push(newTask);
        list.append(taskElement);
        input.value = '';
        button.disabled = true;

        saveToLocalStorage(todoListKey, savedTasks);
    });

    input.addEventListener('input', () => {
        button.disabled = !input.value.trim();
    });

    // Обработка событий storage для синхронизации между вкладками
    window.addEventListener('storage', (event) => {
        if (event.key === todoListKey) {
            const updatedTasks = getFromLocalStorage(todoListKey);
            if (updatedTasks) {
                savedTasks = updatedTasks;
                // Перерисовка списка задач
                list.innerHTML = '';
                savedTasks.forEach(task => {
                    const taskElement = createTaskElement(task, savedTasks, todoListKey);
                    list.append(taskElement);
                });
            }
        }
    });

    container.append(appTitle, form, list);
}

function createTaskElement(task, tasks, storageKey) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

    const taskName = document.createElement('span');
    taskName.textContent = task.name;
    if (task.done) taskName.classList.add('text-decoration-line-through');

    const btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group', 'btn-group-sm');
    const toggleButton = document.createElement('button');
    toggleButton.classList.add('btn', 'btn-success');
    toggleButton.textContent = '✔️';
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = '❌';

    btnGroup.append(toggleButton, deleteButton);

    taskItem.append(taskName, btnGroup);

    toggleButton.addEventListener('click', () => {
        task.done = !task.done;
        taskName.classList.toggle('text-decoration-line-through', task.done);
        saveToLocalStorage(storageKey, tasks);
    });

    deleteButton.addEventListener('click', () => {
        const taskIndex = tasks.findIndex(t => t.id === task.id);
        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
            taskItem.remove();
            saveToLocalStorage(storageKey, tasks);
        } else {
            console.warn('Task ID not found. Synchronizing LocalStorage.');
            saveToLocalStorage(storageKey, tasks); // Обновляем localstorage
        }
    });

    return taskItem;
}

function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        if (data) {
            const parsedData = JSON.parse(data);
            if (Array.isArray(parsedData)) {
                return parsedData.filter(task => 
                    task.id != null && 
                    typeof task.name === 'string' && 
                    typeof task.done === 'boolean'
                ); // Валидация данных
            }
        }
        return [];
    } catch (e) {
        console.error('Не удалось проанализировать данные', e);
        return []; // Если данные повреждены => возвращаем пустой массив
    }
}

function generateId(tasks) {
    const validIds = tasks
        .map(task => task.id)
        .filter(id => typeof id === 'number' && id > 0); // Фильтрация корректных id
    return validIds.length ? Math.max(...validIds) + 1 : 1;
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    createTodoApp(document.getElementById('todo-app'), 'Мои дела', 'my-todo-list');
});

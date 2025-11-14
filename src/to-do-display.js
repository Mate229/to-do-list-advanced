import { Todo, myToDos, myCategories } from "./to-do";
const defaultDialog = document.querySelector('#default');

const form = defaultDialog.querySelector("form");

export function showDefaultDialog() {
    defaultDialog.showModal();
};

export function closeDefaultDialog() {
    defaultDialog.close();
};

export function displayTodo(list) {

    document.querySelector('#todoContent').innerHTML = '';

    const content = document.querySelector('#content');
    const addTaskButton = document.querySelector('#addToDefault');

    const taskCardList = document.querySelectorAll(`[todo-id]`);
    taskCardList.forEach(card => {
        const cardId = card.getAttribute('todo-id');
        if (list.findIndex(obj => obj.id === cardId) === -1) {
            card.remove();
        }
    })

    for (let todo of list) {
        if (document.querySelector(`[todo-id="${todo.id}"]`) === null) {
            const card = document.createElement('div');

            const cardTitle = document.createElement('h2');
            cardTitle.textContent = todo.title;

            const cardDate = document.createElement('p');
            cardDate.textContent = todo.dueDate;

            card.classList.add(todo.priority, 'taskCard');
            card.setAttribute('todo-id', todo.id);

            card.append(cardTitle, cardDate);

            content.insertBefore(card, addTaskButton)
        } else {
            const card = document.querySelector(`[todo-id="${todo.id}"]`);
            card.classList.remove('high');
            card.classList.remove('medium');
            card.classList.remove('low');

            card.classList.add(todo.priority);

            card.querySelector('h2').textContent = todo.title;
            card.querySelector('p').textContent = todo.dueDate;

            if (todo.completed) {
                content.insertBefore(card, addTaskButton);
            }

        }
    }
};

export function submitDefaultDialog(e) {
    e.preventDefault();

    const taskTitle = document.querySelector('#title');
    const taskdesc = document.querySelector('#desc');
    const taskDueDate = document.querySelector('#dueDate');
    const taskPriority = document.querySelector('#priority');

    const newTask = new Todo(taskTitle.value, taskdesc.value, taskDueDate.value, taskPriority.value);
    newTask.addToList();

    if (document.querySelector('.active') === null) {
        displayTodo(myToDos);
    } else {
        const activeCategoryId = document.querySelector('.active').getAttribute('project-id');

        console.log(activeCategoryId);
        
        const activeCategoryIndex = myCategories.findIndex(obj => obj.id === activeCategoryId);

        const activeCategory = myCategories[activeCategoryIndex];

        const activeCategoryData = activeCategory.data;

        newTask.addToCategory(activeCategoryData);

        displayTodo(activeCategoryData);
    }
    
    closeDefaultDialog();

    form.reset();

};
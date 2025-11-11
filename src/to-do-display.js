import { Todo, myToDos } from "./to-do";
const defaultDialog = document.querySelector('#default');

const form = document.querySelector("form");
const submitBtn = document.querySelector("#submit-btn");

export function showDefaultDialog() {
    defaultDialog.showModal();
};

export function closeDefaultDialog() {
    defaultDialog.close();
}

export function displayTodo() {
    const content = document.querySelector('#content');
    const addTaskButton = document.querySelector('#addToDefault');

    for (let todo of myToDos) {
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

    displayTodo();
    closeDefaultDialog();

    form.reset();

};
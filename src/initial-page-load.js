import { myToDos } from "./to-do";

export default function() {
    const content = document.querySelector('#content');

    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add Task';
    addTaskButton.id = 'addToDefault';

    content.appendChild(addTaskButton)

    for (let todo of myToDos) {
        const card = document.createElement('div');

        const cardTitle = document.createElement('h2');
        cardTitle.textContent = todo.title;

        const cardDate = document.createElement('p');
        cardDate.textContent = todo.dueDate;

        card.classList.add(todo.priority);
        card.setAttribute('todo-id', todo.id);

        card.append(cardTitle, cardDate);

        content.insertBefore(card, addTaskButton)
    }
};
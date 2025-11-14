import { displayTodo } from "./to-do-display"; 
import { myToDos } from "./to-do";

export default function() {
    const content = document.querySelector('#content');

    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add Task';
    addTaskButton.id = 'addToDefault';

    content.appendChild(addTaskButton);

    displayTodo(myToDos);

};
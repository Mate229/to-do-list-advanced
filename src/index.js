import './style.css';
import initialPageLoad from './initial-page-load';
import { showDefaultDialog, closeDefaultDialog, submitDefaultDialog, displayTodo } from './to-do-display';
import { displayTodoContent } from './display-edit-single-todo';
import { createNewProject, displayProjectContent } from './display-projects';
import { myToDos } from './to-do';

initialPageLoad();
displayTodoContent();
createNewProject();
displayProjectContent();

const defaultButton = document.querySelector('#addToDefault');
defaultButton.addEventListener('click', showDefaultDialog);

const cancelDefaultBtn = document.querySelector("#cancel-default-btn");
cancelDefaultBtn.addEventListener('click', closeDefaultDialog);

const submitDefaultBtn = document.querySelector("#submit-default-btn");
submitDefaultBtn.addEventListener('click', submitDefaultDialog);

const myTasksD = document.querySelector('#myTasksD');
myTasksD.addEventListener('click', () => {
    displayTodo(myToDos);
    if (document.querySelector('.active') !== null) {
        document.querySelector('.active').classList.remove('active')
    }
})
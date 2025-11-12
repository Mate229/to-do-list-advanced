import './style.css';
import initialPageLoad from './initial-page-load';
import { showDefaultDialog, closeDefaultDialog, submitDefaultDialog } from './to-do-display';
import { displayTodoContent } from './display-edit-single-todo';
import { myToDos } from './to-do';

initialPageLoad();
displayTodoContent();

const defaultButton = document.querySelector('#addToDefault');
defaultButton.addEventListener('click', showDefaultDialog);

const cancelDefaultBtn = document.querySelector("#cancel-default-btn");
cancelDefaultBtn.addEventListener('click', closeDefaultDialog);

const submitDefaultBtn = document.querySelector("#submit-default-btn");
submitDefaultBtn.addEventListener('click', submitDefaultDialog);
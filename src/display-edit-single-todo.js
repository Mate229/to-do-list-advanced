import { saveCategories, saveTodos } from "./storage";
import { myToDos } from "./to-do";
import { displayTodo } from "./to-do-display";



export function displayTodoContent() {
    // const todoCards = document.querySelectorAll('.taskCard');

    const content = document.querySelector('#content');
    const todoContent = document.querySelector('#todoContent');
    
    content.addEventListener('click', (e) => {

        const card = e.target.closest('.taskCard');

        if (!card) return;

        todoContent.innerHTML = '';

        const todoIndex = myToDos.findIndex(obj => obj.id === card.getAttribute('todo-id'));

        const thisTodo = myToDos[todoIndex];

        const thisTodoTitle = document.createElement('h1');
        thisTodoTitle.textContent = thisTodo.title;

        const thisTodoDesc = document.createElement('div');
        thisTodoDesc.innerHTML = `<h3>Description</h3> <p>${thisTodo.desc}</p>`;

        const thisTodoPriority = document.createElement('p');
        thisTodoPriority.textContent = `Priority: ${thisTodo.priority}`;

        const thisTodoDueDate = document.createElement('h3');
        thisTodoDueDate.textContent = `Due Date: ${thisTodo.dueDate}`;

        const thisTodoStatus = document.createElement('h4');
        thisTodoStatus.textContent = 'This task is Completed! Well Done!';
        thisTodoStatus.classList.add('status');

        const thisTodoDelete = document.createElement('button');
        thisTodoDelete.textContent = 'Delete';
        thisTodoDelete.addEventListener('click', () => {
            if (todoIndex !== -1) {
                myToDos.splice(todoIndex, 1);
                saveTodos();
                saveCategories();
            };
            card.remove();
            todoContent.innerHTML = '';
        })

        const thisTodoEdit = document.createElement('button');
        thisTodoEdit.textContent = 'Edit Task';
        thisTodoEdit.addEventListener('click', () => {
            const editDialog = document.querySelector('#edit');
            editDialog.showModal();

            const editForm = editDialog.querySelector('form');
            const editTitle = editDialog.querySelector('#edit-title');
            editTitle.value = thisTodo.title;

            const editDesc = editDialog.querySelector('#edit-desc');
            editDesc.value = thisTodo.desc;

            const editDueDate = editDialog.querySelector('#edit-dueDate');
            editDueDate.value = thisTodo.dueDate;

            const editPriority = editDialog.querySelector('#edit-priority');
            editPriority.value = thisTodo.priority;

            editDialog.querySelector('#cancel-edit-btn').addEventListener('click', (e) => {
                e.preventDefault();
                editDialog.close();
            }, { once: true });

            editDialog.querySelector('#submit-edit-btn').addEventListener('click', (e) => {
                e.preventDefault();

                thisTodo.edit(editTitle.value, editDesc.value, editDueDate.value, editPriority.value);
                saveTodos();
                saveCategories();
                displayTodo(myToDos);
                editDialog.close();
                todoContent.innerHTML = '';
                console.log(myToDos);
            }, { once: true });
        });

        const thisTodoComplete = document.createElement('button');
        if (thisTodo.completed) {
            thisTodoComplete.textContent = 'Completed'
            thisTodoEdit.disabled = true;
        } else {
            thisTodoComplete.textContent = 'Mark Completed'
        };
        thisTodoComplete.addEventListener('click', () => {
            thisTodo.toggleCompleted();
            todoContent.innerHTML = '';
            card.classList.toggle('completed');
            todoContent.classList.toggle('show');
            console.log(myToDos);
            displayTodo(myToDos);
        });

        todoContent.append(thisTodoTitle, thisTodoDesc, thisTodoPriority, thisTodoDueDate, thisTodoStatus, thisTodoComplete, thisTodoDelete, thisTodoEdit);


    });

    

    // todoCards.forEach(card  => {
    //     card.addEventListener('click', () => {
    //         todoContent.innerHTML = '';

    //         const todoIndex = myToDos.findIndex(obj => obj.id === card.getAttribute('todo-id'));

    //         const thisTodo = myToDos[todoIndex];

    //         const thisTodoTitle = document.createElement('h1');
    //         thisTodoTitle.textContent = thisTodo.title;

    //         const thisTodoDesc = document.createElement('div');
    //         thisTodoDesc.innerHTML = `<h3>Description</h3> <p>${thisTodo.desc}</p>`;

    //         const thisTodoPriority = document.createElement('p');
    //         thisTodoPriority.textContent = `Priority: ${thisTodo.priority}`;

    //         const thisTodoDueDate = document.createElement('h3');
    //         thisTodoDueDate.textContent = `Due Date: ${thisTodo.dueDate}`;

    //         const thisTodoComplete = document.createElement('button');
    //         thisTodoComplete.textContent = 'Mark Completed'
    //         thisTodoComplete.addEventListener('click', () => {
    //             thisTodo.markCompleted();
    //         })

    //         const thisTodoDelete = document.createElement('button');
    //         thisTodoDelete.textContent = 'Delete';
    //         thisTodoDelete.addEventListener('click', () => {
    //             if (todoIndex !== -1) {
    //                 myToDos.splice(todoIndex, 1);
    //             };
    //             displayTodo();
    //             todoContent.innerHTML = '';
    //         })

    //         todoContent.append(thisTodoTitle, thisTodoDesc, thisTodoPriority, thisTodoDueDate, thisTodoComplete, thisTodoDelete);
    //     })
    // })
}
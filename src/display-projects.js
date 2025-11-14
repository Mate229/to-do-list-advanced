import { Category, myCategories } from "./to-do";
import { displayTodo } from "./to-do-display";

const projectsList = document.querySelector('#projects');

const addNewProject = document.querySelector('#addProject');

const projetInput = document.querySelector('#projectNameImput');

function displayProjectList() {
    for (let project of myCategories) {
        if (document.querySelector(`[project-id="${project.id}"]`) === null) {
            const projectLi = document.createElement('li');
            projectLi.classList.add('projectCategory');
            projectLi.setAttribute('project-id', project.id);
            const projectTitle = document.createElement('h3');
            projectTitle.textContent = project.name;
            projectLi.appendChild(projectTitle);
            projectsList.insertBefore(projectLi, projectsList.querySelector('#projectPlus'));
        }
    }
}

export function createNewProject() {
    addNewProject.addEventListener('click', () => {

        if (projetInput.value === '') return;

        const projectName = projetInput.value;

        const newProject = new Category(projectName);
        newProject.addToGlobal();

        displayProjectList();

        projetInput.value = '';

        console.log(myCategories)
    })
}

export function displayProjectContent() {
    projectsList.addEventListener('click', (e) => {
        const projectCategory = e.target.closest('.projectCategory');
        if (!projectCategory) return;

        if (document.querySelector('.active') !== null) {
            document.querySelector('.active').classList.remove('active')
        }

        projectCategory.classList.add('active');

        const categoryIndex = myCategories.findIndex(obj => obj.id === projectCategory.getAttribute('project-id'));
        const thisCategory = myCategories[categoryIndex];

        const thisCategoryTasks = thisCategory.data;

        displayTodo(thisCategoryTasks);
    })
}
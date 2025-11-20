import { myToDos, myCategories, Todo, Category } from "./to-do";
import { displayTodo } from "./to-do-display";

export function saveTodos() {
  const todosJSON = JSON.stringify(myToDos);

  localStorage.setItem("myToDos", todosJSON);
}

export function saveCategories() {
  const categoryJSON = JSON.stringify(myCategories);

  localStorage.setItem("myCategories", categoryJSON);
}

export function loadTodos() {
  const storedTodos = localStorage.getItem("myToDos");

  if (storedTodos) {
    const rawData = JSON.parse(storedTodos);

    myToDos.length = 0;

    const hydratedTodos = rawData.map((todoData) => {
      const newTodo = new Todo(
        todoData.title,
        todoData.desc,
        todoData.dueDate,
        todoData.priority,
      );

      newTodo.id = todoData.id;

      newTodo.completed = todoData.completed;

      newTodo.category = todoData.category;

      return newTodo;
    });

    myToDos.push(...hydratedTodos);
  } else {
    myToDos.length = 0;
  }

  displayTodo(myToDos);
}

export function loadCategories() {
  const storedCategories = localStorage.getItem("myCategories");

  if (storedCategories) {
    const rawData = JSON.parse(storedCategories);

    myCategories.length = 0;

    const hydratedCategories = rawData.map((categoryData) => {
      const hydratedTodos = categoryData.data.map((todoData) => {
        const newTodo = new Todo(
          todoData.title,
          todoData.desc,
          todoData.dueDate,
          todoData.priority,
        );
        newTodo.id = todoData.id;
        newTodo.completed = todoData.completed;
        newTodo.category = todoData.category;
        return newTodo;
      });

      const newCategory = new Category(categoryData.name, hydratedTodos);

      newCategory.id = categoryData.id;

      return newCategory;
    });

    myCategories.push(...hydratedCategories);
  } else {
    myCategories.length = 0;
  }
}

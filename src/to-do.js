const myToDos = [];

const myCategories = [];

class Todo {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    addToList() {
        myToDos.push(this);
    }

    addToCategory(name) {
        name.push(this);
    }
};

class Category {
    constructor(name, data = []) {
        this.name = name;
        this.data = data;
    }

    addToGlobal() {
        myCategories.push(this);
    }
}
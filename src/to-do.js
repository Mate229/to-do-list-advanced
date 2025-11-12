const myToDos = [];

const myCategories = [];

export class Todo {
    constructor(title, desc, dueDate, priority) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    toggleCompleted() {
        if (!this.completed) {
            this.completed = true
        } else {
            this.completed = false;
        }
    }

    addToList() {
        myToDos.push(this);
    }

    addToCategory(name) {
        name.push(this);
    }

    edit(newTitle, newDesc, newDueDate, newPriority) {
        this.title = newTitle;
        this.desc = newDesc;
        this.dueDate = newDueDate;
        this.priority = newPriority;
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

export { myToDos }
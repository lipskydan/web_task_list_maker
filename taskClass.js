export class TaskClass {
    task;
    date;

    constructor(task) {
        this.task = task;
        this.date = new Date();
    }

    get task(){
        return this.task;
    }
}
export default class Todo {
    id: string;
    text: string;
    completed: boolean;

    constructor(obj: any) {
        this.id = obj.id;
        this.text = obj.text;
        this.completed = obj.completed;
  }
}
import Todo from "./models/todo";

export default class CRUD {
    todos: Todo[];
    setTodos: any;

    constructor(todos: Todo[], setTodos: any) {
        this.todos = todos;
        this.setTodos = setTodos;
    }

    toggleTodo(id: string) {
        this.setTodos(
            this.todos.map((todo: Todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    removeTodo(id: string) {
        this.setTodos(
            this.todos.filter(todo => todo.id !== id)
        )
    }

    addTodo(text: string) {
        const newTodo = new Todo(text);
        this.setTodos([...this.todos, newTodo])
    }

}

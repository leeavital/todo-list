import { IAction } from "./actions";

export interface ITodo {
  id: number;
  name: string;
  metadata: {[key: string]: string};
}

export interface ITodosState {
  todos: ITodo[];
}

const initialTodos: ITodosState = {
  todos: []
};

export function todosReducer(state: ITodosState = initialTodos, action: IAction) {
  switch (action.type) {
    case "addTodo":
      const todos = state.todos.concat(action.todo);
      return Object.assign({}, state, {todos});

    case "removeTodo":
      const { id } = action;
      const newTodos = state.todos.filter(todo => todo.id !== id);
      return Object.assign({}, state, {todos: newTodos});
    default:
      return state;
  }
}

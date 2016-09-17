import { ITodo } from "./todosReducer";

export interface IAddTodo {
  type: "addTodo";
  todo: ITodo;
}

export interface IClearTodos {
  type: "clearTodos";
}

export interface ISetCreatingTodo {
  type: "creatingTodo";
  open: boolean;
}

export interface ISubmitTodo {
  type: "submitTodo",
  todo: ITodo,
}

export interface IRemoveTodo {
  type: "removeTodo";
  id: number;
}

export type IAction = IAddTodo | IClearTodos | ISetCreatingTodo | ISubmitTodo | IRemoveTodo;

// attempts to submit a todo and either sets
export function submitTodo(todo: ITodo): ISubmitTodo {
  return {
    type: "submitTodo",
    todo: todo,
  }
}

export function removeTodo(id: number): IAction {
  return {
    type: "removeTodo",
    id
  };
}

export function addTodo(todo: ITodo): IAction {
  return {
    type: "addTodo",
    todo: todo
  }
}

export function setCreatingTodo(creating: boolean): IAction {
  return {
    type: "creatingTodo",
    open: creating,
  }
}

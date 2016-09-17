export interface IAddTodo {
  type: "addTodo";
  todo: any
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
  todo: string,
}

export type IAction = IAddTodo | IClearTodos | ISetCreatingTodo | ISubmitTodo;

// attempts to submit a todo and either sets
export function submitTodo(todo: string): ISubmitTodo {
  return {
    type: "submitTodo",
    todo: todo,
  }
}

export function addTodo(todo: any): IAction {
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

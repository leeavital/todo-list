import { combineReducers } from 'redux';

import { todosReducer, ITodosState } from "./todosReducer"
import { IAction, submitTodo } from "./actions";
import { ontologyReducer } from "./ontologyReducer";
import { IOntologyState } from "./ontology";

export interface IState {
  todos: ITodosState;
  isCreating: boolean;
  ontology: IOntologyState;
}

const initialState: IState = {
  todos: {
    todos: [],
  },
  isCreating: false,
  ontology: null, //TODO
}

function creatingReducer(state: boolean = false, action: IAction): boolean {
  console.log(action);
  switch (action.type) {
    case "creatingTodo":
      console.log("here!");
      return action.open;
    default:
      return state;
  }
}

function submitTodoReducer(state: IState = initialState, action: IAction) {
  switch(action.type) {
    case "submitTodo":
      let newTodos = state.todos.todos.concat(action.todo);
      return Object.assign({}, state, {todos: {todos: newTodos}, isCreating: false});

    default:
      return state;
  }
}

function foldTop(...fns: any[]) {
  return function(state, action) {
    let nextState = state;
    for (let fn of fns) {
      nextState = fn(nextState, action); 
    }
    return nextState;
  }
}

export const reduce = foldTop(
    combineReducers({
      todos: todosReducer,
      isCreating: creatingReducer,
      ontology: ontologyReducer
    }),
    submitTodoReducer
  );

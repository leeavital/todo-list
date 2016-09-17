import * as React from "react";
import { IState } from "./reducer";
import { connect } from "react-redux";
import { ITodo } from "./todosReducer";
import { removeTodo } from "./actions";

interface ITodosListDispatchProps {
  todos: ITodo[];
}

interface ITodosListActionProps {
  removeTodo: (id: number) => void;
}

type ITodosListProps = ITodosListDispatchProps & ITodosListActionProps;

function selectProps(state: IState): ITodosListDispatchProps {
  return {
    todos: state.todos.todos
  };
}

const actions = {
  removeTodo
};

@connect(selectProps, actions)
export class TodoList extends React.Component<ITodosListProps, any> {

  render() {
    let items = this.props.todos.map(todo => {
        let remove = () => this.props.removeTodo(todo.id);
        return (<li key={todo.id}>
          {todo.name}
          <button onClick={remove}>remove</button>
        </li>);
    });

    return (<ul>{items}</ul>);
  }
}


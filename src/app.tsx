import * as React from "react";
import { IState } from "./reducer";
import { addTodo, setCreatingTodo } from "./actions";
import { connect } from "react-redux";
import { TodoList } from "./todoList";
import { CreateModal } from "./createModal";

export interface IAppProps {
  todosCount?: number;
  isCreating?: boolean;
  startCreating?: any;
} 

const actionCreators = {
    startCreating: () => setCreatingTodo(true)
};

@connect(selectProps, actionCreators)
export class App extends React.Component<IAppProps, {}> {
  render() {
    console.log(this.props);

    let maybeCreateModal = this.props.isCreating ? <CreateModal /> : null;
    return (
      <div>
        <h1>{this.props.todosCount} todos</h1>

        <TodoList />

        <button onClick={this.props.startCreating}>create</button>

        {maybeCreateModal}
      </div>
    );
  }
}

function selectProps(state: IState): IAppProps {
  return {
    todosCount: state.todos.todos.length,
    isCreating: state.isCreating
  }
}


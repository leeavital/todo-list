import * as React from "react";
import { IState } from "./reducer";
import { connect } from "react-redux";

@connect(selectProps)
export class TodoList extends React.Component<any, any> {

  render() {
    let items = this.props.todos.map(xs => {
        let json = JSON.stringify(xs); 

        return <li key={json}>{json}</li>;
    });

    return (<ul>{items}</ul>);
  }

}

function selectProps(state: IState) {
  return {
    todos: state.todos.todos
  };
}

import * as React from "react";
import { IState } from "./reducer";
import { ITodo } from "./todosReducer";
import { Panel, Button } from "muicss/react";

interface ITodoItemProps {
  todo: ITodo;
  remove: () => void;
}

export class TodoItem extends React.Component<ITodoItemProps, {}> {
  render() {
      return (<Panel>
        {this.props.todo.name}
        <br />
        <Button color="danger" onClick={this.props.remove}>Remove</Button>
      </Panel>);
  }
}

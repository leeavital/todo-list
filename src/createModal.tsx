import * as React from "react";
import { IState } from "./reducer";
import { ITodo } from "./todosReducer";
import { Modal } from "./modal";
import { connect } from "react-redux";
import { setCreatingTodo, submitTodo } from "./actions";

const actionCreators: IDispatchProps = {
  submitTodo,
  closeModal: () => setCreatingTodo(false),
};

function selectProps(state: IState) {
  return {};
}

interface IDispatchProps {
  closeModal: (() => void);
  submitTodo: ((todo: ITodo) => void);
}

type ICreateModalProps = IDispatchProps;

@connect(selectProps, actionCreators)
export class CreateModal extends React.Component<ICreateModalProps, {}> {

  render() {
    return (
      <Modal>
        <button onClick={this.props.closeModal}>close</button>
        Create Modal

        <form onSubmit={this.handleSubmit}>
          <input type="text" className="todoInput" placeholder="todo" />

          <input type="submit" />
        </form>
      </Modal>
    );
  }

  private handleSubmit = (e: any) => {
    e.nativeEvent.preventDefault();

    const todoName: string = e.nativeEvent.target.querySelector(".todoInput").value;
    this.props.submitTodo({
      name: todoName,
      id: Math.random(),
      metadata: {}
    });
  }
}

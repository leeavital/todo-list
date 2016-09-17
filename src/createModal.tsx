import * as React from "react";
import { IState } from "./reducer";
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
  submitTodo: ((todo: string) => void);
}

type ICreateModalProps = IDispatchProps;

@connect(selectProps, actionCreators)
export class CreateModal extends React.Component<ICreateModalProps, {}> {

  private ref: HTMLElement;
  
  private style = {
    position: "absolute",
    margin: "40px",
    width: "calc(100% - 80px)",
    height: "calc(100% - 80px)",
    backgroundColor: "gray",
    top: 0,
  };

  render() {
    return (
      <div style={this.style} >
        <button onClick={this.props.closeModal}>close</button>
        Create Modal
        
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="todoInput" placeholder="todo" />

          <input type="submit" />
        </form>
      </div>
    );
  }

  private handleSubmit = (e: any) => {
    e.nativeEvent.preventDefault();

    const todoName = e.nativeEvent.target.querySelector(".todoInput").value;
    this.props.submitTodo(todoName);
  }
}

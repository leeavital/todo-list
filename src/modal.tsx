import * as React from "react";

export class Modal extends React.Component<{}, {}> {

  private style = {
    position: "absolute",
    margin: "40px",
    width: "calc(100% - 120px)",
    height: "calc(100% - 120px)",
    backgroundColor: "gray",
    top: 0,
    padding: "20px",
  };

  render() {
    return (
      <div style={this.style}>
        {this.props.children}
      </div>
    );
  }
};

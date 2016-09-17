import * as React from "react";
import { Container } from "muicss/react";

export class Modal extends React.Component<{}, {}> {

  private style = {
    width: '400px',
    height: '300px',
    margin: '100px auto',
    backgroundColor: '#fff',
  };

  render() {
    return (
      <div style={this.style}>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
};

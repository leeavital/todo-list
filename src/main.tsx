import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./app";
import { Provider } from "react-redux";
import { addTodo } from "./actions";
import { createStore } from "redux";
import { reduce } from "./reducer";

let store = createStore( reduce, (window as any).devToolsExtension && (window as any).devToolsExtension() );
store.dispatch( addTodo({
  name: "hello",
  id: Math.random(),
  metadata: {}
}));

console.log( store.getState() );

const app = document.createElement("div");
app.id = "app-container";
document.body.appendChild(app);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, app);

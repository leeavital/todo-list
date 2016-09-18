import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./app";
import { Provider } from "react-redux";
import { loadState } from "./actions";
import { createStore } from "redux";
import { reduce, IState } from "./reducer";

import { CreateModal } from "./createModal";
import { OntologyModal } from "./ontologyModal";

import { overlay } from "muicss";

let store = createStore( reduce, (window as any).devToolsExtension && (window as any).devToolsExtension() );

let state = JSON.parse((window as any).localStorage.getItem("todoState"));
store.dispatch(loadState(state as IState));

const app = document.createElement("div");
app.id = "app-container";
document.body.appendChild(app);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, app);


// setup modals
let modal = document.createElement("div");
ReactDOM.render(
  <Provider store={store}>
    <div>
      <CreateModal />
      <OntologyModal />
    </div>
  </Provider>, modal);

store.subscribe(() => {
  let state = store.getState();
  if (state.isCreating || state.ontology.isEditing) {
    overlay("on", modal, {keyboard: false});
  } else {
    overlay("off", modal);  
  }

  // also save to localStorage
  (window as any).localStorage.setItem("todoState", JSON.stringify(state));
});


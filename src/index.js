import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore } from "redux";
import {
  firebaseReducer,
  ReactReduxFirebaseProvider
} from "react-redux-firebase";
import { Provider } from "react-redux";
import { firebase } from "./firebase";

export const rootReducer = combineReducers({
  firebase: firebaseReducer
});

export const store = createStore(rootReducer, {});

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

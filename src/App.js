import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";
import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/app";

const App = () => (
  <FirebaseDatabaseProvider {...firebaseConfig} firebase={firebase}>
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <FirebaseAuthConsumer>
        {props => <div>{console.log(props)}</div>}
      </FirebaseAuthConsumer>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </FirebaseAuthProvider>
  </FirebaseDatabaseProvider>
);

export default App;

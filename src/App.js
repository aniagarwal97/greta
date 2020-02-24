import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed,
} from "@react-firebase/auth";
import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/app";
import Welcome from "./Welcome";
import { CircularProgress } from "@material-ui/core";

const App = () => (
  <FirebaseDatabaseProvider {...firebaseConfig} firebase={firebase}>
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <FirebaseAuthConsumer>
        {props => <div>{console.log(props)}</div>}
      </FirebaseAuthConsumer>
      <BrowserRouter>
        <IfFirebaseAuthed>
          <Switch>
            <Route path="/">
              <Welcome />
            </Route>
            <Redirect to="/" />
          </Switch>
        </IfFirebaseAuthed>
        <IfFirebaseUnAuthed>
          {({ providerId }) =>
            providerId ? (
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <Redirect to="/login" />
              </Switch>
            ) : (
              <CircularProgress />
            )
          }
        </IfFirebaseUnAuthed>
      </BrowserRouter>
    </FirebaseAuthProvider>
  </FirebaseDatabaseProvider>
);

export default App;

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
import Welcome from "./Welcome";
import { CircularProgress } from "@material-ui/core";

const App = () => (
  <FirebaseDatabaseProvider {...firebaseConfig} firebase={firebase}>
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <FirebaseAuthConsumer>
        {({ user, providerId }) =>
          providerId ? (
            <BrowserRouter>
              <Switch>
                {user && (
                  <Route path="/">
                    <Welcome user={user} />
                  </Route>
                )}
                {!user && (
                  <Route path="/login">
                    <Login />
                  </Route>
                )}
                <Redirect to={user ? "/" : "/login"} />
              </Switch>
            </BrowserRouter>
          ) : (
            <CircularProgress />
          )
        }
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  </FirebaseDatabaseProvider>
);

export default App;

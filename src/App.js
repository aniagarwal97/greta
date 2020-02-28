import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer
} from "@react-firebase/auth";
import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/app";
import Home from "./Home";
import { CircularProgress } from "@material-ui/core";
import Challenge from "./Challenge";
import Challenges from "./Challenges";
import Result from "./Result";
import "./App.css";

const App = () => (
  <FirebaseDatabaseProvider {...firebaseConfig} firebase={firebase}>
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <FirebaseAuthConsumer>
        {({ user, providerId }) =>
          providerId ? (
            <BrowserRouter>
              {user && (
                <Switch>
                  <Route exact path="/">
                    <Home user={user} />
                  </Route>
                  <Route path="/challenges/:id">
                    <Challenge />
                  </Route>
                  <Route path="/challenges/">
                    <Challenges user={user} />
                  </Route>
                  <Route path="/result/">
                    <Result user={user} />
                  </Route>
                  <Redirect to="/" />
                </Switch>
              )}
              {!user && (
                <Switch>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Redirect to="/login" />
                </Switch>
              )}
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

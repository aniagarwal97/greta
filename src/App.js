import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/app";
import Signup from "./Signup";

const App = () => (
  <FirebaseDatabaseProvider {...firebaseConfig} firebase={firebase}>
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  </FirebaseDatabaseProvider>
);

export default App;

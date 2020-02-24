import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Link,
  Button,
} from "@material-ui/core";
import { FirebaseDatabaseNode } from "@react-firebase/database";
import { Link as RouterLink } from "react-router-dom";
import firebase from "firebase/app";

const Welcome = () => (
  <Container maxWidth="xs">
    <Button onClick={() => firebase.auth().signOut()}>Sign out</Button>
    <div>User info</div>
    <div>Link to list of challenges</div>
    <div>Challenge carousel</div>
    <div>Daily challenge</div>
    <div>Total Points</div>
  </Container>
);

export default Welcome;

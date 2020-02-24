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
import { FirebaseAuthConsumer } from "@react-firebase/auth";

const Welcome = props => (
  <FirebaseDatabaseNode path="18IbXgkejpKHOdUiMRpvLliMPIqnsBF3_gJH-AHH9ZA8/challenges">
    {({ value: challenges }) => (
      <Container maxWidth="xs">
        {console.log(challenges, props)}
        <Button onClick={() => firebase.auth().signOut()}>Sign out</Button>
        <div>User info</div>
        <div>Link to list of challenges</div>
        <div>Challenge carousel</div>
        <div>Daily challenge</div>
        <div>Total Points</div>
      </Container>
    )}
  </FirebaseDatabaseNode>
);

export default Welcome;

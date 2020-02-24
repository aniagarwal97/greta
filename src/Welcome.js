import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Link,
} from "@material-ui/core";
import { FirebaseDatabaseNode } from "@react-firebase/database";
import { Link as RouterLink } from "react-router-dom";

const Welcome = () => (
  <Container maxWidth="xs">
    <div>User info</div>
    <div>Link to list of challenges</div>
    <div>Challenge carousel</div>
    <div>Daily challenge</div>
    <div>Total Points</div>
  </Container>
);

export default Welcome;

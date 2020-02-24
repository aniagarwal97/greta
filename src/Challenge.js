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

const Challenge = () => (
  <Container maxWidth="xs">
    <div>Challenge name</div>
    <div>Challenge image</div>
    <div>Total users</div>
    <div>Description</div>
    <div>Points</div>
    <div>Start challenge button</div>
    <div>Links to other challenges</div>
  </Container>
);

export default Challenge;

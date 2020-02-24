import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Link,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const Signup = () => (
  <Container maxWidth="xs">
    <Link component={RouterLink} to="/login">
      I already have an account
    </Link>
  </Container>
);

export default Signup;

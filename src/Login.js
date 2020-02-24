import React from "react";
import firebase from "firebase/app";
import {
  Container,
  Typography,
  Link,
  Grid,
  Button,
  CssBaseline,
  Avatar,
  TextField,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(2, 0, 2),
  },
}));

const Signup = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [postcode, setPostcode] = useState("");

  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(false);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {signup && (
            <>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Post Code"
                type="text"
                autoComplete="postal-code"
                value={postcode}
                onChange={e => setPostcode(e.target.value)}
              />
            </>
          )}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={async () => {
              if (signup) {
                const {
                  user,
                } = await firebase
                  .auth()
                  .createUserWithEmailAndPassword(email, password);
                await firebase
                  .database()
                  .ref(`users/${user.uid}`)
                  .set({ name, postcode });
                console.log(user);
              } else {
                await firebase
                  .auth()
                  .signInWithEmailAndPassword(email, password);
              }
            }}
          >
            {signup ? "Sign up" : "Login"}
          </Button>
          {/* <Button
            fullWidth
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() =>
              firebase
                .auth()
                .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            }
          >
            Sign in with Google
          </Button> */}
          <Grid container>
            <Grid item>
              <Link onClick={() => setSignup(!signup)}>
                {signup
                  ? "Already have an account? Login"
                  : "Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Signup;

import React from "react";
import { Container, Card, CardContent, Typography } from "@material-ui/core";
import {
  useFirebase,
  useFirebaseConnect,
  isLoaded,
  isEmpty
} from "react-redux-firebase";
import { useSelector } from "react-redux";

const App = () => {
  // const firebase = useFirebase();
  useFirebaseConnect(["2F18IbXgkejpKHOdUiMRpvLliMPIqnsBF3_gJH"]);
  useSelector(state => {
    console.log(state);
  });

  // console.log(isLoaded(users), isEmpty(users), users);

  return (
    <Container maxWidth="xs">
      <Card>
        <CardContent>
          <Typography>
            <a
              href="https://material-ui.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Material UI Documentation
            </a>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
export default App;

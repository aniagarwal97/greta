import React from "react";
import { Container, Card, CardContent, Typography } from "@material-ui/core";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode
} from "@react-firebase/database";
import firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const App = () => {
  return (
    <FirebaseDatabaseProvider {...firebaseConfig} firebase={firebase}>
      <Container maxWidth="xs">
        <FirebaseDatabaseNode path="18IbXgkejpKHOdUiMRpvLliMPIqnsBF3_gJH-AHH9ZA8/User">
          {({ value: users }) =>
            users &&
            users.map(
              user =>
                user && (
                  <Card key={user.id}>
                    <CardContent>
                      <Typography>{JSON.stringify(user, null, 2)}</Typography>
                    </CardContent>
                  </Card>
                )
            )
          }
        </FirebaseDatabaseNode>
      </Container>
    </FirebaseDatabaseProvider>
  );
};
export default App;

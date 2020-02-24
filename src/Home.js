import React from "react";
import {
  Container,
  Card,
  CardContent,
  // Typography,
  // Link,
  Button,
  Link,
} from "@material-ui/core";
import { FirebaseDatabaseNode } from "@react-firebase/database";
import { Link as RouterLink } from "react-router-dom";
import firebase from "firebase/app";

const Home = props => (
  <FirebaseDatabaseNode path={`users/${props.user.uid}`}>
    {({ value: userInfo }) => (
      <Container maxWidth="xs">
        {console.log(props, userInfo)}
        <Button onClick={() => firebase.auth().signOut()}>Sign out</Button>
        <Card>
          <CardContent>
            <pre>
              {JSON.stringify({ user: props.user, extra: userInfo }, null, 2)}
            </pre>
          </CardContent>
        </Card>
        <Link component={RouterLink} to="/challenges">
          List of challenges
        </Link>
        {/* <FirebaseDatabaseNode path="18IbXgkejpKHOdUiMRpvLliMPIqnsBF3_gJH-AHH9ZA8/challenges">
          {({ value: challenges }) =>
            challenges &&
            challenges.map(
              challenge =>
                challenge &&
                challenge.id && (
                  <RouterLink to={`/challenges/${challenge.id}`}>
                    <Card key={challenge.id}>
                      {console.log(challenge)}
                      <CardContent>
                        <pre>{JSON.stringify(challenge, null, 2)}</pre>
                      </CardContent>
                    </Card>
                  </RouterLink>
                )
            )
          }
        </FirebaseDatabaseNode> */}
        <div>Daily challenge</div>
        <div>Total Points</div>
      </Container>
    )}
  </FirebaseDatabaseNode>
);

export default Home;

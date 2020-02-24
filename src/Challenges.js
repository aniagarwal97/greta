import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Link,
  CircularProgress,
} from "@material-ui/core";
import { FirebaseDatabaseNode } from "@react-firebase/database";
import { Link as RouterLink } from "react-router-dom";

const Challenges = () => (
  <FirebaseDatabaseNode path="18IbXgkejpKHOdUiMRpvLliMPIqnsBF3_gJH-AHH9ZA8/challenges">
    {({ value: challenges }) =>
      challenges ? (
        <Container maxWidth="xs">
          {challenges.map(challenge => (
            <Card key={challenges.id}>
              <CardContent>
                <pre>{JSON.stringify(challenge, null, 2)}</pre>
              </CardContent>
            </Card>
          ))}
        </Container>
      ) : (
        <CircularProgress />
      )
    }
  </FirebaseDatabaseNode>
);

export default Challenges;

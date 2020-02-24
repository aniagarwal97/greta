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

const Users = () => (
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
);

export default Users;

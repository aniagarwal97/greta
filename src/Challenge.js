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
import { Link as RouterLink, withRouter } from "react-router-dom";

const Challenge = props => (
  <FirebaseDatabaseNode
    path={`18IbXgkejpKHOdUiMRpvLliMPIqnsBF3_gJH-AHH9ZA8/challenges/${props.match.params.id}`}
  >
    {({ value }) =>
      value ? (
        <Container maxWidth="xs">
          {console.log(value)}
          <Typography>{value.name}</Typography>
          <Typography>{value.shortDescription}</Typography>
          <Typography>{value.longDescription}</Typography>
          <Typography>{value.theme}</Typography>
          <Typography>{value.level}</Typography>
          <Typography>{value.mission}</Typography>
          <Typography>{value.duration}</Typography>
          {/* <div>Challenge image</div>
        <div>Total users</div>
        <div>Description</div>
        <div>Points</div>
        <div>Start challenge button</div>
        <div>Links to other challenges</div> */}
        </Container>
      ) : (
        <CircularProgress />
      )
    }
  </FirebaseDatabaseNode>
);

export default withRouter(Challenge);

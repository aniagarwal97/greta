import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Link,
  CircularProgress
} from "@material-ui/core";
import { FirebaseDatabaseNode } from "@react-firebase/database";
import { Link as RouterLink } from "react-router-dom";
import "./Challenges.css";

const Challenges = () => (
  <FirebaseDatabaseNode path="18IbXgkejpKHOdUiMRpvLliMPIqnsBF3_gJH-AHH9ZA8/challenges">
    {({ value: challenges }) =>
      challenges ? (
        <Container maxWidth="xs">
          {challenges.map(
            challenge =>
              challenge &&
              challenge.id && (
                <RouterLink
                  to={`/challenges/${challenge.id}`}
                  key={challenges.id}
                >
                  <Card>
                    <CardContent>
                      <pre>{JSON.stringify(challenge, null, 2)}</pre>
                    </CardContent>
                  </Card>{" "}
                </RouterLink>
              )
          )}

          <div className="challenges-details-item">
            <h2 id="challenge-start-message">Aller Donald, on se lance?</h2>
            <img
              id="user-image"
              src={require("./asset/User-Profile-Image/Donald_Trump.jpg")}
              alt="UserImage"
            ></img>
          </div>
          <text id="list-of-challenges">Liste des défis</text>
          <div className="challenge-filter">Filters</div>
          <div className="challenges-list">hi</div>
          <p id="challenges-info">Plus d'infos</p>
        </Container>
      ) : (
        <CircularProgress />
      )
    }
  </FirebaseDatabaseNode>
);

export default Challenges;

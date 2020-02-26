import React from "react";
import {
  Container,
  Card,
  CardContent,
  // Typography,
  // Link,
  Button,
  Link
} from "@material-ui/core";
import { FirebaseDatabaseNode } from "@react-firebase/database";
import { Link as RouterLink } from "react-router-dom";
import firebase from "firebase/app";

import "./Home.css";

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

        <div className="user-details">
          <div className="user-details-item">
            <h2 id="user-name">Salut Donald,</h2>
            <p id="user-quote">
              Prêt à sauver des ornag-outangs{" "}
              <img
                id="emoji"
                src={require("./asset/emoji/Monkey.png")}
                alt="UserImage"
              />{" "}
              ?
            </p>
          </div>
          <div>
            <img
              id="user-photo"
              src={require("./asset/User-Profile-Image/Donald_Trump.jpg")}
              alt="UserImage"
            ></img>
          </div>
        </div>
        <div className="challenge-met">
          <span id="challenge-score">12</span> défi relevé
        </div>
        <div className="challenge-quote">Je relevé des défis</div>
        <div className="challenge-message">
          <h1>Tes défis en cours</h1>
        </div>
        <div className="challenges">
          <Link component={RouterLink} to="/challenges">
            <div className="challenges-item1">
              <button id="challenges-item-btn1">Il reste 4 jours</button>
            </div>
          </Link>
          <Link component={RouterLink} to="/challenges">
            <div className="challenges-item2">
              <button id="challenges-item-btn2">Il reste 4 jours</button>
            </div>
          </Link>
        </div>
        <div className="challenges-pionts">
          <button id="daily-challenges-pionts">
            Daily Challenge -> 3 points bonus
          </button>
        </div>
        <div className="challenges-points-earn">
          <p id="challenges-points-earn-message">
            15 points depuis ton inscription Voir mon impact
          </p>
        </div>
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

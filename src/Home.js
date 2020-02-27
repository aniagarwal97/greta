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
        <div className="user-details">
          <div className="user-details-item">
            <h2 className="user-name">Salut Donald,</h2>
            <p className="user-quote">
              Prêt à sauver des ornag-outangs{" "}
              <img
                className="emoji"
                src={require("./asset/emoji/Monkey.png")}
                alt="UserImage"
              />{" "}
              ?
            </p>
          </div>
          <div>
            <img
              className="user-photo"
              src={require("./asset/User-Profile-Image/Donald_Trump.jpg")}
              alt="UserImage"
            ></img>
          </div>
        </div>
        <div className="challenge-met">
          <span className="challenge-score">12</span> défi relevé
        </div>
        <div className="challenge-quote">Je relevé des défis</div>
        <div className="challenge-message">
          <h1>Tes défis en cours</h1>
        </div>
        <div className="challenges">
          <Link component={RouterLink} to="/challenges">
            <div className="challenges-item1">
              <button className="challenges-item-btn1">Il reste 4 jours</button>
            </div>
          </Link>
          <Link component={RouterLink} to="/challenges">
            <div className="challenges-item2">
              <button className="challenges-item-btn2">Il reste 4 jours</button>
            </div>
          </Link>
        </div>
        <div className="challenges-pionts">
          <button className="daily-challenges-pionts">
            Daily Challenge -> 3 points bonus
          </button>
        </div>
        <div className="challenges-points-earn">
          <p className="challenges-points-earn-message">
            15 points depuis ton inscription Voir mon impact
          </p>
        </div>
        {/* <Link component={RouterLink} to="/challenges">
          List of challenges
        </Link>
        <div>Daily challenge</div>
        <div>Total Points</div> */}
      </Container>
    )}
  </FirebaseDatabaseNode>
);

export default Home;

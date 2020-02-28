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
import { Link as RouterLink, withRouter } from "react-router-dom";

import "./Challenge.css";

const Challenge = props => (
  <FirebaseDatabaseNode
    path={`18IbXgkejpKHOdUiMRpvLliMPIqnsBF3_gJH-AHH9ZA8/challenges/${props.match.params.id}`}
  >
    {({ value }) =>
      value ? (
        <Container maxWidth="xs">
          <div className="challnege-name-left-btn">
            <RouterLink className="link-challenges" to={`/challenges`}>
              <img
                className="arrow-left-btn"
                src={require("./asset/emoji/left-arrow.png")}
                alt="UserProfileImage"
              />
            </RouterLink>
            <h3 className="challenges-name" style={{ textAlign: "center" }}>
              <span>{value.name}</span>
              <span className="challenge-descr">
                - {value.shortDescription}
              </span>
            </h3>
          </div>
          <div className="challenge-list">
            <div className="challenge-image-info">
              <img
                className="challenge-image-item"
                src={require("./asset/emoji/ploybeg.png")}
                alt="ChallengeImage"
              />
              <img
                className="challenge-image-item"
                src={require("./asset/emoji/ploybeg.png")}
                alt="ChallengeImage"
              />
              <img
                className="challenge-image-item"
                src={require("./asset/emoji/ploybeg.png")}
                alt="ChallengeImage"
              />
            </div>
            <div className="challenge-user-profile-image-points-earn">
              <img
                className="challenge-user-profile-image"
                src={require("./asset/User-Profile-Image/image 1.png")}
                alt="UserProfileImage"
              />
              <img
                className="challenge-user-profile-image"
                src={require("./asset/User-Profile-Image/image 2.png")}
                alt="UserProfileImage"
              />
              <img
                className="challenge-user-profile-image"
                src={require("./asset/User-Profile-Image/image 3.png")}
                alt="UserProfileImage"
              />
              <img
                className="challenge-user-profile-image"
                src={require("./asset/User-Profile-Image/image 4.png")}
                alt="UserProfileImage"
              />
              <div className="challenge-points-message">
                <span className="challenge-points">+1708</span> défis relevés
              </div>
            </div>
          </div>
          <div className="recyable-points">
            <h5 className="poubelle-recyable">
              <div
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                }}
              >
                {value.longDescription}
              </div>
              <span className="challenge-info">Plus d'infos</span>
            </h5>
            <div className="points-earn">
              <span className="points">Points {value.points}</span>
            </div>
          </div>
          <div className="parti">Et c'est parti !</div>
          <div className="challenge-recyable-message">
            <span className="mission">MISSION :</span> {value.mission}
            <span className="mission-message">
              Le principe ? Pas de dechets :)
            </span>
            long-descr
          </div>
          <span className="challenge-info">Plus d'infos</span>
          <div className="challenge-recyable-message">
            <span className="mission">IMPACT :</span>{" "}
            <span>{value.impact}</span>
          </div>
          <span className="challenge-notification">Plus de défis ?</span>
          <div className="challenge-icon">
            <RouterLink className="link-challenges" to={`/challenges/1`}>
              <img
                className="challenge-image"
                src={require("./asset/challenge-Image/carrots.png")}
                alt="ChallengeImage"
              />
            </RouterLink>
            <RouterLink className="link-challenges" to={`/challenges/2`}>
              <img
                className="challenge-image"
                src={require("./asset/challenge-Image/trees.png")}
                alt="ChallengeImage"
              />
            </RouterLink>
            <RouterLink className="link-challenges" to={`/challenges`}>
              <div className="number-of-challenge">13+</div>
            </RouterLink>
          </div>
        </Container>
      ) : (
        <CircularProgress />
      )
    }
  </FirebaseDatabaseNode>
);

export default withRouter(Challenge);

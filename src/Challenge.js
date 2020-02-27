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
          {/* {console.log(value)}
          <Typography>{value.name}</Typography>
          <Typography>{value.shortDescription}</Typography>
          <Typography>{value.longDescription}</Typography>
          <Typography>{value.theme}</Typography>
          <Typography>{value.level}</Typography>
          <Typography>{value.mission}</Typography>
          <Typography>{value.duration}</Typography>
          {/*           
          <div>Challenge image</div>
        <div>Total users</div>
        <div>Description</div>
        <div>Points</div>
        <div>Start challenge button</div>
        <div>Links to other challenges</div>  */}
          <div className="challnege-name-left-btn">
            <img
              className="arrow-left-btn"
              src={require("./asset/emoji/left-arrow.png")}
              alt="UserProfileImage"
            />
            <h3 className="challenges-name">
              Name Challenge{" "}
              <span className="challenge-descr">- Short Descr</span>
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
                src={require("./asset/User-Profile-Image/Donald_Trump.jpg")}
                alt="UserProfileImage"
              />
              <img
                className="challenge-user-profile-image"
                src={require("./asset/User-Profile-Image/Donald_Trump.jpg")}
                alt="UserProfileImage"
              />
              <img
                className="challenge-user-profile-image"
                src={require("./asset/User-Profile-Image/Donald_Trump.jpg")}
                alt="UserProfileImage"
              />
              <img
                className="challenge-user-profile-image"
                src={require("./asset/User-Profile-Image/Donald_Trump.jpg")}
                alt="UserProfileImage"
              />
              <div className="challenge-points-message">
                <span className="challenge-points">+1708</span> défis relevés
              </div>
            </div>
          </div>
          <div className="recyable-points">
            <h5 className="poubelle-recyable">
              Poubelle recycable EST long-descr{" "}
              <span className="challenge-info">Plus d'infos</span>{" "}
            </h5>
            <div className="points-earn">
              <span className="points">Points 7</span>
            </div>
          </div>
          <div className="parti">Et c'est parti !</div>
          <div className="challenge-recyable-message">
            <span className="mission">MISSION :</span> recyable EST VIDE{" "}
            <span className="mission-message">
              Le principe ? Pas de dechets :)
            </span>{" "}
            long-descr
          </div>
          <span className="challenge-info">Plus d'infos</span>
          <div className="challenge-recyable-message">
            <span className="mission">IMPACT :</span> this is an variable in the
            base : critere-reussite
          </div>
          <span className="challenge-notification">Plus de défis ?</span>
          <div className="challenge-icon">
            <img
              className="challenge-image"
              src={require("./asset/challenge-Image/carrots.png")}
              alt="ChallengeImage"
            />
            <img
              className="challenge-image"
              src={require("./asset/challenge-Image/trees.png")}
              alt="ChallengeImage"
            />
            <div className="number-of-challenge">13+</div>
          </div>
        </Container>
      ) : (
        <CircularProgress />
      )
    }
  </FirebaseDatabaseNode>
);

export default withRouter(Challenge);

import React from "react";
import { Container, CircularProgress } from "@material-ui/core";
import { FirebaseDatabaseNode } from "@react-firebase/database";
import { Link as RouterLink } from "react-router-dom";
import "./Challenges.css";

const Challenges = () => (
  <div>
    <div className="challenges-details-item">
      <h2 className="challenge-start-message">Aller Donald, on se lance?</h2>
      <img
        className="user-image"
        src={require("./asset/User-Profile-Image/Donald_Trump.jpg")}
        alt="UserImage"
      ></img>
    </div>
    <text className="list-of-challenges">Liste des défis</text>
    <div className="challenge-filter">Filters</div>
    <FirebaseDatabaseNode path="18IbXgkejpKHOdUiMRpvLliMPIqnsBF3_gJH-AHH9ZA8/challenges">
      {({ value: challenges }) =>
        challenges ? (
          <Container maxWidth="xs">
            {challenges.map(
              challenge =>
                challenge &&
                challenge.id && (
                  <RouterLink
                    className="link-challenges"
                    to={`/challenges/${challenge.id}`}
                    key={challenges.id}
                  >
                    <div className="challenges-list">
                      <h2 className="challenge-name">
                        Pas peur de cuisiney du panay
                      </h2>
                      <div className="user-profile-image-points-earn">
                        <img
                          className="user-profile-image"
                          src={require("./asset/User-Profile-Image/Donald_Trump.jpg")}
                          alt="UserProfileImage"
                        />
                        <img
                          className="user-profile-image"
                          src={require("./asset/User-Profile-Image/Donald_Trump.jpg")}
                          alt="UserProfileImage"
                        />
                        <img
                          className="user-profile-image"
                          src={require("./asset/User-Profile-Image/Donald_Trump.jpg")}
                          alt="UserProfileImage"
                        />
                        <img
                          className="user-profile-image"
                          src={require("./asset/User-Profile-Image/Donald_Trump.jpg")}
                          alt="UserProfileImage"
                        />
                        <div className="challenges-points-message">
                          <span className="challenges-points">+1708</span> défis
                          relevés
                        </div>
                      </div>
                    </div>
                    <p className="challenges-info">Plus d'infos</p>
                  </RouterLink>
                )
            )}
          </Container>
        ) : (
          <CircularProgress />
        )
      }
    </FirebaseDatabaseNode>
  </div>
);
export default Challenges;

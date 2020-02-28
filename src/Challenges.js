import React from "react";
import { Container, CircularProgress } from "@material-ui/core";
import { FirebaseDatabaseNode } from "@react-firebase/database";
import { Link as RouterLink } from "react-router-dom";
import "./Challenges.css";

const imageArray = [
  require("./asset/challenge-Image/carrots.png"),
  require("./asset/challenge-Image/jpg.webp")
];

const Challenges = props => (
  <div>
    <FirebaseDatabaseNode path={`users/${props.user.uid}`}>
      {({ value: userInfo }) => {
        return userInfo ? (
          <div className="challenges-details-item">
            <h2 className="challenge-start-message">
              Aller {userInfo.name}, on se lance?
            </h2>
            <RouterLink to={`/`}>
              <img
                className="user-image"
                src={require("./asset/User-Profile-Image/user1.png")}
                alt="UserImage"
              ></img>
            </RouterLink>
          </div>
        ) : (
          <CircularProgress />
        );
      }}
    </FirebaseDatabaseNode>

    <p className="list-of-challenges">Liste des défis</p>
    <div className="challenge-filter">Filters</div>
    <FirebaseDatabaseNode path="18IbXgkejpKHOdUiMRpvLliMPIqnsBF3_gJH-AHH9ZA8/challenges">
      {({ value: challenges }) =>
        challenges ? (
          <Container maxWidth="xs">
            {challenges.map(
              (challenge, index) =>
                challenge &&
                challenge.id && (
                  <RouterLink
                    className="link-challenges"
                    to={`/challenges/${challenge.id}`}
                    key={index}
                  >
                    <div
                      className="challenges-list"
                      style={{
                        background: `url(${
                          imageArray[index % 2]
                        }) center center no-repeat rgba(255, 165, 0, 0.19)`,
                        backgroundSize: "100%"
                      }}
                    >
                      <h2 className="challenge-name">{challenge.name}</h2>
                      <div className="user-profile-image-points-earn">
                        <img
                          className="user-profile-image"
                          src={require("./asset/User-Profile-Image/image 1.png")}
                          alt="UserProfileImage"
                        />
                        <img
                          className="user-profile-image"
                          src={require("./asset/User-Profile-Image/image 2.png")}
                          alt="UserProfileImage"
                        />
                        <img
                          className="user-profile-image"
                          src={require("./asset/User-Profile-Image/image 3.png")}
                          alt="UserProfileImage"
                        />
                        <img
                          className="user-profile-image"
                          src={require("./asset/User-Profile-Image/image 4.png")}
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

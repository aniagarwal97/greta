import React from "react";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import { Link as RouterLink, withRouter } from "react-router-dom";

import "./Result.css";
const Result = () => (
  <div>
    <div style={{ display: "flex" }}>
      <div>
        <div>Mon Impact</div>
        <div></div>
      </div>
      <div>
        <RouterLink className="link-challenges" to={`/challenges`}>
          <img
            className="arrow-left-btn"
            src={require("./asset/emoji/left-arrow.png")}
            alt="UserProfileImage"
          />
        </RouterLink>
      </div>
    </div>
  </div>
);

export default Result;

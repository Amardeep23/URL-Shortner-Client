import React from "react";

import "./Appbar.css";
import useAuth from "../../util/useAuth";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Services/authServices";

const Appbar = () => {
  const isLoggedIn = useAuth();
  const navigate = useNavigate();
  return (
    <div className="appbar">
      <div className="appbar__inner">
        <img src={`${process.env.PUBLIC_URL}/assets/images/icon.png`} alt="" />

        <div className="appbar__menus">
          <Link className="active" style={{marginRight: "1.3rem", marginTop:"0.6rem"}} to="/">
            Dashboard{" "}
          </Link>
          <Link to="/profile" style={{marginRight:"1.3rem", marginTop:"0.6rem"}}>Profile </Link>

          {isLoggedIn ? (
            <Button
              label="logout"
              variant="outlined-secondary"
              onClick={() => logout(navigate)}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Appbar;

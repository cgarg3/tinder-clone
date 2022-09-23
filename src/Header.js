import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/icons-material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
  return (
    <div className="header">
      <h2> I am header</h2>
      <IconButton>
        <PersonIcon fontSize="large" className="Header_icon" />
      </IconButton>

      <img className="header_logo" src="src/tinder-logo.png" alt="" />
      <IconButton>
        <ForumIcon fontSize="large" className="Header_icon" />
      </IconButton>
    </div>
  );
}

export default Header;

import React from "react";

import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { IoMdDocument } from "react-icons/io";
import ProfileIcon from "./ProfileIcon";
import SkillsComponent from "./Skills";

const sidebarStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: "linear-gradient(180deg, #134118 0%, rgba(25, 35, 26, 0) 100%)",
  height: "100%",
  width: "320px",
  borderRadius: "6px",
};

const profileIconComponent = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};


const dividerStyles = {
  marginTop: "20px",
  width: "80%",
  border: "1px solid #2D8536",
};



const navIcon = {
  width: "40px",
  height: "40px",
  color: "white",
  marginLeft: "15px",
};

const navIcons = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
};

function ProfileSidebarComponent() {
  return (
    <div style={sidebarStyles}>
      <div style={profileIconComponent}>
        <ProfileIcon/>
        <div style={dividerStyles} />
        <SkillsComponent />
      </div>
      <div style={navIcons}>
        <BsGithub style={navIcon} />
        <ImLinkedin style={navIcon} />
        <IoMdDocument style={navIcon} />
      </div>
    </div>
  );
}

export default ProfileSidebarComponent;

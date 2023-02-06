import React from "react";
import ProfileIconPng from "../../images/profileIcon.png";

const profileIconDivStyles = {
    backgroundColor: "#D9D9D9",
    width: "120px",
    height: "120px",
    borderRadius: "100%",
    marginTop: "50px",
  };

  const profileIcon = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  const nameStyles = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineWeight: "24px",
    textAlign: "center",
    color: "white",
  };

  const infoStyles = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineWeight: "21px",
    textAlign: "center",
    color: "white",
  };

  const profileInfoStyles = {
    marginTop: "20px",
  };

function ProfileIcon() {
  return (
    <>
      <div style={profileIconDivStyles}>
        <div style={profileIcon}>
          <img src={ProfileIconPng}></img>
        </div>
      </div>
      <div style={profileInfoStyles}>
        <div style={nameStyles}>Radosław Czerwiec</div>
        <div style={infoStyles}>Full Stack Developer</div>
        <div style={infoStyles}>Computer Science Student</div>
      </div>
    </>
  );
}

export default ProfileIcon;

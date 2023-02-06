import React from "react";

const skillsContainerStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
};

const skillInfo = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "14px",
  lineWeight: "21px",
  color: "white",
  marginBottom: "5px",
};

const skillInfoContent = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "12px",
  lineWeight: "21px",
  color: "white",
  marginBottom: "5px",
};

const skilsInfoContainer = {
  marginTop: "20px",
};

function SkillsComponent() {
  return (
    <div style={skillsContainerStyles}>
      <div style={skilsInfoContainer}>
        <div style={skillInfo}>FrontEnd Skills</div>
        <div style={skillInfoContent}>JS/TS React.js, Redux ToolKit</div>
      </div>
      <div style={skilsInfoContainer}>
        <div style={skillInfo}>Styling Skills</div>
        <div style={skillInfoContent}>CSS, SASS, TailwindCSS</div>
      </div>
      <div style={skilsInfoContainer}>
        <div style={skillInfo}>Backend Skills</div>
        <div style={skillInfoContent}>Node.js, Express, MongoDB</div>
      </div>
      <div style={skilsInfoContainer}>
        <div style={skillInfo}>Currently Learning</div>
        <div style={skillInfoContent}>
          Nest.js, Next.js, Gatsby, Java Spring, Figma
        </div>
      </div>
    </div>
  );
}

export default SkillsComponent;

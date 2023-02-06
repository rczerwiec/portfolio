import React from "react";
import { IoMdMenu } from "react-icons/io";

const navbarStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "#154019",
  height: "100%",
  width: "80px",
  borderRadius: "6px",
};

const iconDiv = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  backgroundColor: "#1A4D1F",
  height: "80px",
  borderRadius: "6px",
};

const iconStyles = {
  width: "30px",
  height: "30px",
};

const flagsStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const flagStyles = {
  width: "60%",
  marginBottom: "10px",
  borderRadius: 6,
};

function NavigationSidebarComponent() {
  return (
    <div style={navbarStyles}>
      <div style={iconDiv}>
        <IoMdMenu style={iconStyles} />
      </div>

      <div style={flagsStyles}>
        <img
          style={flagStyles}
          alt="Polish"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg"
        />
        <img
          style={flagStyles}
          alt="English"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
        />
      </div>
    </div>
  );
}

export default NavigationSidebarComponent;

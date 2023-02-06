import React from "react";
import NavigationSidebarComponent from "./Navbar";
import ProfileSidebarComponent from "./ProfileSidebar/ProfileSidebar";

const pageStyles = {
  color: "#232129",
  marginLeft: 100,
  marginRight: 100,
  marginTop: 30,
  borderRadius: 6,
  height: "95vh",
  background: "linear-gradient(180deg, #1A4D1F 0%, rgba(25, 35, 26, 0) 100%)",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#000",
  display: "flex",
  justifyContent: "space-between",

};

function Layout({children}:JSX.Element) {

  return (
    <div>
      <main style={pageStyles}>
        <ProfileSidebarComponent/>
        {children}
        <NavigationSidebarComponent/>
      </main>
    </div>
  );
}

export default Layout;

import React from "react";
import styled from "styled-components";
import NavigationSidebarComponent from "./Navbar";
import ProfileSidebarComponent from "./ProfileSidebar/ProfileSidebar";

const Main = styled.main`
  color: #232129;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 30px;
  border-radius: 6px;
  height: 95vh;
  background: linear-gradient(180deg, #1A4D1F 0%, rgba(25, 35, 26, 0) 100%);
  display: flex;
  justify-content: space-between;
`

interface IProps {
  children: React.ReactNode;
}

function Layout({children}:IProps) {

  return (
    <div>
      <Main>
        <ProfileSidebarComponent/>
        {children}
        <NavigationSidebarComponent/>
      </Main>
    </div>
  );
}

export default Layout;

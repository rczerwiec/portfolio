import React from "react";

import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { IoMdDocument } from "react-icons/io";
import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";
import SkillsComponent from "./Skills";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(180deg, #134118 0%, rgba(25, 35, 26, 0) 100%);
  height: 100%;
  width: 320px;
  border-radius: 6px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Divider = styled.div`
  margin-top: 20px;
  width: 80%;
  border: 1px solid #2d8536;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const navIcon = {
  width: "40px",
  height: "40px",
  color: "white",
  marginLeft: "15px",
};

function ProfileSidebarComponent() {
  return (
    <SidebarContainer>
      <ProfileContainer>
        <ProfileInfo />
        <Divider />
        <SkillsComponent />
      </ProfileContainer>
      <Icons>
        <BsGithub style={navIcon} />
        <ImLinkedin style={navIcon} />
        <IoMdDocument style={navIcon} />
      </Icons>
    </SidebarContainer>
  );
}

export default ProfileSidebarComponent;

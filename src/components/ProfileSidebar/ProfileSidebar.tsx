import React from "react";

import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { IoMdDocument } from "react-icons/io";
import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";
import SkillsComponent from "./SkillsComponent";
import {motion} from "framer-motion";


const SidebarContainer = styled(motion.div)`
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
  cursor: "pointer",
};

function ProfileSidebarComponent() {
  return (
    <SidebarContainer           initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01],
    }}>
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

import React from "react";
import { IoMdMenu } from "react-icons/io";
import styled from "styled-components";
import {motion} from "framer-motion";


const NavbarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #154019;
  height: 100%;
  width: 80px;
  border-radius: 6px;
`;

const MenuIconContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #1a4d1f;
  height: 80px;
  width:80px;
  border-radius: 6px;
  &:hover{
    cursor: pointer;
  }
`;
const FlagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FlagImg = styled.img`
  width: 60%;
  margin-bottom: 10px;
  border-radius: 6px;
`;

const iconStyles = {
  width: "30px",
  height: "30px",
};

function NavigationSidebarComponent() {
  return (
    <NavbarContainer           initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01],
    }}>
      <MenuIconContainer whileTap={{ scale: 1.2 }}   whileHover={{
    scale: 1.1,
    transition: { duration: 0.1 },
  }}>
        <IoMdMenu style={iconStyles} />
      </MenuIconContainer>

      <FlagsContainer>
        <FlagImg
          alt="Polish"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg"
        />
        <FlagImg
          alt="English"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
        />
      </FlagsContainer>
    </NavbarContainer>
  );
}

export default NavigationSidebarComponent;

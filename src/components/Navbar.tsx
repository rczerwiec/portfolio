import React from "react";
import { IoMdMenu } from "react-icons/io";
import styled from "styled-components";
import { motion } from "framer-motion";
import {AiFillHome, AiFillExperiment} from "react-icons/ai";
import {TbCertificate} from "react-icons/tb";
import {IoIosContact} from "react-icons/io";
import {FaAngleRight} from "react-icons/fa";




const iconStyles = {
  width: "30px",
  height: "30px",
};

const Item = styled(motion.span)`
display: flex;
justify-content: space-between;
font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 24px;
color: white;
margin-left: 20px;
margin-right: 20px;
margin-top: 20px;
padding: 10px;
hidden: true;

&:hover {
  cursor: pointer;
`;

function NavigationSidebarComponent() {
  const [isOpen, setIsOpen] = React.useState(false);

  const NavbarContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #154019;
    height: 100%;
    width: 80px;
    border-radius: 6px;
  `;

  const FlagsContainer = styled.div`
  display: flex;
  flex-direction: ${isOpen ? "row" : "column"};
  };
  justify-content: center;
  align-items: center;
`;

  const MenuIconContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #1a4d1f;
    height: 80px;
    width: 80px;
    border-radius: 6px;
    color:white;
    &:hover {
      cursor: pointer;
    }
  `;

  const FlagImg = styled.img`
  width: 50px;
  margin-bottom: 10px;
  border-radius: 6px;
  margin-right: ${isOpen ? "10px" : "0px"};
  };
`;

  const Items = styled(motion.div)`
    display: flex;
    flex-direction: column;
    visibility: ${isOpen ? "visible" : "hidden"};
  `;

  const onMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer
      animate={{
        width: isOpen ? "320px" : "80px",
      }}
      transition={{
      duration: 0.5}}
    >
      <div>
        <MenuIconContainer
          onClick={onMenuClick}
          whileTap={{ scale: 1.2 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
        >
          {isOpen?(<FaAngleRight  style={iconStyles}/>) : (<IoMdMenu style={iconStyles} />) }
        </MenuIconContainer>
        <Items>
        <Item
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            whileHover={{backgroundColor: "#376239",borderRadius: "6px", opacity: 1, scale: 1.1, transition: { duration: 0.1}}}
          >
            Main Page <AiFillHome style={{width: "20px", height:"20px"}}/>
          </Item>
          <Item
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            whileHover={{backgroundColor: "#376239",borderRadius: "6px", opacity: 1, scale: 1.1, transition: { duration: 0.1}}}
          >
            Experience  <AiFillExperiment style={{width: "20px", height:"20px"}}/>
          </Item>
          <Item
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            whileHover={{backgroundColor: "#376239",borderRadius: "6px", opacity: 1, scale: 1.1, transition: { duration: 0.1}}}
          >
            Certificates <TbCertificate style={{width: "20px", height:"20px"}}/>
          </Item>
          <Item
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            whileHover={{backgroundColor: "#376239",borderRadius: "6px", opacity: 1, scale: 1.1, transition: { duration: 0.1}}}
          >
            Contact <IoIosContact style={{width: "20px", height:"20px"}}/>
          </Item>
        </Items>
      </div>

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

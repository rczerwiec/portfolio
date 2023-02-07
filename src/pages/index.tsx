import * as React from "react";
import Layout from "../components/Layout";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import styled from "styled-components";
import CityImg from "../images/city.jpg";
import { motion } from "framer-motion";
import { BlackH3Bold } from "../styles/globalText";
import GlobalStyles from "../styles/globalStyles";


const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeaderContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 25%;
  background: linear-gradient(
      360deg,
      #1a2d1d 2.06%,
      rgba(26, 77, 31, 0.368851) 95.75%,
      rgba(26, 77, 31, 0) 100%
    ),
    url(${CityImg});
  margin-top: 55px;
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 10px;
`;

const ProjectsContainer =  styled(motion.div)`
  background-color: #154019;
  margin-left: 30px;
  margin-right: 30px;
  max-height: 65%;
  margin-top: 30px;
  border-radius: 10px;
`;

const ProjectsText = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color: white;
  margin-left: 20px;
`;

const AllProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  overflow-y: scroll;
`;

const SingleProject = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  border-radius: 6px;
  min-height: 240px;
  margin-bottom: 20px;
`;

const SingleProjectContent = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ProjectDescription = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: black;
  margin-left: 20px;
  margin-right: 20px;
  width: 70%;
`;

const ProjectImg = styled.img`
  justify-self: center;
  margin-right: 20px;
  width: 300px;
  height: 150px;
  min-width: 20%;
  max-width: 300px;
`;

const Name = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 16px;
  color: white;
  margin-top: auto;
  margin-bottom: auto;
`;

const IndexPage: React.FC<PageProps> = () => {
  const renderProjects = [...Array(6)].map(() => {
    return (
      <SingleProject>
        <GlobalStyles/>
        <BlackH3Bold>JetTasks</BlackH3Bold>
        <SingleProjectContent>
          <ProjectDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ultrices vehicula iaculis. Fusce nec commodo orci. Etiam blandit
            ultricies nunc, eu viverra lorem dignissim non. Etiam vel accumsan
            augue.Etiam blandit ultricies nunc, eu viverra lorem dignissim non.
            Etiam vel accumsan augueEtiam blandit ultricies nunc, eu viverra
            lorem dignissim non. Etiam vel accumsan augueEtiam blandit ultricies
            nunc, eu viverra lorem dignissim non. Etiam vel accumsan augueEtiam
            blandit ultricies nunc, eu viverra lorem dignissim non. Etiam vel
            accumsan augue
          </ProjectDescription>
          <ProjectImg />
        </SingleProjectContent>
      </SingleProject>
    );
  });

  return (
    <Layout>
      <Content>
        <HeaderContainer
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Name>Radosław Czerwiec</Name>
        </HeaderContainer>
        <ProjectsContainer initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}>
          <ProjectsText>Projects</ProjectsText>
          <AllProjectsContainer>{renderProjects}</AllProjectsContainer>
        </ProjectsContainer>
      </Content>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Portfolio</title>;

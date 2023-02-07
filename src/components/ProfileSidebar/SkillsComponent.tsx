import React from "react";
import styled from "styled-components";

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 175px;
  margin-left: 10px;
  margin-right: 10px;
`;

const SkillInfoHeader = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-weight: 21px;
  color: white;
  marginbottom: 5px;
`;

const SkillInfoContent = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-weight: 21px;
  color: white;
  marginbottom: 5px;
`;

const SkilsInfoContainer = styled.div`
  margin-top: 20px;
`;

function SkillsComponent() {
  return (
    <>
      <SkillsContainer>
        <SkilsInfoContainer>
          <SkillInfoHeader>FrontEnd Skills</SkillInfoHeader>
          <SkillInfoContent>JS/TS React.js, Redux ToolKit</SkillInfoContent>
        </SkilsInfoContainer>
        <SkilsInfoContainer>
          <SkillInfoHeader>Styling Skills</SkillInfoHeader>
          <SkillInfoContent>CSS, SASS, TailwindCSS</SkillInfoContent>
        </SkilsInfoContainer>
        <SkilsInfoContainer>
          <SkillInfoHeader>Backend Skills</SkillInfoHeader>
          <SkillInfoContent>Node.js, Express, MongoDB</SkillInfoContent>
        </SkilsInfoContainer>
        <SkilsInfoContainer>
          <SkillInfoHeader>Currently Learning</SkillInfoHeader>
          <SkillInfoContent>
            Nest.js, Next.js, Gatsby, Java Spring, Figma
          </SkillInfoContent>
        </SkilsInfoContainer>
      </SkillsContainer>
    </>
  );
}

export default SkillsComponent;

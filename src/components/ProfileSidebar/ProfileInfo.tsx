import React from "react";
import styled from "styled-components";
import ProfileIconPng from "../../images/profileIcon.png";

const ProfileIconContainer = styled.div`
background-color: #D9D9D9;
width: 120px;
height: 120px;
border-radius: 100%;
margin-top: 50px;`

const ProfileIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;`

const ProfileInfoContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-top: 20px;
`

const Name = styled.span`
font-family: Poppins;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-weight: 24px;
color: white;`


const PersonalInfo = styled.span`
font-family: Poppins;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-weight: 21px;
color: white;`


function ProfileInfo() {
  return (
    <>
      <ProfileIconContainer>
        <ProfileIcon>
          <img src={ProfileIconPng}></img>
        </ProfileIcon>
      </ProfileIconContainer>
      <ProfileInfoContainer>
        <Name>Radosław Czerwiec</Name>
        <PersonalInfo>Full Stack Developer</PersonalInfo>
        <PersonalInfo>Computer Science Student</PersonalInfo>
      </ProfileInfoContainer>
    </>
  );
}

export default ProfileInfo;

import React from 'react';
import styled from '@Styles/styled';
import UserImage from '@Molecules/UserImage';
import Subtitle from '@Atoms/Subtitle';

const StyledMeetOurCommunity = styled.div`
  width: 100%;
`;
const StyledMeetOurCommunityContainer = styled.div`
  width: max-content;
  p {
    max-width: 400px;
    @media (min-width: 1440px) {
      max-width: 600px;
    }
  }
  h2 {
    margin: 100px 0px 60px 0px;
    @media (max-width: 720px) {
      margin: 64px 0px 0px 0px;
    }
  }
  margin: auto;
  margin-bottom: 145px;
  @media (max-width: 720px) {
    margin-bottom: 64px;
  }
`;

const MeetOurCommunity: React.FC = () => (
  <StyledMeetOurCommunity>
    <StyledMeetOurCommunityContainer>
      <Subtitle size="Sub1">Conoce a nuestra comunidad</Subtitle>
      <UserImage imageUrl="/images/user_image_left.png" direction="left" cubeColor="orange" />
      <UserImage imageUrl="/images/user_image_right.png" direction="right" />
    </StyledMeetOurCommunityContainer>
  </StyledMeetOurCommunity>
);

export default MeetOurCommunity;

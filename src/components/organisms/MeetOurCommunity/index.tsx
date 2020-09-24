import React from 'react';
import styled from '@Styles/styled';
import UserImage from '@Molecules/UserImage';
import Subtitle from '@Atoms/Subtitle';
import { GridRow, GridColumn } from 'emotion-flex-grid';

const StyledMeetOurCommunity = styled.div`
  width: 100%;
  ${({ theme }) => theme.mediaquery.extralarge} {
    width: 1440px;
  }
`;
const StyledMeetOurCommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 50px;

  h2 {
    max-width: max-content;
    margin-bottom: ${({ theme }) => theme.spaces.xl};
    ${({ theme }) => theme.mediaquery.large} {
      align-self: flex-start;
    }
  }
`;

const MeetOurCommunity: React.FC = () => (
  <StyledMeetOurCommunity>
    <GridColumn align="center" mx={['xs', 's', 'm', 'l', 'xl', 'xxl']}>
      <GridRow>
        <GridColumn width={[12, 12, 12]}>
          <StyledMeetOurCommunityContainer>
            <Subtitle size="Sub2">Conoce a nuestra comunidad</Subtitle>
            <UserImage imageUrl="/images/user_image_left.png" direction="left" cubeColor="orange" />
            <UserImage imageUrl="/images/user_image_right.png" direction="right" />
          </StyledMeetOurCommunityContainer>
        </GridColumn>
      </GridRow>
    </GridColumn>
  </StyledMeetOurCommunity>
);

export default MeetOurCommunity;

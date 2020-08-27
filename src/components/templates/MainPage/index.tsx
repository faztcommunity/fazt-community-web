import React from 'react';
import styled from '@Styles/styled';
import Navigation from '@Organisms/Navigation';
import Footer from '@Organisms/Footer';

const StyledMainContainer = styled.div`
  width: 100%;
  height: max-content;
`;

const StyledMainChildren = styled.div`
  margin: 90px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  min-height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    width: max-content;
    height: max-content;
  }
`;

const MainTemplate: React.FC = ({ children }) => {
  return (
    <StyledMainContainer>
      <Navigation />
      <StyledMainChildren>{children}</StyledMainChildren>
      <Footer />
    </StyledMainContainer>
  );
};

export default MainTemplate;

import React from 'react';
import styled from '@Styles/styled';
import Navigation from '@Organisms/Navigation';

const StyledMainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const StyledMainChildren = styled.div`
  padding: 0px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    width: max-content;
    height: max-content;
  }
`;

const AuthPage: React.FC = ({ children }) => {
  return (
    <StyledMainContainer>
      <Navigation />
      <StyledMainChildren>{children}</StyledMainChildren>
    </StyledMainContainer>
  );
};

export default AuthPage;

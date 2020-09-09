import React from 'react';
import styled from '@Styles/styled';

const StyledMainContainer = styled.div`
  width: 100%;
  height: max-content;
`;

const StyledMainChildren = styled.div`
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

const AuthPage: React.FC = ({ children }) => {
  return (
    <StyledMainContainer>
      <StyledMainChildren>{children}</StyledMainChildren>
    </StyledMainContainer>
  );
};

export default AuthPage;

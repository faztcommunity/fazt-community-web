import React from 'react';
import styled from '@Styles/styled';
import Title from '@Atoms/Title';
import Description from '@Atoms/Description';
import Button from '@Atoms/Button';

const StyledSection = styled.section`
  background: ${({ theme }) => theme.colors.gray[100]};
  display: flex;
  align-items: center;
  height: calc(100vh - 90px);
  width: 90%;
  margin: 0 auto;
  padding-bottom: 20px;
  border-bottom: solid #d9d9d9 1px;
`;

const WelcomeContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto 0;
  z-index: ${({ theme }) => theme.zindex.zNormal};

  .fix-margin {
    margin-bottom: 1rem;
  }

  span {
    display: block;
  }

  ${({ theme }) => theme.mediaquery.small} {
    max-width: 540px;
  }

  ${({ theme }) => theme.mediaquery.medium} {
    justify-content: left;
    max-width: 720px;

    .fix-margin {
      margin-left: 1rem;
      p {
        width: 80%;
      }
    }
    span {
      display: inline;
    }
  }
  ${({ theme }) => theme.mediaquery.large} {
    max-width: 960px;

    .desc {
      p {
        width: 75%;
      }
    }
  }

  ${({ theme }) => theme.mediaquery.extralarge} {
    max-width: 1140px;

    .desc {
      p {
        width: 65%;
      }
    }
  }
`;

const StyledCircuit = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  opacity: 0.3;
  background: url('./images/circuit.svg') no-repeat center center;

  img {
    width: auto;
  }

  ${({ theme }) => theme.mediaquery.small} {
    opacity: 0.8;
    top: unset;
    bottom: 0;
    right: 0;
  }
`;

const Welcome: React.FC = () => (
  <StyledSection>
    <WelcomeContent>
      <div className="fix-margin">
        <Title as="h1" size="MTitle">
          Somos <span>Fazt Community</span>
        </Title>
      </div>
      <div className="fix-margin desc">
        <Description size="xl">
          Crece como profesional compartiendo tus conocimientos con los demás y participando en proyectos open
          source.
        </Description>
      </div>
      <Button text="Unirme a la comunidad" size="m" />
      <Button text="Ver proyectos" size="m" color="secondary" variant="outline" />
    </WelcomeContent>

    <StyledCircuit>{/* <img src="./images/circuit.svg" alt="Circuit" /> */}</StyledCircuit>
  </StyledSection>
);

export default Welcome;

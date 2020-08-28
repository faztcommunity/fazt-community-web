import React from 'react';
import styled from '@Styles/styled';
import Title from '@Atoms/Title';
import Description from '@Atoms/Description';
import Button from '@Atoms/Button';
import { screen, index } from '@Styles/theme';

const StyledSection = styled.section`
  background: ${({ theme }) => theme.neutrale.gray[100]};
  display: grid;
  height: calc(100vh - 90px);
  margin-top: 90px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  place-items: center;
  position: relative;
  width: 100%;

  img {
    height: 70%;
    opacity: 25%;
    position: absolute;
    right: 0;
    top: 5%;
    z-index: 1;
  }

  ${screen('sm')} {
    img {
      height: 80%;
      opacity: 35%;
    }
  }

  ${screen('lg')} {
    img {
      height: 90%;
      opacity: 45%;
    }
  }
`;

const WelcomeContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  ${index(10)}

  .fix-margin {
    margin-bottom: 1rem;
  }

  span {
    display: block;
  }

  ${screen('sm')} {
    max-width: 540px;
  }

  ${screen('md')} {
    justify-content: left;
    max-width: 720px;

    .fix-margin {
      margin-left: 1rem;
    }
    span {
      display: inline;
    }
    .desc {
      width: 80%;
    }
  }

  ${screen('lg')} {
    max-width: 960px;

    .desc {
      width: 75%;
    }
  }

  ${screen('xl')} {
    max-width: 1140px;

    .desc {
      width: 65%;
    }
  }
`;

const Welcome: React.FC = () => (
  <StyledSection>
    <WelcomeContent>
      <div className="fix-margin">
        <Title as="h1" size="lg">
          Somos <span>Fazt Community</span>
        </Title>
      </div>
      <Description>
        <div className="fix-margin desc">
          Crece como profesional compartiendo tus conocimientos con los demás y participando en proyectos open
          source.
        </div>
      </Description>
      <Button text="Unirme a la comunidad" size="rl" />
      <Button text="Ver proyectos" size="rl" color="secondary" variant="outline" />
    </WelcomeContent>
    <img src="./images/circuit.svg" alt="Circuit" />
  </StyledSection>
);

export default Welcome;

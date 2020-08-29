import React from 'react';
import styled from '@Styles/styled';
import Title from '@Atoms/Title';
import Description from '@Atoms/Description';
import Button from '@Atoms/Button';
import { screen, index } from '@Styles/theme';

const StyledSection = styled.section`
  background: ${({ theme }) => theme.neutrale.gray[100]};
  display: flex;
  align-items: center;
  height: calc(100vh - 90px);
  position: relative;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: solid #d9d9d9 1px;

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
      height: 80%;
      opacity: 45%;
    }
  }
`;

const WelcomeContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
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
      p {
        width: 80%;
      }
    }
    span {
      display: inline;
    }
  }

  ${screen('lg')} {
    max-width: 960px;

    .desc {
      p {
        width: 75%;
      }
    }
  }

  ${screen('xl')} {
    max-width: 1140px;

    .desc {
      p {
        width: 65%;
      }
    }
  }
`;

const Welcome: React.FC = () => (
  <StyledSection>
    <WelcomeContent>
      <div className="fix-margin">
        <Title as="h1" size="md">
          Somos <span>Fazt Community</span>
        </Title>
      </div>
      <div className="fix-margin desc">
        <Description size="xl">
          Crece como profesional compartiendo tus conocimientos con los demás y participando en proyectos open
          source.
        </Description>
      </div>
      <Button text="Unirme a la comunidad" size="md" />
      <Button text="Ver proyectos" size="md" color="secondary" variant="outline" />
    </WelcomeContent>
    <img src="./images/circuit.svg" alt="Circuit" />
  </StyledSection>
);

export default Welcome;

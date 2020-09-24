import React from 'react';
import styled from '@Styles/styled';
import Title from '@Atoms/Title';
import Description from '@Atoms/Description';
import Button from '@Atoms/Button';
import { GridRow, GridColumn } from 'emotion-flex-grid';

const StyledSection = styled.div`
  background: ${({ theme }) => theme.colors.gray[100]};
  display: flex;
  align-items: center;
  height: calc(100vh - 90px);
  width: 100%;
  border-bottom: solid #1d1d1d26 1px;

  div {
    z-index: ${({ theme }) => theme.zindex.zTooltip};
  }
`;

const WelcomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
  width: 100%;
  h1 {
    max-width: 95vw;
    margin-bottom: ${({ theme }) => theme.spaces.m};
    font-size: ${({ theme }) => theme.texts.size.Sub1.FontSize};
    line-height: ${({ theme }) => theme.texts.size.Sub1.LineHeight};
  }
  p {
    max-width: 500px;
    @media (max-width: 520px) {
      max-width: 90vw;
    }
    margin-bottom: ${({ theme }) => theme.spaces.l};
    text-align: center;
    font-size: ${({ theme }) => theme.texts.size.LBody.FontSize};
    line-height: ${({ theme }) => theme.texts.size.LBody.LineHeight};
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      margin-bottom: ${({ theme }) => theme.spaces.xl};
      width: max-content;
    }
  }
  ${({ theme }) => theme.mediaquery.small} {
    h1 {
      font-size: ${({ theme }) => theme.texts.size.STitle.FontSize};
      line-height: ${({ theme }) => theme.texts.size.STitle.LineHeight};
    }
    p {
      max-width: 690px;
    }
    div {
      flex-direction: row;
      button {
        margin-right: ${({ theme }) => theme.spaces.xl};
        width: max-content;
      }
    }
  }
  ${({ theme }) => theme.mediaquery.large} {
    justify-content: center;
    align-items: flex-start;
    h1 {
      font-size: ${({ theme }) => theme.texts.size.LTitle.FontSize};
      line-height: ${({ theme }) => theme.texts.size.LTitle.LineHeight};
    }
    p {
      max-width: 690px;
      text-align: left;
      font-size: ${({ theme }) => theme.texts.size.XLBody.FontSize};
      line-height: ${({ theme }) => theme.texts.size.XLBody.LineHeight};
    }
  }
`;

const StyledCircuit = styled.div`
  position: absolute;
  height: calc(100vh - 90px);
  width: 100%;
  opacity: 0.3;
  background: url('./images/circuit.svg') no-repeat center right;
  background-size: auto 90%;

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

const Welcome: React.FC = () => {
  return (
    <>
      <StyledSection>
        <StyledCircuit />
        <GridColumn align="center" mx={['xs', 's', 'm', 'l', 'xl', 'xxl']}>
          <GridRow>
            <GridColumn width={[12, 12, 12]}>
              <WelcomeContent>
                <Title as="h1" size="MTitle">
                  Somos <span>Fazt Community</span>
                </Title>
                <Description size="XLBody">
                  Crece como profesional compartiendo tus conocimientos con los demás y participando en
                  proyectos open source.
                </Description>
                <div>
                  <Button text="Unirme a la comunidad" linkTo="https://discord.gg/mFUY4sT" size="m" />
                  <Button text="Ver proyectos" href="/#ref2" size="m" color="secondary" variant="outline" />
                </div>
              </WelcomeContent>
            </GridColumn>
          </GridRow>
        </GridColumn>
      </StyledSection>
    </>
  );
};

export default Welcome;

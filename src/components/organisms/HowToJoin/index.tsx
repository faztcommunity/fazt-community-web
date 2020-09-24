import React from 'react';
import styled from '@Styles/styled';
import Description from '@Atoms/Description';
import Button from '@Atoms/Button';
import Subtitle from '@Atoms/Subtitle';
import { GridColumn } from 'emotion-flex-grid';

const StyledHowToJoinImagesContainer = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  img {
    width: 300px;
  }
  display: none;
  justify-content: space-between;

  ${({ theme }) => theme.mediaquery.large} {
    display: flex;
  }
`;
const StyledHowToJoin = styled.div`
  background: transparent;
  width: 100%;
  height: max-content;
  padding: 64px 0;
  ${({ theme }) => theme.mediaquery.large} {
    padding: 120px 0;
  }
`;
const StyledHowToJoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: ${({ theme }) => theme.zindex.zNormal};
  h3 {
    margin-bottom: ${({ theme }) => theme.spaces.m};
  }
  p {
    margin-bottom: ${({ theme }) => theme.spaces.xl};
    max-width: 600px;
  }
  h4 {
    margin-bottom: ${({ theme }) => theme.spaces.l};
    font-size: ${({ theme }) => theme.texts.size.LBody.FontSize};
    line-height: ${({ theme }) => theme.texts.size.LBody.LineHeight};
    color: ${({ theme }) => theme.colors.gray[600]};
    ${({ theme }) => theme.mediaquery.small} {
      font-size: ${({ theme }) => theme.texts.size.XLBody.FontSize};
      line-height: ${({ theme }) => theme.texts.size.XLBody.LineHeight};
    }
  }
  .containerPasos {
    margin-top: 32px;
    h3 {
      font-weight: 700;
      font-size: 24px;
      @media (max-width: 536px) {
        font-size: 18px;
        line-height: 20px;
      }
      color: ${({ theme }) => theme.colors.gray[600]};
    }
    &-Image {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 24px;
      &-Right {
        margin-right: 91px;
        @media (max-width: 536px) {
          margin-right: 30px;
        }
      }
      &-Left {
        margin-left: 91px;
        @media (max-width: 536px) {
          margin-left: 30px;
        }
      }
      &-Line {
        width: 400px;
        height: 2.5px;
        background-color: #d9d9d9;
        position: absolute;
        transform: translate(-5px, -30px);
        z-index: 1;
        @media (max-width: 536px) {
          width: 65%;
          transform: translate(-5px, -40px);
        }
      }
      &-container {
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        height: 120px;
        p {
          font-size: 19px;
          line-height: 18px;
        }
        @media (max-width: 536px) {
          p {
            font-size: 19px;
            line-height: 18px;
          }
        }
        &-circulo {
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Open Sans';
          font-size: 20px;
          font-weight: 700;
          background-color: #d9d9d9;
          border-radius: 100px;
          width: 57px;
          height: 57px;
          @media (max-width: 536px) {
            width: 39px;
            height: 39px;
            padding: 14px;
          }
        }
      }
    }
  }
`;
const HowToJoin: React.FC = () => {
  return (
    <StyledHowToJoin>
      <StyledHowToJoinImagesContainer>
        <img src="/images/CircuitoLeft.svg" alt="" />
        <img src="/images/CircuitoRight.svg" alt="" />
      </StyledHowToJoinImagesContainer>
      <GridColumn align="center" mx={['xs', 's', 'm', 'l', 'xl', 'xxl']}>
        <StyledHowToJoinContainer>
          <Subtitle size="Sub2" as="h3" align="center">
            ¿Qué esperas para unirte?
          </Subtitle>
          <Description size="LBody">
            En Fazt Community somos más de 15,000 personas. Donde aprendemos juntos, trabajamos en equipo y a
            cambio obtienes experiencias y conocimientos en proyectos.
          </Description>

          <Subtitle size="Sub4" as="h4" align="center">
            Crece como profesional en 3 pasos
          </Subtitle>

          <div className="containerPasos-Image">
            <div className="containerPasos-Image-container containerPasos-Image-Right">
              <div className="containerPasos-Image-container-circulo">
                <span>1</span>
              </div>
              <Description size="SBody">Únete</Description>
            </div>
            <span className="containerPasos-Image-Line" />
            <div className="containerPasos-Image-container">
              <div className="containerPasos-Image-container-circulo">
                <span>2</span>
              </div>
              <Description size="SBody">Encuentra un proyecto</Description>
            </div>
            <div className="containerPasos-Image-container containerPasos-Image-Left">
              <div className="containerPasos-Image-container-circulo">
                <span>3</span>
              </div>
              <Description size="SBody">Participa</Description>
            </div>
          </div>
          <Button linkTo="https://discord.gg/mFUY4sT" text="Unirme a la comunidad" size="m" />
        </StyledHowToJoinContainer>
      </GridColumn>
    </StyledHowToJoin>
  );
};
export default HowToJoin;

import React from 'react';
import styled from '@Styles/styled';
import PropTypes from 'prop-types';
import { StyledImage } from '@Atoms/Image';
import { StyledDescription } from '@Atoms/Description';

type UserImageProps = {
  direction?: 'left' | 'right';
  cubeColor?: 'orange' | 'blue';
  imageUrl?: string;
};
const StyledUserImage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 10%;
  margin-bottom: 160px;

  @media (max-width: 976px) {
    margin-bottom: 100px;
    margin-left: 36px;
    margin-right: 36px;
  }
  @media (max-width: 696px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 62px;
    margin: 0px;
  }
`;
const BigDiv = styled.div<UserImageProps>`
  position: relative;
  ${({ direction }) => (direction === 'left' ? `margin-right: 25px;` : `margin-left: 25px;`)}
  @media (max-width: 815px) {
    ${({ direction }) => (direction === 'left' ? `margin-right: 0px;` : `margin-left: 0px;`)}
  }
`;
const StyledCube = styled.div<UserImageProps>`
  background-color: ${({ cubeColor, theme }) =>
    cubeColor === 'orange' ? theme.light.accent.active : theme.light.color.secondary};
  opacity: 0.5;
  width: 123px;
  height: 106px;
  border-radius: 8px;
  position: absolute;
  top: 225px;
  ${({ direction }) => (direction === 'left' ? `left: 0;` : `right: 0;`)}
  ${({ direction }) =>
    direction === 'left' ? `left: 425px;` : `right: 425px;`}
  @media (max-width: 1024px) {
    width: 86px;
    height: 76px;
    top: 185px;
    ${({ direction }) => (direction === 'left' ? `left: 360px;` : `right: 360px;`)}
  }
  @media (max-width: 815px) {
    width: 76px;
    height: 66px;
    top: 150px;
    ${({ direction }) => (direction === 'left' ? `left: 275px;` : `right: 275px;`)};
  }
  @media (max-width: 350px) {
    width: 56px;
    height: 46px;
    top: 135px;
    ${({ direction }) => (direction === 'left' ? `left: 260px;` : `right: 260px;`)};
  }
`;

const NewStyledImage = styled(StyledImage)<UserImageProps>`
  ${({ direction }) => (direction === 'left' ? `` : `right: 0;`)}
  @media (max-width: 1024px) {
    width: 408px;
    height: 220px;
  }
  @media (max-width: 815px) {
    width: 314px;
    height: 180px;
  }
  @media (max-width: 696px) {
    margin-bottom: 35px;
  }
  @media (max-width: 350px) {
    width: 284px;
    height: 150px;
  }
`;

const NewDescription = styled(StyledDescription)<UserImageProps>`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  @media (max-width: 1024px) {
    font-size: 1.2rem;
    ${({ direction }) => (direction === 'left' ? `margin-left: 40px;` : `margin-right: 40px;`)};
  }
  @media (max-width: 976px) {
    font-size: 1rem;
    margin: auto;
    line-height: 23px;
    ${({ direction }) => (direction === 'left' ? `margin-left: 40px;` : `margin-right: 40px;`)};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 23px;
  }
  @media (max-width: 696px) {
    text-align: center;
    order: 2;
    margin: auto;
  }
`;
const UserImage: React.FC<UserImageProps> = ({ direction, imageUrl, cubeColor }) => (
  <>
    {direction === 'left' ? (
      <StyledUserImage>
        <BigDiv direction={direction}>
          <StyledCube direction={direction} cubeColor={cubeColor} />
          <NewStyledImage width="507px" height="290px" direction={direction} image={imageUrl} />
        </BigDiv>
        <NewDescription size="xl" direction={direction}>
          Fazt Community es un espacio donde podrás crecer como profesional, participando en equipos y con
          personas de todo el mundo hispano hablante.
        </NewDescription>
      </StyledUserImage>
    ) : (
      <StyledUserImage>
        <NewDescription size="xl">
          No importa tu nivel, podrás encontrar un área donde unirte, aportar de tu conocimiento con otros,
          recibir ayuda y vas a conocer gente que comparten la misma pasión que tú.
        </NewDescription>
        <BigDiv direction={direction}>
          <StyledCube direction={direction} cubeColor={cubeColor} />
          <NewStyledImage width="508px" height="290px" direction={direction} image={imageUrl} />
        </BigDiv>
      </StyledUserImage>
    )}
  </>
);

UserImage.propTypes = {
  cubeColor: PropTypes.oneOf(['orange', 'blue']),
  direction: PropTypes.oneOf(['left', 'right']),
  imageUrl: PropTypes.string
};

UserImage.defaultProps = {
  cubeColor: 'blue',
  direction: 'left',
  imageUrl: 'https://urbandojo.com/wp-content/uploads/2017/04/default-image.jpg'
};
export default UserImage;

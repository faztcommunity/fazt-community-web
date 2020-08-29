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
const StyledUserImage = styled.div<UserImageProps>`
  display: flex;
  margin-bottom: 140px;
  @media (max-width: 1140px) {
    margin-bottom: 70px;
  }
  @media (max-width: 720px) {
    margin-bottom: 32px;
    align-items: center;
    ${({ direction }) =>
      direction === 'left' ? `flex-direction: column;` : `flex-direction: column-reverse;`};
  }
`;
const BigDiv = styled.div<UserImageProps>`
  width: max-content;
`;
const StyledCube = styled.div<UserImageProps>`
  background-color: ${({ cubeColor, theme }) =>
    cubeColor === 'orange' ? theme.light.accent.active : theme.light.color.secondary};
  opacity: 0.5;

  width: 123px;
  height: 106px;
  border-radius: 8px;
  position: absolute;
  margin: ${({ direction }) => (direction === 'left' ? `290px 0px 0px 508px` : `290px 0px 0px 0px`)};
  transform: ${({ direction }) => (direction === 'left' ? `translate(-80%, -75%)` : `translate(-25%, -75%)`)};
  @media (max-width: 1140px) {
    width: 77px;
    height: 66px;
    margin: ${({ direction }) => (direction === 'left' ? `180px 0px 0px 313px` : `180px 0px 0px 0px`)};
  }
`;

const NewStyledImage = styled(StyledImage)<UserImageProps>`
  width: 508px;
  height: 290px;
  @media (max-width: 1140px) {
    width: 313px;
    height: 180px;
  }
  margin: 0px;
  padding: 0px;
  ${({ direction }) => (direction === 'left' ? `` : `right: 0;`)}
`;

const NewDescription = styled(StyledDescription)<UserImageProps>`
  display: flex;
  align-items: center;

  ${({ direction }) => (direction === 'left' ? `margin-left: 70px;` : `margin-right: 70px;`)};

  @media (max-width: 1140px) {
    ${({ direction }) => (direction === 'left' ? `margin-left: 50px;` : `margin-right: 50px;`)};
  }
  @media (max-width: 720px) {
    margin-left: 0px;
    margin-top: 35px;
    width: 313px;
  }
`;
const UserImage: React.FC<UserImageProps> = ({ direction, imageUrl, cubeColor }) => (
  <>
    {direction === 'left' ? (
      <StyledUserImage direction={direction}>
        <BigDiv direction={direction}>
          <StyledCube direction={direction} cubeColor={cubeColor} />
          <NewStyledImage direction={direction} image={imageUrl} />
        </BigDiv>
        <NewDescription size="xl" direction={direction}>
          Fazt Community es un espacio donde podrás crecer como profesional, participando en equipos y con
          personas de todo el mundo hispano hablante.
        </NewDescription>
      </StyledUserImage>
    ) : (
      <StyledUserImage>
        <NewDescription size="xl" direction={direction}>
          Fazt Community es un espacio donde podrás crecer como profesional, participando en equipos y con
          personas de todo el mundo hispano hablante.
        </NewDescription>
        <BigDiv direction={direction}>
          <StyledCube direction={direction} cubeColor={cubeColor} />
          <NewStyledImage direction={direction} image={imageUrl} />
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

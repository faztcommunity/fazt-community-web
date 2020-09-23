import React from 'react';
import styled from '@Styles/styled';
import { StyledImage } from '@Atoms/Image';
import { StyledDescription } from '@Atoms/Description';

type UserImageProps = {
  direction?: 'left' | 'right';
  cubeColor?: 'orange' | 'blue';
  imageUrl?: string;
};
const StyledUserImage = styled.div<UserImageProps>`
  display: flex;
  width: 100%;
  margin-bottom: 32px;
  align-items: center;
  justify-content: center;

  ${({ direction }) =>
    direction === 'left' ? `flex-direction: column;` : `flex-direction: column-reverse;`};

  ${({ theme }) => theme.mediaquery.small} {
    margin-bottom: 56px;
    ${({ direction }) => (direction === 'left' ? `align-items: left;` : `align-items: right;`)};
    ${({ direction }) => (direction === 'left' ? `flex-direction: row;` : `flex-direction: row;`)};
  }
  ${({ theme }) => theme.mediaquery.large} {
    ${({ direction }) => (direction === 'left' ? `align-items: left;` : `align-items: right;`)};
    margin-bottom: 113px;
  }
`;
const BigDiv = styled.div<UserImageProps>`
  width: max-content;
`;
const StyledCube = styled.div<UserImageProps>`
  background-color: ${({ cubeColor, theme }) =>
    cubeColor === 'orange'
      ? theme.colors.themes[0].accent.activeLight
      : theme.colors.themes[0].secondary.light};
  opacity: 0.5;

  position: absolute;
  width: 123px;
  height: 106px;
  border-radius: 8px;
  width: 77px;
  height: 66px;
  margin: ${({ direction }) => (direction === 'left' ? `150px 0px 0px 250px` : `150px 0px 0px 0px`)};
  transform: ${({ direction }) => (direction === 'left' ? `translate(-80%, -75%)` : `translate(-25%, -75%)`)};

  ${({ theme }) => theme.mediaquery.large} {
    width: 123px;
    height: 106px;
    margin: ${({ direction }) => (direction === 'left' ? `290px 0px 0px 508px` : `290px 0px 0px 0px`)};
  }
`;

const NewStyledImage = styled(StyledImage)<UserImageProps>`
  width: 250px;
  height: 150px;
  ${({ theme }) => theme.mediaquery.large} {
    width: 508px;
    height: 290px;
  }
  margin: 0px;
  padding: 0px;
  ${({ direction }) => (direction === 'left' ? `` : `right: 0;`)}
`;

const NewDescription = styled(StyledDescription)<UserImageProps>`
  display: flex;
  align-items: center;
  margin-top: 30px;
  width: 313px;

  ${({ theme }) => theme.mediaquery.small} {
    font-size: ${({ theme }) => theme.texts.size.LBody.FontSize};
    line-height: ${({ theme }) => theme.texts.size.LBody.LineHeight};
    width: 380px;
    margin-top: 0px;
    ${({ direction }) => (direction === 'left' ? `margin-left: 50px;` : `margin-right: 50px;`)};
    text-align: left;
  }
  ${({ theme }) => theme.mediaquery.large} {
    font-size: ${({ theme }) => theme.texts.size.XLBody.FontSize};
    line-height: ${({ theme }) => theme.texts.size.XLBody.LineHeight};
    ${({ direction }) => (direction === 'left' ? `margin-left: auto;` : `margin-right: auto;`)};
    min-width: 380px;
  }
  ${({ theme }) => theme.mediaquery.extralarge} {
    min-width: 600px;
  }
`;
const UserImage: React.FC<UserImageProps> = ({ direction, imageUrl, cubeColor }) => (
  <>
    {direction === 'left' ? (
      <StyledUserImage direction={direction}>
        <BigDiv direction={direction}>
          <StyledCube direction={direction} cubeColor={cubeColor} />
          <NewStyledImage
            direction={direction}
            image={imageUrl || 'https://urbandojo.com/wp-content/uploads/2017/04/default-image.jpg'}
          />
        </BigDiv>
        <NewDescription size="MBody" direction={direction}>
          Fazt Community es un espacio donde podrás crecer como profesional, participando en equipos y con
          personas de todo el mundo hispano hablante.
        </NewDescription>
      </StyledUserImage>
    ) : (
      <StyledUserImage>
        <NewDescription size="MBody" direction={direction}>
          Fazt Community es un espacio donde podrás crecer como profesional, participando en equipos y con
          personas de todo el mundo hispano hablante.
        </NewDescription>
        <BigDiv direction={direction}>
          <StyledCube direction={direction} cubeColor={cubeColor} />
          <NewStyledImage
            direction={direction}
            image={imageUrl || 'https://urbandojo.com/wp-content/uploads/2017/04/default-image.jpg'}
          />
        </BigDiv>
      </StyledUserImage>
    )}
  </>
);

export default UserImage;

import React from 'react';
import styled from '@emotion/styled';

type LoadingProps = {
  text?: string;
  mensaje?: Array<string>;
};

const mensaje = [
  'Hey coders la data esta cargando',
  'Cargando jQuery... jaja tranquilo es broma',
  'Estamos eliminando el jQuery de nuestro proyecto esperanos',
  'Su Teclado no funciona, pulse alt+f4 para continuar',
  'Cargando flash media',
  'No compila y no se porque',
  'Si no carga no es un Bug, es un Feature'
];

const random = Math.floor(Math.random() * mensaje.length);

const LoadingStyle = styled.div<LoadingProps>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Mensaje = styled.div`
  padding: 30px;
`;

const Animacion = styled.div`
  width: 70px;
  height: 70px;
  border: 10px solid #eee;
  border-radius: 50%;
  border-top: 10px solid #d60036;
  animation-name: girar;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes girar {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading: React.FC<LoadingProps> = () => {
  return (
    <LoadingStyle>
      <Animacion />
      <Mensaje>
        <h2>{mensaje[random]}</h2>
      </Mensaje>
    </LoadingStyle>
  );
};

Loading.defaultProps = {
  text: 'Loading',
  mensaje: ['hey coders', 'chau coders']
};

export default Loading;

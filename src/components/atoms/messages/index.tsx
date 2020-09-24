import Icon from '@Atoms/Icon';
import styled from '@Styles/styled';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

type MessageProps = {
  messageAlert: {
    types: string;
    text: string;
    activate: boolean;
  };
};

function getType(e: string) {
  switch (e) {
    case 'error':
      return { icon: 'error', color: '#EC0B2B' };
    case 'warning':
      return { icon: 'warning', color: '#FD8E3E' };
    case 'success':
      return { icon: 'success', color: '#04AB5B' };
    default:
      return {};
  }
}

const StyledMessage = styled.div`
  background-color: #fafafa;
  display: inline-flex;
  box-shadow: 0px 4px 6px rgba(29, 29, 29, 0.15);
  border-radius: 5px;
  position: absolute;
  top: 30px;
  z-index: ${({ theme }) => theme.zindex.zModal};
  p {
    margin: 0.75rem 1rem;
    display: flex;
    align-self: center;
    font-family: ${({ theme }) => theme.texts.fontFamily.Roboto};
    font-size: ${({ theme }) => theme.texts.size.LBody.FontSize};
    line-height: ${({ theme }) => theme.texts.size.LBody.LineHeight};
  }
  div {
    display: flex;
    justify-content: center;
    align-self: center;
  }
`;

const StyledType = styled.div<MessageProps>`
  background-color: ${({ messageAlert }) => getType(messageAlert.types).color};
  border-radius: 5px 0px 0px 5px;
  width: 40px;
  height: 56px;
`;

const Messages: React.FC<MessageProps> = ({ messageAlert }) => {
  const [tempMessage, useTempMessage] = useState({ types: '', text: '', activate: false });
  useEffect(() => {
    if (messageAlert.activate) {
      useTempMessage(messageAlert);
    }
  });
  return (
    <CSSTransition
      in={Boolean(false || messageAlert.activate)}
      timeout={{
        appear: 1000,
        enter: 1000,
        exit: 500
      }}
      classNames="fade"
      unmountOnExit
      mountOnEnter
    >
      <StyledMessage>
        <StyledType messageAlert={tempMessage}>
          <Icon size="sm" icon={getType(tempMessage.types).icon} />
        </StyledType>
        <p>{tempMessage.text}</p>
      </StyledMessage>
    </CSSTransition>
  );
};

export default Messages;

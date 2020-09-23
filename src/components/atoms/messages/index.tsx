import Icon from '@Atoms/Icon';
import styled from '@Styles/styled';

type MessageProps = {
  types?: 'error' | 'success' | 'warning';
};

function getType(e: MessageProps['types']) {
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

const StyledMessage = styled.div<MessageProps>`
  background-color: #fafafa;
  display: inline-flex;
  box-shadow: 0px 4px 6px rgba(29, 29, 29, 0.15);
  border-radius: 5px;
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
  background-color: ${({ types }) => getType(types).color};
  border-radius: 5px 0px 0px 5px;
  width: 40px;
  height: 56px;
`;

const Messages: React.FC<MessageProps> = ({ types, children }) => (
  <StyledMessage>
    <StyledType types={types}>
      <Icon size="sm" icon={getType(types).icon} />
      {console.log(getType(types))}
    </StyledType>
    <p>{children}</p>
  </StyledMessage>
);

export default Messages;

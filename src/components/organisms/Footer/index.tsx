import React from 'react';
import styled from '@Styles/styled';
import { screen } from '@Styles/theme';
import Description from '@Atoms/Description';
import Icon from '@Atoms/Icon';

const DISCORD_LINK = 'https://discord.com/invite/37PHuNw';
const GITHUB_LINK = 'https://github.com/faztcommunity';

const StyledFooter = styled.footer`
  width: 100%;
  color: white;
  text-align: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background: ${({ theme }) => theme.color.gray[800]};
`;

const FooterContent = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  grid-row-gap: 1rem;
  grid-template-areas:
    'copyright'
    'title'
    'link-icons';

  & a {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  ${screen('md')} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-row-gap: 0;
    grid-template-areas: 'copyright' 'title' 'link-icons';
    align-items: center;

    a {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
`;

const Footer: React.FC = () => (
  <StyledFooter>
    <FooterContent>
      <Description size="md" align="center" white>
        All right reserved 2020
      </Description>
      <Description size="md" align="center" white>
        Fazt Community
      </Description>
      <span>
        <a rel="noopener noreferrer" href={DISCORD_LINK} target="_blank">
          <Icon size="rl" icon="discord" />
        </a>
        <a rel="noopener noreferrer" href={GITHUB_LINK} target="_blank">
          <Icon size="rl" icon="github" />
        </a>
      </span>
    </FooterContent>
  </StyledFooter>
);

export default Footer;

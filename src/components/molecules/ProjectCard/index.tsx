import React from 'react';
import styled from '@Styles/styled';
import Subtitle from '@Atoms/Subtitle';
import Icon from '@Atoms/Icon';
import Description from '@Atoms/Description';
import PropTypes from 'prop-types';

type ProjectCardProps = {
  title?: string;
  icon?: 'api' | 'bot' | 'database' | 'web' | 'discord' | 'github';
  altShadow?: string;
  href?: string;
};

const LinkCard = styled.a`
  text-decoration: none;
`;

const StyledCard = styled.div<ProjectCardProps>`
  cursor: pointer;
  padding: 16px 24px;
  width: 320px;
  height: 160px;
  background: #fff;
  border-radius: 8px;

  border: 1px solid ${({ theme }) => (theme ? `${theme.colors.gray['300']}` : '#d9d9d9')};
  box-shadow: 0px 8px 10px /* #color + E6 = color with 90% opacity */
    ${({ altShadow, theme }) => (altShadow ? `${altShadow}E6` : `${theme.colors.gray['300']}80`)};

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 16px 16px /* #color + 80 = color with 50% opacity */
      ${({ altShadow, theme }) => (altShadow ? `${altShadow}E6` : `${theme.colors.gray['300']}80`)};
  }

  /* desktop */
  ${({ theme }) => theme.mediaquery.medium} {
    width: 350px;
  }
  h4 {
    margin-left: 0.5rem;
  }
  p {
    margin: 0px;
    padding: 0px;
  }
  a {
    text-decoration: none;
  }
`;

const StyledHead = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  h4 {
    margin-top: 6px;
    margin-left: 10px;
    font-family: ${({ theme }) => theme.texts.fontFamily.Roboto};
    font-size: 18px;
    line-height: 21px;
  }
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ title, children, icon, altShadow, href }) => (
  <LinkCard href={href} target="_blank">
    <StyledCard altShadow={altShadow}>
      <StyledHead>
        <Icon size="sm" icon={icon} dark />
        <Subtitle as="h4" size="Sub4">
          {title}
        </Subtitle>
      </StyledHead>

      <Description size="MBody" align="forceLeft">
        {children}
      </Description>
    </StyledCard>
  </LinkCard>
);

ProjectCard.defaultProps = {
  icon: 'web',
  title: 'Put your title',
  altShadow: ''
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.oneOf(['api', 'bot', 'database', 'web', 'discord', 'github']),
  altShadow: PropTypes.string
};

export default ProjectCard;

import React from 'react';
import styled from '@Styles/styled';
import Subtitle from '@Atoms/Subtitle';
import Icon from '@Atoms/Icon';
import Description from '@Atoms/Description';
import PropTypes from 'prop-types';
import { screen } from '@Styles/theme';

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
  width: 332px;
  background: #fff;
  border-radius: 8px;

  border: 1px solid ${({ theme }) => (theme ? `${theme.color.gray['300']}` : '#d9d9d9')};
  box-shadow: 0px 8px 10px /* #color + E6 = color with 90% opacity */
    ${({ altShadow, theme }) => (altShadow ? `${altShadow}E6` : `${theme.color.gray['300']}80`)};

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 16px 16px /* #color + 80 = color with 50% opacity */
      ${({ altShadow, theme }) => (altShadow ? `${altShadow}E6` : `${theme.color.gray['300']}80`)};
  }

  /* desktop */
  ${screen('md')} {
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
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ title, children, icon, altShadow, href }) => (
      <LinkCard href={href} target="_blank">
        <StyledCard altShadow={altShadow}>
          <StyledHead>
            <Icon size="sm" icon={icon} dark />
            <Subtitle as="h4" size="sub3">
              {title}
            </Subtitle>
          </StyledHead>

          <Description align="forceLeft" size="md">
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

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
  altBG?: boolean;
};

const StyledCard = styled.div<ProjectCardProps>`
  padding: 24px 16px 24px 16px;
  width: 332px;
  background: #fff;
  border-radius: 8px;

  border: 1px solid ${({ theme }) => (theme ? `${theme.color.gray['300']}` : '#d9d9d9')};
  box-shadow: 0px 8px 10px /* #color + 80 = color with 50% opacity */
    ${({ altBG, theme }) => (altBG ? `${theme.color.gray['500']}80` : `${theme.color.gray['300']}80`)};

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 16px 16px /* #color + 80 = color with 50% opacity */
      ${({ altBG, theme }) => (altBG ? `${theme.color.gray['500']}80` : `${theme.color.gray['300']}80`)};
  }

  /* desktop */
  ${screen('md')} {
    width: 350px;
  }
  h4 {
    margin-left: 1rem;
  }
  p {
    margin: 0px;
    padding: 0px;
  }
`;

const StyledHead = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ title, children, icon, altBG }) => (
  <StyledCard altBG={altBG}>
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
);

ProjectCard.defaultProps = {
  icon: 'web',
  altBG: false,
  title: 'Put your title'
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.oneOf(['api', 'bot', 'database', 'web', 'discord', 'github']),
  altBG: PropTypes.bool
};

export default ProjectCard;

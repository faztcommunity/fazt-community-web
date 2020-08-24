import React from 'react';
import styled from '@Styles/styled';
import Title from '@Atoms/Title';
import Icon from '@Atoms/Icon';
import Description from '@Atoms/Description';
import PropTypes from 'prop-types';

type ProjectCardProps = {
  title?: string;
  icon?: 'api' | 'bot' | 'database' | 'web' | 'discord' | 'github';
  altBG?: boolean;
};

const StyledCard = styled.div<ProjectCardProps>`
  padding: 2rem 1rem;
  width: 332px;
  background: #fff;
  border-radius: 8px;

  border: 1px solid ${({ theme }) => (theme ? `${theme.neutrale.gray['300']}` : '#d9d9d9')};
  box-shadow: 0px 8px 10px /* #color + 80 = color with 50% opacity */
    ${({ altBG, theme }) => (altBG ? `${theme.neutrale.gray['500']}80` : `${theme.neutrale.gray['300']}80`)};

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 16px 16px /* #color + 80 = color with 50% opacity */
      ${({ altBG, theme }) => (altBG ? `${theme.neutrale.gray['500']}80` : `${theme.neutrale.gray['300']}80`)};
  }

  /* desktop */
  @media (min-width: 768px) {
    width: 350px;
  }
`;

const StyledHead = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledTitle = styled.div`
  margin-left: 1rem;
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ title, children, icon, altBG }) => (
  <StyledCard altBG={altBG}>
    <StyledHead>
      <Icon size="sm" icon={icon} dark />
      <StyledTitle>
        <Title as="h3" size="xs">
          {title}
        </Title>
      </StyledTitle>
    </StyledHead>

    <Description>{children}</Description>
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

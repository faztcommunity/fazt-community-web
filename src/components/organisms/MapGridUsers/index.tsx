import React, { useState, useEffect } from 'react';
import styled from '@Styles/styled';
import axios from 'axios';
import Image from '@Atoms/Image';

type MapGridUsersProps = {
  width?: string;
};
const StyledContainer = styled.div<MapGridUsersProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  width: 320px;
  height: 220px;

  ${({ theme }) => theme.mediaquery.small} {
    width: 471.4px;
    height: 321px;
  }
  ${({ theme }) => theme.mediaquery.medium} {
    width: 487.55px;
    height: 332px;
  }
`;

const StyledMapGridUsers = styled.div<MapGridUsersProps>`
  width: 100%;
  height: 100%;
  background: url('https://res.cloudinary.com/design-code-mx/image/upload/v1597433628/Group_cigctd.svg')
    center/contain no-repeat;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 0px;
  grid-auto-rows: auto;
  padding: 7% 7% 8% 7%;
  a {
    width: 35px;
    height: 35px;
    ${({ theme }) => theme.mediaquery.small} {
      width: 50px;
      height: 50px;
    }
    ${({ theme }) => theme.mediaquery.medium} {
      width: 55px;
      height: 55px;
    }

    margin: 0px;
    &:nth-of-type(-2n + 4) {
      transform: translateY(20px);
    }
    &:nth-of-type(7) {
      transform: translateY(20px);
    }
    &:nth-of-type(9) {
      transform: translateY(20px);
    }
    &:nth-of-type(2n + 12) {
      transform: translateY(20px);
    }
  }
`;

const MapGridUsers: React.FC<MapGridUsersProps> = () => {
  const initialState = [
    {
      id: 0,
      name: 'Fede',
      username: 'Fede',
      email: 'elfedeomg@gmail.com',
      imagePath: '',
      userDescription: ''
    }
  ];

  const [listUsers, setListUsers] = useState(initialState);
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get('https://api.faztcommunity.dev/collaborators').catch(() => null);
      setListUsers(result?.data);
    };
    getData();
  }, []);

  return (
    <StyledContainer>
      <StyledMapGridUsers>
        {listUsers.slice(0, 15).map((user) => (
          <Image
            key={user.id}
            variant="round"
            alt={user.username}
            href={`https://github.com/${user.username}`}
            image={
              !user.imagePath
                ? 'https://res.cloudinary.com/design-code-mx/image/upload/v1596616586/ReadMeFaztCommunity/faztcommunity_xbhnox.svg'
                : user.imagePath
            }
          />
        ))}
      </StyledMapGridUsers>
    </StyledContainer>
  );
};

export default MapGridUsers;

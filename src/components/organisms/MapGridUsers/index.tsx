import React, { useState, useEffect } from 'react';
import styled from '@Styles/styled';
import axios from 'axios';
import Image from '@Atoms/Image';

type MapGridUsersProps = {
  width?: string;
};
const StyledContainer = styled.div<MapGridUsersProps>`
  width: 340px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 260px;
    height: 150px;
  }
  transition: all 0.3s ease;
`;

const StyledMapGridUsers = styled.div<MapGridUsersProps>`
  width: 100%;
  height: 100%;
  background: url('https://res.cloudinary.com/design-code-mx/image/upload/v1597433628/Group_cigctd.svg')
    center/cover no-repeat;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 0px;
  grid-auto-rows: auto;
  padding: 7% 0% 8% 7%;
  div {
    width: 50%;
    height: 65%;
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
      albumId: 0,
      id: 0,
      title: 'SomeTitle',
      url: '',
      thumbnailUrl: ''
    }
  ];

  const [listUsers, setListUsers] = useState(initialState);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
      const persons = res.data;
      setListUsers(persons);
    });
  });

  return (
    <StyledContainer>
      <StyledMapGridUsers>
        {listUsers.slice(0, 15).map((user) => (
          <Image key={user.id} variant="round" image={user.url} />
        ))}
      </StyledMapGridUsers>
    </StyledContainer>
  );
};

export default MapGridUsers;

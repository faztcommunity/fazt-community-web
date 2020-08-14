import React, { useState, useEffect } from 'react';
import styled from '@Styles/styled';
import axios from 'axios';
import Image from '@Atoms/Image';
import PropTypes from 'prop-types';

type MapGridUsersProps = {
  users?: [];
};

const StyledMapGridUsers = styled.div<MapGridUsersProps>`
  width: max-content;
  height: max-content;
  background: url('https://res.cloudinary.com/design-code-mx/image/upload/v1597433628/Group_cigctd.svg')
    center/cover no-repeat;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 15px;
  grid-auto-rows: auto;
  padding: 45px 30px 30px 45px;
  div {
    width: 40px;
    height: 40px;
    margin: 0px;
    &:nth-child(-2n + 4) {
      transform: translateY(20px);
    }
    &:nth-child(7) {
      transform: translateY(20px);
    }
    &:nth-child(9) {
      transform: translateY(20px);
    }
    &:nth-child(2n + 12) {
      transform: translateY(20px);
    }
  }
`;

const MapGridUsers: React.FC<MapGridUsersProps> = ({ users }) => {
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
    <StyledMapGridUsers>
      {listUsers.slice(0, 15).map((user) => (
        <Image key={user.id} variant="round" image={user.url} />
      ))}
    </StyledMapGridUsers>
  );
};

export default MapGridUsers;

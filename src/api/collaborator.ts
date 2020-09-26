import axios from 'axios';

export interface Collaborator {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  imagePath: string;
  stateUser: 'active' | 'inactive' | 'banned';
  userDescription: string;
  activationKey: string;
  resetKey: string;
  resetDate: string;
}

export const getCollaborators = () =>
  axios.get<Collaborator[]>('https://api.faztcommunity.dev/collaborators').then((res) => res.data);

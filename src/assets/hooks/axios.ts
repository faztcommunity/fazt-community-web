import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://api.faztcommunity.dev',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;

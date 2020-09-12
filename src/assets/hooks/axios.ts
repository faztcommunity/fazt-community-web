import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://api.faztcommunity.dev',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;

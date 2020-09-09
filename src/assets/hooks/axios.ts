import Axios from 'axios';
import Cookies from 'js-cookie';

const tokenCookie = Cookies.get('token');
const instance = Axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    authorization: tokenCookie ? `Bearer ${tokenCookie}` : ''
  }
});

export default instance;

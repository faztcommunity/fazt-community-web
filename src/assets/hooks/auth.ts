/* eslint-disable @typescript-eslint/no-explicit-any */
import useAxios, { configure } from 'axios-hooks';
import { useRouter } from 'next/router';
import LRU from 'lru-cache';
import Axios from 'axios';
import Cookies from 'js-cookie';

const tokenCookie = Cookies.get('token');
const axios = Axios.create({
  baseURL: 'https://reqres.in/api',
  headers: { authorization: tokenCookie ? `Bearer ${tokenCookie}` : '' }
});

const cache = new LRU({ max: 10 });

configure({ axios, cache });
export default function useAuth(url: any, method: any) {
  const router = useRouter();
  const [{ data, loading, error }, refetch] = useAxios({
    url,
    method
  });
  return {
    data,
    loading,
    error,
    refetch,
    authPage: (x: any, y: any) => {
      if (!x && !y) {
        router.push('/');
      }
    }
  };
}

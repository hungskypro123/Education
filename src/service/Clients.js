import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://62cd22e7066bd2b6991f8bd0.mockapi.io/api/course',
  responseType: 'json',
  withCredentials: true,
});

export {apiClient};

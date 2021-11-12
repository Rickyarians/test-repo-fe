import axios from 'axios';
// import { apiUrl, apiKey } from './../../../app.json';

const service = axios.create({
  baseURL: 'https://animechan.vercel.app',
//   params: { api_key: apiKey },
});

export default service;

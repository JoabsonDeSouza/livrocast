import axios from './baseApi';
import listBooks from '../../listBooks';

export const GetCards = () => {
  const parameterUrl = 'v1/cards';
  return axios.get(parameterUrl);
};

export const GetBestBooks = async () => {
  //   const parameterUrl = `v1/cards/${id}`;
  // return axios.get('/best-books');
  return { data: listBooks };
};

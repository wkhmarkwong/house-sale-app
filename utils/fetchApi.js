import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '55fff6fcf0msh345ba76a5613541p1be4aajsn8dd5c2c2c1d2',
    },
  });

  return data;
};

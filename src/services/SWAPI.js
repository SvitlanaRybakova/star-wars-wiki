import axios from 'axios'

axios.defaults.baseURL = 'https://swapi.dev/api';

// export const getPeople = async() => {
//   const response = await fetch(`https://swapi.dev/api/people`);
//   if(!response.ok){
//     throw new Error("Something went wrong with the request.");
//   }
//   return response.json();
// }

const get = async (endpoint) => {
  const response = await axios.get(endpoint);
  return response.data;
}

export const getPeople = async(page = null ) =>{
 return get(`/people/?page=${page}`)//{count: 23, nextPage: ... results: [...]}
}
export const getAllPlanets = async (page = null, search) => {
  console.log('inside function');
  console.log(search);
  return get(`/planets/?page=${page}`); // {data}
};
export const getPerson = async(id = null) => {
  return get(`/people/${id}/`) // {data}
}

export const getPlanet = async (id = null) => {
  return get(`/planets/${id}/`); // {data}
};
export const getFilms = async (id = null) => {
  return get(`/films/${id}/`); // {data}
};

export default {
  getPeople,
  getAllPlanets,
  getPerson,
  getPlanet,
  getFilms,
};
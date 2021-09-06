export const getEndpointUrl = (url) => {
  // https://swapi.dev/api/people/2/

 const [endpoint, id] = url.replace("https://swapi.dev/api/", "").slice(0, -1).split('/');
//  console.log(endpoint, id);
  return id
}

export default {
  getEndpointUrl,
};
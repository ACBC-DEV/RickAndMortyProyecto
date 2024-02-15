const API = process.env.URL;
export const endPoints = {
  character: {
    getCharaters: (page = 1) => `${API}/character/?page=${page}`,
    getCharacter: (id: number) => `${API}/character/${id}`,
  },
  location: {
    getLocations: (page = 1) => `${API}/location/?page=${page}`,
    getLocation: (id: number) => `${API}/location/${id}`,
  },
  episode: {
    getEpisodes: (page = 1) => `${API}/episode/?page=${page}`,
    getEpisode: (id: number) => `${API}/episode/${id}`,
  },
};

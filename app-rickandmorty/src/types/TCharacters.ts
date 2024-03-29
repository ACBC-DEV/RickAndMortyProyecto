export type TCharacters = {
  id: number;
  image: string;
  name: string;
  status: string;
  gender: string;
  species: string;
  //origen ? string  ; location ? string ,species ? string
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
};
export type IInfo = {
  pages: number;
  next: string;
  prev: string;
};

export interface Root {
  info: Info;
  results: Result[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Result {
  id: number;
  name: string;
  status: "Dead" | "Alive" | "unknown";
  species: string;
  type: string;
  gender: "unknown" | "Female" | "Male" | "Genderless";
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Location {
  name: string;
  url: string;
}

const API_URL = `https://rickandmortyapi.com/api` as const;

const getCharacters = async (search?: string) => {
  const response = await fetch(
    search ? `${API_URL}/character/?name=${search}` : `${API_URL}/character`
  );
  const data = (await response.json()) as Root;
  return data;
};

export const getFavsCharacters = async (favsIds?: number[]) => {
  if(favsIds?.length > 0) {
    const response = await fetch(
      `${API_URL}/character/${favsIds}`
      );
      const data = (await response.json()) as Root;
      return data;
    }
    return []
};

export default getCharacters;

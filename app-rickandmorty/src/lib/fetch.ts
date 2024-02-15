import type { TCharacters, IInfo } from "../types/TCharacters";
import { endPoints } from "@lib/api";
export async function getCharacters(page = 1) {
  const response = await fetch(endPoints.character.getCharaters(page));
  const data = await response.json();
  const { info, results }: { info: IInfo; results: TCharacters[] } = data;
  return { info, results };
}

export const getCharacter = async (id = 1) => {
  const rta = await fetch(endPoints.character.getCharacter(id));
  const data = await rta.json();
  return data;
};

export async function getLocations(page = 1) {
  const response = await fetch(endPoints.location.getLocations(page));
  const data = await response.json();
  const { info, results }: { info: IInfo; results: TCharacters[] } = data;
  return { info, results };
}

export const getLocation = async (id = 1) => {
  const rta = await fetch(endPoints.location.getLocation(id));
  const data = await rta.json();
  return data;
};

export async function getEpisodes(page = 1) {
  const response = await fetch(endPoints.episode.getEpisodes(page));
  const data = await response.json();
  const { info, results }: { info: IInfo; results: TCharacters[] } = data;
  return { info, results };
}

export const getEpisode = async (id = 1) => {
  const rta = await fetch(endPoints.episode.getEpisode(id));
  const data = await rta.json();
  return data;
};

import type { TCharacters, IInfo } from "../types/Tcharacters";
export async function getCharacter(
  url = "https://rickandmortyapi.com/api/character"
) {
  const response = await fetch(url);
  const data = await response.json();
  const { info, results }: { info: IInfo; results: TCharacters[] } = data;
  return { info, results };
}

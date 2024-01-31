import { CharacterV2 } from "@components/Character";
type CharactersHomeProps = {
  searchParams: { page: string };
};
export default function CharactersHome({ searchParams }: CharactersHomeProps) {
  // return <Characters />;
  const { page } = searchParams;

  const pageInt = parseInt(page);
  return <CharacterV2 page={pageInt} />;
}

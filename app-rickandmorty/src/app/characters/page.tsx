import CharacterV2 from "@/components/CharacterV2";
import Characters from "@/components/Characters";
type CharactersHomeProps = {
  searchParams: { page: string };
};
export default function CharactersHome({ searchParams }: CharactersHomeProps) {
  // return <Characters />;
  const { page } = searchParams;

  const pageInt = parseInt(page);
  return <CharacterV2 page={pageInt} />;
}

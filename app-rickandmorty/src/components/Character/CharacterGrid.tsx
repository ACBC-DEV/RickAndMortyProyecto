import { getCharacters } from "@lib/fetch";
import CardCharacter from "../Cards/CardCharacter";
import Each from "../Each";
import PaginationComponent from "../buttons/PaginationComponent";

export default async function CharacterGrid({ page }: { page: number }) {
  const { results, info } = await getCharacters(page);
  return (
    <>
      <div className="grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        <Each Render={CardCharacter} data={results} />
      </div>
      <PaginationComponent page={page || 1} pagination={info} />
    </>
  );
}

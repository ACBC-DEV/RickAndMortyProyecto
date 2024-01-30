import CardCharacter from "./cards/CardCharacter";
import Each from "./Each";
import NavBar from "./NavBar";
import PaginationComponent from "./buttons/PaginationComponent";

async function getCharacters(page = 1) {
  const rta = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const data = await rta.json();
  return data;
}

export default async function CharacterV2({ page }: { page: number }) {
  const { results } = await getCharacters(page);
  return (
    <section className="grid place-content-center">
      <div className="grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        <Each Render={CardCharacter} data={results} />
      </div>
      <PaginationComponent />
    </section>
  );
}

import { CharacterGrid, Character } from "@components/Character";
import ButtonBack from "@/components/buttons/ButtonBack";

import ButtonPagination from "@/components/buttons/buttonPagination";

async function getStaticPaths(id: string) {
  const rta = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await rta.json();
  return data;
}
export default async function CharacterID({
  params,
}: {
  params: { id: string };
}) {
  const data = await getStaticPaths(params.id);
  const id = Number(params.id);

  return (
    <section className=" grid place-content-center">
      <ButtonBack />
      <Character {...data} />
      <div className="flex  gap-x-4 mx-3 place-content-center items-center">
        {id === 1 ? (
          ""
        ) : (
          <ButtonPagination href={`${id - 1}`}>prev</ButtonPagination>
        )}
        <p className="text-center ">{id}</p>
        <ButtonPagination href={`${id + 1}`}>next</ButtonPagination>
      </div>

      <CharacterGrid />
    </section>
  );
}

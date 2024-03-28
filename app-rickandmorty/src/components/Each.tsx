import { TCharacters, TEpisode, TLocations } from "@/types";
export default function Each({
  Render,
  data,
}: {
  Render: React.ElementType;
  data: [] | TCharacters[] | TLocations[] | TEpisode[];
}) {
  return (
    <>
      {data?.map((i: TCharacters | TLocations | TEpisode) => (
        <Render key={`${i.id}-${crypto.randomUUID()}`} {...i} />
      ))}
    </>
  );
}

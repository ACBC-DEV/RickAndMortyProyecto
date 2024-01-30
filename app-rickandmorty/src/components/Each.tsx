import type { TCharacters } from "@/types/Tcharacters";
import { TLocations } from "@/types/Tlocations";
export default function Each({
  Render,
  data,
}: {
  Render: React.ElementType;
  data: [] | TCharacters[] | TLocations[];
}) {
  return (
    <>
      {data?.map((i: TCharacters | TLocations) => (
        <Render key={i} {...i} />
      ))}
    </>
  );
}

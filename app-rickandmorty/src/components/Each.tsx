import type { TCharacters } from "@/types/Tcharacters";
export default function Each({
  Render,
  data,
}: {
  Render: React.ElementType;
  data: [] | TCharacters[];
}) {
  return (
    <>
      {data?.map((i: TCharacters) => (
        <Render key={i} {...i} />
      ))}
    </>
  );
}

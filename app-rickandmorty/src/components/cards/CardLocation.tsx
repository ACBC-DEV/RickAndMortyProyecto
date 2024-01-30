import type { TLocations } from "@/types/Tlocations";
export default function CardLocation({ name, type, dimension }: TLocations) {
  return (
    <article className="bg-mine-shaft-800 border-2 border-white rounded-3xl p-4 duration-200 hover:scale-110 hover:bg-mine-shaft-950">
      <h2 className="text-center text-3xl">{name}</h2>
      <div className="flex gap-2">
        <p>{type}</p>
        <p>{dimension}</p>
      </div>
    </article>
  );
}

import type { TLocations } from "@/types/";
import Link from "next/link";
export default function CardLocation({
  name,
  type,
  dimension,
  id,
}: TLocations) {
  return (
    <article className="bg-mine-shaft-800 border-2 border-white rounded-3xl p-4 duration-200 hover:scale-110 hover:bg-mine-shaft-950">
      <Link href={`/locations/${id}`}>
        <h2 className="text-center text-3xl">{name}</h2>
        <div className="flex gap-2">
          <p>{type}</p>
          <p>{dimension}</p>
        </div>
      </Link>
    </article>
  );
}

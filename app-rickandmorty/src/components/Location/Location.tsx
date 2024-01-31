import type { TLocations } from "@/types/Tlocations";
import ButtonBack from "../buttons/ButtonBack";

export default function Location(props: TLocations) {
  return (
    <article className="grid place-content-center gap-2 my-4 box w-fit mx-auto bg-mine-shaft-900">
      <ButtonBack />
      <h2 className="text-7xl box hover:scale-110 duration-200 w-fit  hover:bg-mine-shaft-800 mx-auto">
        {props.name}
      </h2>
      <div className="flex gap-2 items-center justify-around">
        <p className="box text-2xl">{props.type}</p>
        <p className="box text-2xl">{props.dimension}</p>
        <p className="box text-2xl">{props.residents.length} residents</p>
      </div>
    </article>
  );
}

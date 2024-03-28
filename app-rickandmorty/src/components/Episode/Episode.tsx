import { TEpisode } from "@/types";
import { extractSeasonEpisode, cn } from "@lib/utils";
import ButtonBack from "../buttons/ButtonBack";

export default function Episode({ props }: { props: TEpisode }) {
  const result = extractSeasonEpisode(props.episode);
  let season: number | null = null;
  let episode: number | null = null;

  if (result) {
    season = result.season;
    episode = result.episode;
  }
  return (
    <section className={cn("grid gap-y-4 box w-fit mx-auto my-5 ")}>
      <ButtonBack />
      <h2 className="text-9xl md:text-8xl ">{props.name}</h2>
      <div className="flex justify-evenly text-2xl">
        <p>{season} season</p>
        <p>{episode} episode</p>
        <p>{props.characters.length} characters</p>
      </div>
      <p className="text-center text-xl"> {props.air_date}</p>
      {/* <p>descripcion IA</p> */}
    </section>
  );
}

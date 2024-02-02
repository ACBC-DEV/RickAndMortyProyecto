import { TEpisode } from "@/types";
import { extractSeasonEpisode } from "@lib/utils";
import Link from "next/link";
export default function CardEpisode(props: TEpisode) {
  const result = extractSeasonEpisode(props.episode);
  let season: number | null = null;
  let episode: number | null = null;

  if (result) {
    season = result.season;
    episode = result.episode;
  }
  return (
    <article className="box duration-200  md:hover:scale-110 hover:bg-mine-shaft-900 hover:shadow-sm hover:shadow-white">
      <Link href={`/episodes/${props.id}`}>
        <div className="flex flex-col md:flex-row gap-2 justify-evenly items-center">
          <h2 className="text-4xl text-center">{props.name}</h2>
          <div className="flex gap-x-2 justify-around items-center md:flex-col">
            <p>{season} season</p>
            <p>{episode} episode</p>
          </div>
        </div>
        <p className="text-center">{props.air_date}</p>
      </Link>
    </article>
  );
}

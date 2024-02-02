import { TEpisode } from "@/types";
function extractSeasonEpisode(
  str: string
): { season: number; episode: number } | null {
  const regex = /S(\d+)E(\d+)/;
  const match = str?.match(regex);

  if (match) {
    const season = parseInt(match[1], 10);
    const episode = parseInt(match[2], 10);

    return { season, episode };
  }

  return null;
}
export default function CardEpisode(props: TEpisode) {
  const result = extractSeasonEpisode(props.episode);
  let season: number | null = null;
  let episode: number | null = null;

  if (result) {
    season = result.season;
    episode = result.episode;
  }
  return (
    <article className="box duration-200 hover:scale-110 hover:bg-mine-shaft-900 hover:shadow-sm hover:shadow-white">
      <div className="flex flex-col md:flex-row gap-2 justify-evenly items-center">
        <h2 className="text-4xl text-center">{props.name}</h2>
        <div>
          <p>{season} season</p>
          <p>{episode} episode</p>
        </div>
      </div>
      <p className="text-center">{props.air_date}</p>
    </article>
  );
}

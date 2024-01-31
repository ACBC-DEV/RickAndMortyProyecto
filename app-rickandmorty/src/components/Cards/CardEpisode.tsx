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
    <article className="box grid place-content-center w-fit">
      <div className="flex gap-2">
        <h2 className="text-5xl">{props.name}</h2>
        <div>
          <p>season: {season}</p>
          <p>episode: {episode}</p>
        </div>
      </div>
      <p>Date: {props.air_date}</p>
    </article>
  );
}
//"S05E10", como puedo extaer el numero de la temporada y el numero del episodio de ese string?

import Each from "../Each";
import CardEpisode from "../Cards/CardEpisode";
const getEpisodes = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/episode?page=${page}`
  );
  const data = await response.json();
  return data;
};
export default async function EpisodesList() {
  const data = [];
  for (let i = 1; i <= 3; i++) {
    const { results } = await getEpisodes(i);
    data.push(...results);
  }
  return (
    <div className="flex items-center flex-col gap-2 ">
      <Each Render={CardEpisode} data={data} />
    </div>
  );
}

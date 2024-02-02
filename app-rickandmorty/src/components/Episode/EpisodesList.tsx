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
    <div className="grid  grid-cols-1 p-2 gap-2 md:grid-cols-2 lg:grid-cols-3 md:p-4 lg:px-9">
      <Each Render={CardEpisode} data={data} />
    </div>
  );
}

import { Episode, EpisodesList } from "@components/Episode";
const getEpisode = async (id: string) => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
  const data = await response.json();
  return data;
};

export default async function pageId({ params }: { params: { id: string } }) {
  const data = await getEpisode(params.id);

  return (
    <>
      <Episode props={data} />
      <EpisodesList />
    </>
  );
}

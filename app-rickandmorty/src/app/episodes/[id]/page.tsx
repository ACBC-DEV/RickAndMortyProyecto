import { Episode, EpisodesList } from "@components/Episode";
import { getEpisode } from "@/lib/fetch";
export default async function pageId({ params }: { params: { id: string } }) {
	const data = await getEpisode(parseInt(params.id));

	return (
		<>
			<Episode props={data} />
			<EpisodesList />
		</>
	);
}

import Each from "../Each";
import CardEpisode from "../Cards/CardEpisode";
import { getEpisodes } from "@lib/fetch";
export default async function EpisodesList() {
	const data = [];
	for (let i = 1; i <= 3; i++) {
		const { results } = await getEpisodes(i);
		data.push(...results);
	}
	return (
		<div className="grid grid-cols-1 p-1 gap-2 md:grid-cols-2 lg:grid-cols-3 md:p-4 lg:px-9">
			<Each Render={CardEpisode} data={data} />
		</div>
	);
}

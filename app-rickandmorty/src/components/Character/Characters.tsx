import CardCharacter from "../Cards/CardCharacter";
import Each from "../Each";
import { getCharacters } from "@lib/fetch";
import PaginationComponent from "../buttons/PaginationComponent";

export default async function Characters({ page }: { page: number }) {
	const { results } = await getCharacters(page);
	return (
		<section className="grid place-content-center">
			<div className="grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
				<Each Render={CardCharacter} data={results} />
			</div>
			<PaginationComponent />
		</section>
	);
}

import { LocationGrid, Location } from "@components/Location";
import { getLocation } from "@lib/fetch";
export default async function page({ params }: { params: { id: string } }) {
	const data = await getLocation(parseInt(params.id));
	return (
		<section>
			<Location {...data} />
			<LocationGrid />
		</section>
	);
}

import React from "react";
import Each from "../Each";
import CardLocation from "../Cards/CardLocation";

import { getLocations } from "@lib/fetch";
export default async function LocationGrid() {
	const data = [];
	for (let page = 1; page <= 7; page++) {
		const { results } = await getLocations(page);
		data.push(...results);
	}
	return (
		<div className="grid md:flex md:flex-wrap gap-1 md:items-center justify-center m-2">
			<Each Render={CardLocation} data={data} />
		</div>
	);
}
// className="grid md:flex md:flex-wrap gap-1 md:items-center justify-center m-2"

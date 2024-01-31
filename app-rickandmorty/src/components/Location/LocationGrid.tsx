import React from "react";
import Each from "../Each";
import CardLocation from "../Cards/CardLocation";

const getLocation = async (page = 1) => {
  const rta = await fetch(
    `https://rickandmortyapi.com/api/location?page=${page}`
  );
  const data = await rta.json();
  return data;
};

export default async function LocationGrid() {
  const data = [];
  for (let i = 1; i <= 7; i++) {
    const { results } = await getLocation(i);
    data.push(...results);
  }
  return (
    <div className="grid md:flex md:flex-wrap gap-1 md:items-center justify-center m-2">
      <Each Render={CardLocation} data={data} />
    </div>
  );
}
// className="grid md:flex md:flex-wrap gap-1 md:items-center justify-center m-2"

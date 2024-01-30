import Locations from "@/components/Locations";
const getLocation = async (page = 1) => {
  const rta = await fetch(
    `https://rickandmortyapi.com/api/location?page=${page}`
  );
  const data = await rta.json();
  return data;
};
export default async function page() {
  const data = [];
  for (let i = 1; i <= 7; i++) {
    const { results } = await getLocation(i);
    data.push(...results);
  }
  return <Locations data={data} />;
}

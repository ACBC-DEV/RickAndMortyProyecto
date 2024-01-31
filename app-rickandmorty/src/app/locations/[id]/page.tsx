import { LocationGrid, Location } from "@components/Location";
const getLocation = async (id: string) => {
  const rta = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
  const data = await rta.json();
  return data;
};
export default async function page({ params }: { params: { id: string } }) {
  const data = await getLocation(params.id);
  return (
    <section>
      <Location {...data} />
      <LocationGrid />
    </section>
  );
}

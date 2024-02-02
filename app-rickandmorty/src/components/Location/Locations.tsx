import NavBar from "../NavBar";
import LocationGrid from "./LocationGrid";

export default function Locations() {
  return (
    <>
      <section className="grid place-content-center">
        <h2 className="text-8xl text-center m-14 mb-32">Locations</h2>
        <LocationGrid />
      </section>
    </>
  );
}

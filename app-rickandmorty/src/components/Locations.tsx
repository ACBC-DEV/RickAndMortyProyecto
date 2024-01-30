import { TLocations } from "@/types/Tlocations";
import Each from "./Each";
import CardLocation from "./cards/CardLocation";
import NavBar from "./NavBar";

export default function Locations({ data }: { data: TLocations[] }) {
  return (
    <>
      <NavBar />
      <section className="grid place-content-center">
        <h2 className="text-8xl text-center m-14 mb-32">Locations</h2>
        <div className="grid md:flex md:flex-wrap gap-1 md:items-center justify-center m-2">
          <Each Render={CardLocation} data={data} />
        </div>
      </section>
    </>
  );
}

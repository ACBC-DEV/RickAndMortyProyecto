import NavBar from "@/components/NavBar";
import CharacterGrid from "./CharacterGrid";

export default function Characters() {
  return (
    <section className="grid place-content-center">
      <NavBar />
      <CharacterGrid />
    </section>
  );
}

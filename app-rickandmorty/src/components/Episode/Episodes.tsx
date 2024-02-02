import { EpisodesList } from ".";
import NavBar from "../NavBar";

export default function Episodes() {
  return (
    <>
      <NavBar />
      <h2 className="text-4xl text-center">Episodes</h2>
      <EpisodesList />;
    </>
  );
}

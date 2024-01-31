"use client";
import useStore from "@/store/useStore";
import CardCharacter from "../Cards/CardCharacter";
import Each from "../Each";
import PaginationComponent from "../buttons/PaginationComponent";
import { useEffect } from "react";

export default function CharacterGrid() {
  const { Characters, getCharactersByPage, page, setPage } = useStore();

  useEffect(() => {
    getCharactersByPage(page);
  }, [getCharactersByPage, page]);
  return (
    <>
      <div className="grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        <Each Render={CardCharacter} data={Characters} />
      </div>
      <PaginationComponent />
    </>
  );
}

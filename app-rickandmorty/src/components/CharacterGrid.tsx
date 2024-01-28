"use client";
import useStore from "@/store/useStore";
import CardCharacter from "./CardCharacter";
import Each from "./Each";
import PaginationComponent from "./buttons/PaginationComponent";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function CharacterGrid() {
  const { Characters, getCharactersByPage, pagination, page, setPage } =
    useStore();
  const pathname = usePathname();
  const nextPage = () => {
    setPage(pagination.pages === page ? 1 : page + 1);
  };

  const prevPage = () => {
    setPage(page === 1 ? pagination.pages : page - 1);
  };
  useEffect(() => {
    getCharactersByPage(page);
  }, [getCharactersByPage, page]);
  return (
    <>
      <div className="grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        <Each Render={CardCharacter} data={Characters} />
      </div>
      <PaginationComponent
      // page={page}
      // pagination={pagination}
      // prevPage={prevPage}
      // nextPage={nextPage}
      // pathname={pathname}
      />
    </>
  );
}

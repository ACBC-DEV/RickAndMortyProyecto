"use client";
import { Suspense, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Each from "./Each";
import CardCharacter from "./CardCharacter";
import useStore from "@/store/useStore";
import PaginationComponent from "./buttons/PaginationComponent";
import { useSearchParams, usePathname } from "next/navigation";

export default function Characters() {
  const query = useSearchParams();
  const pathname = usePathname();
  const { Characters, getCharactersByPage, pagination, page, setPage } =
    useStore();
  useEffect(() => {
    setPage(Number(query.get("page")) || 1);
    getCharactersByPage(page);
  }, [getCharactersByPage, page, setPage, query]);
  const nextPage = () => {
    setPage(pagination.pages === page ? 1 : page + 1);
  };

  const prevPage = () => {
    setPage(page === 1 ? pagination.pages : page - 1);
  };

  return (
    <section className="grid place-content-center">
      <NavBar />
      <ul className="grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        <Suspense fallback={<div>Loading...</div>}>
          <Each Render={CardCharacter} data={Characters} />
        </Suspense>
      </ul>
      <PaginationComponent
        page={page}
        pagination={pagination}
        prevPage={prevPage}
        nextPage={nextPage}
        pathname={pathname}
      />
    </section>
  );
}

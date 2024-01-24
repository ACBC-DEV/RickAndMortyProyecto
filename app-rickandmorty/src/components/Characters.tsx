"use client";
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Each from "./Each";
import CardCharacter from "./CardCharacter";
import useStore from "@/store/useStore";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
        <Each Render={CardCharacter} data={Characters} />
      </ul>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={prevPage}
              href={`${pathname}?page=${
                page === 1 ? pagination.pages : page - 1
              }`}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">{page}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={nextPage}
              href={`${pathname}?page=${
                pagination.pages === page ? 1 : page + 1
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
}

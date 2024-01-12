"use client";
import { Suspense, useEffect } from "react";
import type { TCharacters, IInfo } from "../types/Tcharacters";
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

export default function Characters() {
  const { Characters, getCharacters, url, setUrl, pagination } = useStore();
  useEffect(() => {
    getCharacters(url);
  }, [getCharacters, url]);
  return (
    <section className="grid place-content-center">
      <h2>Characters</h2>
      <ul className="grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Each Render={CardCharacter} data={Characters} />
      </ul>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setUrl(pagination.prev)}
              href=""
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">{pagination.pages}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={() => setUrl(pagination.next)} href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
}

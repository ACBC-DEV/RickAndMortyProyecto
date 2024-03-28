"use client";

import { PaginationPrevious } from "@/components/ui/pagination";
import { usePathname } from "next/navigation";
import type { TPagination } from "@/types";
export default function PagePrevious({
  page,
  pagination,
}: {
  page: number;
  pagination: TPagination;
}) {
  const pathname = usePathname();
  return (
    <PaginationPrevious
      className=" rounded-3xl"
      href={`${pathname}?page=${page === 1 ? pagination.pages : page - 1}`}
    />
  );
}

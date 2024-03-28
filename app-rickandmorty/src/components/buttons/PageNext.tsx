"use client";
import { PaginationNext } from "@/components/ui/pagination";
import { usePathname } from "next/navigation";
import type { TPagination } from "@/types";
export default function PageNext({
  page,
  pagination,
}: {
  page: number;
  pagination: TPagination;
}) {
  const pathname = usePathname();
  return (
    <PaginationNext
      className=" rounded-3xl"
      href={`${pathname}?page=${page === pagination.pages ? 1 : page + 1}`}
    />
  );
}

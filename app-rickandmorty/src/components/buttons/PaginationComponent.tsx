// "use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
// import useStore from "@/store/useStore";
import { usePathname } from "next/navigation";
import type { TPagination } from "@/types";
import PagePrevious from "./PagePrevious";
import PageNext from "./PageNext";
const PaginationComponent = ({
  page = 1,
  pagination,
}: {
  page: number;
  pagination: TPagination;
}) => {
  return (
    <Pagination className="my-5">
      <PaginationContent>
        <PaginationItem>
          <PagePrevious page={page} pagination={pagination} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="rounded-3xl" href="#">
            {page}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PageNext page={page} pagination={pagination} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;

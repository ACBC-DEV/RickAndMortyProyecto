"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import useStore from "@/store/useStore";
import { usePathname } from "next/navigation";

const PaginationComponent = () => {
  const { pagination, setPage, page } = useStore();
  const pathname = usePathname();

  const nextPage = () => {
    setPage(pagination.pages === page ? 1 : page + 1);
  };

  const prevPage = () => {
    setPage(page === 1 ? pagination.pages : page - 1);
  };
  return (
    <Pagination className="my-5">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className=" rounded-3xl"
            onClick={prevPage}
            href={`${pathname}?page=${
              page === 1 ? pagination.pages : page - 1
            }`}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="rounded-3xl" href="#">
            {page}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className=" rounded-3xl"
            onClick={nextPage}
            href={`${pathname}?page=${
              pagination.pages === page ? 1 : page + 1
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;

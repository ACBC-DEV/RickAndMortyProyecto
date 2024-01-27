import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationComponentProps {
  page: number;
  pagination: { pages: number };
  prevPage: () => void;
  nextPage: () => void;
  pathname: string;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  page,
  pagination,
  prevPage,
  nextPage,
  pathname,
}) => {
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

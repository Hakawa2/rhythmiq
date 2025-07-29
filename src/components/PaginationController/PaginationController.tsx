import type { PaginationType } from "@/types/pagination";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

type PaginationProps = {
  pagination?: PaginationType;
  handleNewPage: (arg: string) => void;
};

export function PaginationController({
  pagination,
  handleNewPage,
}: PaginationProps) {
  if (!pagination) {
    return <></>;
  }

  return (
    <section className="flex py-6">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer"
              onClick={() => handleNewPage(pagination.previous)}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className="cursor-pointer"
              onClick={() => handleNewPage(pagination.next)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
}

import { ChevronLeft, ChevronRight } from "lucide-react";
import PaginationButton from "./PaginationButton";

export default function Pagination() {
  return (
    <div className="flex items-center justify-center gap-5 w-fit mx-auto text-text-light-primary dark:text-text-dark-primary">
      <button className="cursor-pointer">
        <ChevronLeft size={15} />
      </button>
      <PaginationButton isActive page={1} />
      <PaginationButton page={2} />
      <PaginationButton page={3} />
      <button>...</button>
      <PaginationButton page={10} />
      <button className="cursor-pointer">
        <ChevronRight size={15} />
      </button>
    </div>
  );
}

import { ChevronLeft, ChevronRight } from "lucide-react";
import PaginationButton from "./PaginationButton";

export default function Pagination({
  totalPages,
  setCurrentPage,
  currentPage,
}) {
  function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function getThreePages() {
    if (currentPage <= 2) {
      return [1, 2, 3];
    }
    if (currentPage >= totalPages - 1) {
      return [totalPages - 2, totalPages - 1, totalPages];
    }
    return [currentPage - 1, currentPage, currentPage + 1];
  }

  return (
    <div className="flex items-center justify-center gap-5 w-fit mx-auto text-text-light-primary dark:text-text-dark-primary">
      <button className="cursor-pointer" onClick={prevPage}>
        <ChevronLeft size={15} />
      </button>

      {totalPages <= 5 ? (
        Array.from({ length: totalPages }).map((_, index) => (
          <PaginationButton
            key={index + 1}
            setCurrentPage={setCurrentPage}
            isActive={currentPage === index + 1}
            page={index + 1}
          />
        ))
      ) : (
        <>
          {getThreePages().map((page, index) => (
            <PaginationButton
              key={index}
              setCurrentPage={setCurrentPage}
              isActive={currentPage === page}
              page={page}
            />
          ))}
          <span>...</span>
          <PaginationButton setCurrentPage={setCurrentPage} page={totalPages} />
        </>
      )}

      <button className="cursor-pointer" onClick={nextPage}>
        <ChevronRight size={15} />
      </button>
    </div>
  );
}

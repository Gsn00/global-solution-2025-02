export default function PaginationButton({ page, isActive, setCurrentPage }) {
  return (
    <button
      onClick={() => setCurrentPage(page)}
      className={`cursor-pointer w-8 h-8 flex items-center justify-center rounded-lg ${
        isActive && "bg-blue text-text-dark-primary"
      }`}
    >
      {page}
    </button>
  );
}

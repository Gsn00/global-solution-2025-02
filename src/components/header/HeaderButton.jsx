export default function HeaderButton({ children, onClick }) {
  return (
    <button
      className="cursor-pointer text-text-light-primary dark:text-text-dark-primary font-medium text-sm"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

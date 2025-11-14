export default function FooterButton({ children }) {
  return (
    <button className="cursor-pointer text-text-light-primary/70 dark:text-text-dark-primary/70">
      {children}
    </button>
  );
}

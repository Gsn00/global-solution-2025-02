export default function InformationButton({ title, selected }) {
  return (
    <button
      className={`min-w-full pb-3 cursor-pointer text-text-light-primary dark:text-text-dark-primary ${
        selected && "border-b-3 border-blue"
      }`}
    >
      {title}
    </button>
  );
}

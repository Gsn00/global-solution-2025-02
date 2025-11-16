export default function InformationButton({ title, handleTabClick, selected }) {
  return (
    <button
      onClick={() => handleTabClick(title)}
      className={`min-w-full py-3 cursor-pointer text-text-light-primary dark:text-text-dark-primary ${
        selected && "border-b-3 border-blue"
      }`}
    >
      {title}
    </button>
  );
}

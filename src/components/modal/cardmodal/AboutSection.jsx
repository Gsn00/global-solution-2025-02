export default function AboutSection({ text }) {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <h2 className="font-bold text-xl text-text-light-primary dark:text-text-dark-primary">
        Sobre Mim
      </h2>
      <p className="text-text-light-secondary dark:text-text-dark-secondary">
        {text}
      </p>
    </div>
  );
}

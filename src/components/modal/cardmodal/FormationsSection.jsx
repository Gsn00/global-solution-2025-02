export default function FormationsSection({ formations }) {
  return (
    <div className="flex flex-col w-full h-full">
      <h2 className="font-bold text-xl text-text-light-primary dark:text-text-dark-primary mb-5">
        Formações Acadêmicas
      </h2>

      {formations.map((formation, index) => (
        <div key={index} className="flex flex-col gap-1 pl-7 relative pb-5">
          <div className="bg-blue w-4 h-4 rounded-full absolute top-0 left-0 z-10"></div>
          <div className="bg-border-light dark:bg-border-dark w-0.5 h-full absolute top-0 left-[7px]"></div>
          <p className="text-sm text-blue font-semibold">{formation.year}</p>
          <h3 className="text-lg text-text-light-primary dark:text-text-dark-primary">
            <strong>{formation.degree}</strong> - {formation.institution}
          </h3>
        </div>
      ))}
    </div>
  );
}

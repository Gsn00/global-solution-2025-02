export default function ExperienceSection({ data }) {
  return (
    <div className="flex flex-col w-full h-full">
      <h2 className="font-bold text-xl text-text-light-primary dark:text-text-dark-primary mb-5">
        Experiência Profissional
      </h2>

      {data.map((experience, index) => (
        <div key={index} className="flex flex-col gap-1 pl-7 relative pb-5">
          <div className="bg-blue w-4 h-4 rounded-full absolute top-0 left-0 z-10"></div>
          <div className="bg-border-light dark:bg-border-dark w-0.5 h-full absolute top-0 left-[7px]"></div>
          <p className="text-sm text-blue font-semibold">
            {experience.from} - {experience.to}
          </p>
          <h3 className="text-lg text-text-light-primary dark:text-text-dark-primary">
            <strong>{experience.position}</strong> - {experience.company}
          </h3>
          <p className="text-text-light-secondary dark:text-text-dark-secondary mt-3">
            {experience.description}
          </p>
        </div>
      ))}
    </div>
  );
}

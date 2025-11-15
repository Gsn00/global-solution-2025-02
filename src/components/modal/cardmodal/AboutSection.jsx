import SkillSpan from "../../skillspan";

export default function AboutSection({
  description,
  projects,
  languages,
  interests,
}) {
  return (
    <div className="flex flex-col w-full h-full">
      <h2 className="font-bold text-xl text-text-light-primary dark:text-text-dark-primary mb-5">
        Sobre
      </h2>
      <p className="text-text-light-secondary dark:text-text-dark-secondary mb-5">
        {description}
      </p>

      <h2 className="font-bold text-xl text-text-light-primary dark:text-text-dark-primary mb-5">
        Projetos
      </h2>
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col gap-1 pl-7 relative pb-5">
          <div className="bg-blue w-4 h-4 rounded-full absolute top-0 left-0 z-10"></div>
          <div className="bg-border-light dark:bg-border-dark w-0.5 h-full absolute top-0 left-[7px]"></div>
          <h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary">
            {project.name}
          </h3>
          <p className="text-text-light-secondary dark:text-text-dark-secondary">
            {project.description}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue underline"
          >
            {project.link}
          </a>
        </div>
      ))}

      <h2 className="font-bold text-xl text-text-light-primary dark:text-text-dark-primary my-5">
        Idiomas
      </h2>
      {languages.map((language, index) => (
        <div key={index} className="flex flex-col gap-1 pl-7 relative pb-3">
          <div className="bg-blue w-4 h-4 rounded-full absolute top-0 left-0 z-10"></div>
          <div className="bg-border-light dark:bg-border-dark w-0.5 h-full absolute top-0 left-[7px]"></div>
          <h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary">
            {language.name}
          </h3>
          <p className="text-text-light-secondary dark:text-text-dark-secondary">
            {language.level}
          </p>
        </div>
      ))}

      <h2 className="font-bold text-xl text-text-light-primary dark:text-text-dark-primary my-5">
        Interesses
      </h2>
      <div className="flex flex-wrap gap-1">
        {interests.map((interest, index) => (
          <SkillSpan key={index} skill={interest} />
        ))}
      </div>
    </div>
  );
}

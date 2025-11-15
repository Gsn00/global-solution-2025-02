import SkillSpan from "../../skillspan";

export default function SkillsSection({ skills }) {
  return (
    <div className="flex flex-col w-full h-full gap-5">
      <h2 className="font-bold text-xl text-text-light-primary dark:text-text-dark-primary">
        Habilidades
      </h2>
      <div className="flex flex-wrap gap-1 relative">
        {skills.map((skill, index) => (
          <SkillSpan key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

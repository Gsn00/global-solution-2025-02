import SkillSpan from "../../skillspan";

export default function SkillsSection({ hardskills, softskills }) {
  return (
    <div className="flex flex-col w-full h-full gap-5">
      <h2 className="font-bold text-xl text-text-light-primary dark:text-text-dark-primary">
        Hard Skills
      </h2>
      <div className="flex flex-wrap gap-1 relative">
        {hardskills.map((skill, index) => (
          <SkillSpan key={index} skill={skill} />
        ))}
      </div>

      <h2 className="font-bold text-xl text-text-light-primary dark:text-text-dark-primary">
        Soft Skills
      </h2>
      <div className="flex flex-wrap gap-1 relative">
        {softskills.map((skill, index) => (
          <SkillSpan key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

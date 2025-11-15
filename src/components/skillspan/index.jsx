export default function SkillSpan({ skill }) {
  return (
    <span className="select-none bg-blue/15 text-blue border border-blue/15 even:bg-purple/15 even:text-purple even:border-purple/15 rounded-full px-3 py-1 text-sm font-semibold">
      {skill}
    </span>
  );
}

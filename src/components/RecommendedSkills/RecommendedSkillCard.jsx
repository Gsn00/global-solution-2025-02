import { MoveRight } from "lucide-react";

export default function RecommendedSkillCard({ title, text }) {
  return (
    <div className="py-8 px-5 flex flex-col gap-5 border border-white/10 rounded-lg bg-bg-light dark:bg-bg-dark shadow-md relative overflow-hidden cursor-default select-none">
      <div className="absolute -right-8 -top-8 size-24 rounded-full bg-blue/20 blur-2xl transition-all duration-500 group-hover:scale-150"></div>
      <h2 className="font-bold text-text-light-primary dark:text-text-dark-primary">
        {title}
      </h2>
      <p className="text-text-light-secondary dark:text-text-dark-secondary">
        {text}
      </p>
      <button className="flex gap-3 cursor-pointer text-blue mt-auto w-fit">
        Aprender Agora <MoveRight />
      </button>
    </div>
  );
}

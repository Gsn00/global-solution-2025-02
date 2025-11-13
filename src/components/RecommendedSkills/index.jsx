import { Sparkles } from "lucide-react";

export default function RecommendedSkills() {
  return (
    <div className="p-10 bg-content-light dark:bg-content-dark rounded-lg shadow-md flex flex-col gap-5">
      <div className="flex gap-5">
        <Sparkles
          size={30}
          strokeWidth={1.3}
          className="w-8 h-8 text-blue filter drop-shadow-[0_0_8px_rgba(0,200,255,0.8)] drop-shadow-[0_0_15px_rgba(0,200,255,0.6)]"
        />
        <h1 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary">
          Recomendações Personalizadas para Você
        </h1>
      </div>

      <p className="text-text-light-secondary dark:text-text-dark-secondary">
        Com base no seu perfil, nossa IA sugere as seguintes habilidades para
        impulsionar sua carreira.
      </p>
    </div>
  );
}

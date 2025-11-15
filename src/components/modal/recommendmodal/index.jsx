import { Flame, ThumbsUp, X } from "lucide-react";

export default function RecommendedModal({ closeModal, isModalOpen }) {
  return (
    <div
      className={`select-none relative w-full h-full max-w-[500px] max-h-[200px] bg-bg-light dark:bg-bg-dark border border-blue/20 rounded-lg flex flex-col items-center ${
        isModalOpen && "animate-[modalAppear_0.3s_ease-in-out]"
      }`}
    >
      <button
        onClick={() => closeModal()}
        className="cursor-pointer text-text-light-secondary dark:text-text-dark-secondary absolute top-3 right-3"
      >
        <X />
      </button>

      <div className="flex flex-1 gap-5 items-center justify-center">
        <Flame
          size={60}
          strokeWidth={1}
          className="text-blue animate-[flame_1.2s_ease-in-out_infinite] filter drop-shadow-[0_0_-8px_rgba(0,200,255,0.8)] drop-shadow-[0_0_15px_rgba(0,200,255,0.6)]"
        />
        <h1 className="text-2xl text-text-light-primary dark:text-text-dark-primary font-semibold">
          Usuário Recomendado!
        </h1>
      </div>
    </div>
  );
}

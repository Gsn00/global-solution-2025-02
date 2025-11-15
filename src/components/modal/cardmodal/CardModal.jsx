import { X } from "lucide-react";
import ProfilePic from "../../ProfilePic";
import InformationButton from "./InformationButton";

export default function CardModal({ data, closeModal }) {
  return (
    <div className="relative w-3/5 h-4/5 bg-bg-light dark:bg-bg-dark border border-blue/20 rounded-lg pt-6 flex flex-col items-center">
      <button
        onClick={() => closeModal()}
        className="cursor-pointer text-text-light-secondary dark:text-text-dark-secondary absolute top-3 right-3"
      >
        <X />
      </button>

      <div className="flex flex-col gap-2 items-center border-b border-border-light dark:border-border-dark pb-8 w-full">
        <div className="mx-auto">
          <ProfilePic size={120} src={data.img} />
        </div>

        <h1 className="font-bold text-4xl text-text-light-primary dark:text-text-dark-primary">
          {data.name}
        </h1>
        <p className="text-blue text-xl">{data.role}</p>
        <p className="text-text-light-secondary dark:text-text-dark-secondary">
          São Paulo, Brasil
        </p>
      </div>

      <div className="flex flex-col gap-2 items-center border-b border-border-light dark:border-border-dark pb-8 pt-15 px-10 w-full flex-1 overflow-y-hidden">
        <div className="grid grid-cols-4 w-full border-b border-blue/20">
          <InformationButton selected title="Sobre" />
          <InformationButton title="Experiência" />
          <InformationButton title="Habilidades" />
          <InformationButton title="Contato" />
        </div>

        <div className="flex flex-col w-full overflow-auto mt-5">
          <div className="flex flex-col gap-5 w-full h-full">
            <h2 className="font-bold text-xl text-text-light-primary dark:text-text-dark-primary">
              Resumo Profissional
            </h2>
            <p className="text-text-light-secondary dark:text-text-dark-secondary">
              Apaixonada por tecnologia e ética, com mais de 8 anos de
              experiência na criação de sistemas de inteligência artificial
              responsáveis e transparentes. Busco colaborar em projetos que
              impactem positivamente a sociedade.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 w-full gap-5 p-10">
        <button className="w-full py-4 bg-blue/20 rounded-md cursor-pointer text-blue font-semibold hover:bg-blue/40 transition">
          Recomendar Profissional
        </button>
        <button className="w-full py-4 bg-blue rounded-md cursor-pointer text-white font-semibold hover:bg-blue/60 transition">
          Enviar Mensagem
        </button>
      </div>
    </div>
  );
}

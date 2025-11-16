import { X } from "lucide-react";
import ProfilePic from "../../ProfilePic";
import InformationButton from "./InformationButton";
import AboutSection from "./AboutSection";
import { useState } from "react";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import FormationsSection from "./FormationsSection";

export default function CardModal({
  data,
  closeModal,
  openModal,
  isModalOpen,
}) {
  const [selectedTab, setSelectedTab] = useState("Sobre");

  function handleTabClick(tab) {
    setSelectedTab(tab);
  }

  return (
    <div
      className={`select-none relative w-full h-full max-w-[1150px] max-h-[735px] max-[760px]:text-sm bg-bg-light dark:bg-bg-dark border border-blue/20 rounded-lg pt-6 flex flex-col items-center break-all ${
        isModalOpen && "animate-[modalAppear_0.3s_ease-in-out]"
      }`}
    >
      <button
        onClick={() => closeModal()}
        className="cursor-pointer text-text-light-secondary dark:text-text-dark-secondary absolute top-3 right-3"
      >
        <X />
      </button>

      <div className="flex flex-col gap-2 items-center border-b border-border-light dark:border-border-dark pb-8 w-full">
        <div className="mx-auto">
          <ProfilePic
            size={120}
            src={data.img}
            className={"max-w-35 max-md:max-w-25"}
          />
        </div>

        <h1 className="font-bold text-4xl text-text-light-primary dark:text-text-dark-primary">
          {data.name}
        </h1>
        <p className="text-blue text-xl">{data.role}</p>
        <p className="text-text-light-secondary dark:text-text-dark-secondary">
          {data.locale}
        </p>
      </div>

      <div className="flex flex-col gap-2 items-center border-b border-border-light dark:border-border-dark max-[760px]:p-5 pb-8 pt-8 px-10 w-full flex-1 overflow-y-hidden">
        <div className="grid grid-cols-2 min-[760px]:grid-cols-4 w-full min-[760px]:border-b border-blue/20">
          <InformationButton
            title="Sobre"
            handleTabClick={handleTabClick}
            selected={selectedTab === "Sobre"}
          />
          <InformationButton
            title="Experiência"
            handleTabClick={handleTabClick}
            selected={selectedTab === "Experiência"}
          />
          <InformationButton
            title="Habilidades"
            handleTabClick={handleTabClick}
            selected={selectedTab === "Habilidades"}
          />
          <InformationButton
            title="Formações"
            handleTabClick={handleTabClick}
            selected={selectedTab === "Formações"}
          />
        </div>

        <div className="flex flex-col w-full overflow-auto mt-5">
          {selectedTab == "Sobre" && (
            <AboutSection
              description={data.description}
              projects={data.projects}
              languages={data.languages}
              interests={data.interests}
            />
          )}

          {selectedTab == "Experiência" && (
            <ExperienceSection experiences={data.experiences} />
          )}

          {selectedTab == "Habilidades" && (
            <SkillsSection
              hardskills={data.hardskills}
              softskills={data.softskills}
            />
          )}

          {selectedTab == "Formações" && (
            <FormationsSection formations={data.formations} />
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 min-[760px]:grid-cols-2 w-full gap-5 p-10 max-[760px]:p-5">
        <button
          onClick={() => openModal("recommend")}
          className="w-full py-4 max-[760px]:py-2 bg-blue/20 rounded-md cursor-pointer text-blue font-semibold hover:bg-blue/40 transition"
        >
          Recomendar Profissional
        </button>
        <button
          onClick={() => openModal("chat", data)}
          className="w-full py-4 max-[760px]:py-2 bg-blue rounded-md cursor-pointer text-white font-semibold hover:bg-blue/60 transition"
        >
          Enviar Mensagem
        </button>
      </div>
    </div>
  );
}

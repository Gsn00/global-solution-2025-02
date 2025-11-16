import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import RecommendedSkills from "./components/RecommendedSkills";
import UserList from "./components/userlist";
import Modal from "./components/modal";
import CardModal from "./components/modal/cardmodal";
import RecommendedModal from "./components/modal/recommendmodal";
import ChatModal from "./components/modal/chatmodal";
import MobileHeader from "./components/mobileheader";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalData, setModalData] = useState(null);

  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "Mariana Silva",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbwrSfeuB5oXoho3H9OX2OAWVo5dlK3zeaYPuwPGM8_Ub9lGELvmArvFsERnpnSrd-E2yTUlfbQ4fq-g2h2vMSJAkKXpLGbXPLUdulqzT7RhKv-Wo2LE61GbcUbShcLEv9EeaxW_vpkXwzUEeVHUIp-wHzW8zs1W8FNIO3Zf4lS0eHJNHLP1MgMDLMldyn3WOPoxgj2Ujv7o_bCe4AXtqsH7F_f4waWV06PTp9zWOex5g7IZ8_9SdryXTfBiEZuiXM55ZemN0qUzPu",
      role: "Especialista em IA Ética",
      description:
        "Apaixonada por tecnologia e ética, com mais de 8 anos de experiência na criação de sistemas de inteligência artificial responsáveis e transparentes. Busco colaborar em projetos que impactem positivamente a sociedade.",
      locale: "São Paulo, Brasil",
      hardskills: ["Machine Learning", "Ética Digital", "Python"],
      softskills: [
        "Comunicação",
        "Trabalho em Equipe",
        "Resolução de Problemas",
      ],
      experiences: [
        {
          from: "Jan 2020",
          to: "Presente",
          position: "Engenheira de IA",
          company: "Microsoft",
          description:
            "Desenvolvimento de modelos de aprendizado de máquina para otimizar processos empresariais.",
        },
        {
          from: "Mar 2016",
          to: "Dez 2019",
          position: "Cientista de Dados",
          company: "Data Insights",
          description:
            "Análise de grandes volumes de dados para identificar tendências e apoiar decisões estratégicas.",
        },
      ],
      formations: [
        {
          year: "2020",
          degree: "Mestrado em Ciência da Computação",
          institution: "Universidade de São Paulo (USP)",
        },
        {
          year: "2018",
          degree: "Bacharelado em Ciência da Computação",
          institution: "Universidade Estadual de Campinas (UNICAMP)",
        },
      ],
      projects: [
        {
          name: "Sistema de Recomendação Ética",
          description:
            "Um sistema que recomenda conteúdos de forma ética, respeitando a privacidade dos usuários.",
          link: "https://github.com/marianasilva/sistema-recomendacao-etica",
        },
        {
          name: "Biblioteca Virtual",
          description:
            "Plataforma online para acesso a livros e materiais educacionais de forma gratuita.",
          link: "https://github.com/marianasilva/biblioteca-virtual",
        },
      ],
      certifications: [
        {
          name: "Certificação em Machine Learning",
        },
        {
          name: "Especialista em Ética na IA",
        },
      ],
      languages: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Fluente" },
      ],
      interests: ["Tecnologia", "Ética", "Inovação"],
    },
  ]);

  function handleToggleTheme() {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  function openModal(type, data) {
    setModalType(type);
    setModalData(data);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setModalType("");
    setModalData(null);
  }

  function toggleTheme() {
    const root = document.documentElement;

    if (localStorage.theme === "dark") root.classList.add("dark");

    root.classList.toggle("dark");
    localStorage.theme = root.classList.contains("dark") ? "dark" : "light";
  }

  return (
    <section className="w-full min-h-screen bg-bg-light dark:bg-bg-dark">
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          {modalType === "card" && (
            <CardModal
              data={modalData}
              closeModal={closeModal}
              openModal={openModal}
              isModalOpen={isModalOpen}
            />
          )}

          {modalType === "recommend" && (
            <RecommendedModal
              closeModal={closeModal}
              isModalOpen={isModalOpen}
            />
          )}

          {modalType === "chat" && (
            <ChatModal
              data={modalData}
              closeModal={closeModal}
              isModalOpen={isModalOpen}
            />
          )}
        </Modal>
      )}

      <Header toggleTheme={handleToggleTheme} isDarkMode={isDarkMode} />
      <MobileHeader toggleTheme={handleToggleTheme} isDarkMode={isDarkMode} />
      <section className="px-5 md:px-20 w-full max-w-[1600px] mx-auto min-h-screen flex flex-col gap-8 py-8">
        <RecommendedSkills />
        <UserList openModal={openModal} userList={userList} />
      </section>
      <Footer />
    </section>
  );
}

export default App;

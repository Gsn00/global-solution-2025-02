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
        <UserList openModal={openModal} closeModal={closeModal} />
      </section>
      <Footer />
    </section>
  );
}

export default App;

import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import RecommendedSkills from "./components/RecommendedSkills";
import UserList from "./components/userlist";
import Modal from "./components/modal";
import CardModal from "./components/modal/cardmodal";
import RecommendedModal from "./components/modal/recommendmodal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalData, setModalData] = useState(null);

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
        </Modal>
      )}

      <Header toggleTheme={toggleTheme} />
      <section className="px-55 w-full min-h-screen flex flex-col gap-8 py-8">
        <RecommendedSkills />
        <UserList openModal={openModal} closeModal={closeModal} />
      </section>
      <Footer />
    </section>
  );
}

export default App;

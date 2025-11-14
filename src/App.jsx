import Header from "./components/header";
import RecommendedSkills from "./components/RecommendedSkills";
import UserList from "./components/userlist";

function App() {
  function toggleTheme() {
    const root = document.documentElement;

    if (localStorage.theme === "dark") root.classList.add("dark");

    root.classList.toggle("dark");
    localStorage.theme = root.classList.contains("dark") ? "dark" : "light";
  }

  return (
    <section className="w-full min-h-screen bg-bg-light dark:bg-bg-dark">
      <Header toggleTheme={toggleTheme} />
      <section className="px-55 w-full min-h-screen flex flex-col gap-8 py-8">
        <RecommendedSkills />
        <UserList />
      </section>
    </section>
  );
}

export default App;

import { Sun, UserRound } from "lucide-react";
import HeaderButton from "./HeaderButton";
import ProfilePic from "../ProfilePic";

export default function Header({ toggleTheme }) {
  return (
    <header className="w-full px-8 py-4 flex items-center justify-between border-b border-solid border-border-light bg-background-light/80 backdrop-blur-sm dark:border-border-dark dark:bg-background-dark/80">
      <div className="flex items-center gap-5">
        <h1 className="text-text-light-primary dark:text-text-dark-primary text-lg font-bold leading-tight tracking-[-0.015em]">
          Global Solution
        </h1>
        <input
          className="py-1 px-4 text-sm rounded-lg border border-border-light bg-content-light text-text-light-primary placeholder:text-text-light-secondary focus:border-primary focus:ring-1 focus:ring-primary/10 dark:border-border-dark dark:bg-content-dark dark:text-text-dark-primary dark:placeholder:text-text-dark-secondary dark:focus:border-primary"
          type="text"
          placeholder="Buscar por nome, skill..."
        />
      </div>

      <nav className="flex gap-5">
        <HeaderButton>Inicio</HeaderButton>
        <HeaderButton>Perfil</HeaderButton>
        <HeaderButton>Notificações</HeaderButton>

        <button
          className="cursor-pointer rounded-lg flex items-center justify-center w-9 h-9 text-text-light-primary dark:text-text-dark-primary bg-content-light dark:bg-content-dark border border-border-light dark:border-border-dark"
          onClick={() => toggleTheme()}
        >
          <Sun size={18} />
        </button>
        <button>
          <ProfilePic
            src="/path/to/profile-pic.jpg"
            alt="Profile Picture"
            size={18}
          />
        </button>
      </nav>
    </header>
  );
}

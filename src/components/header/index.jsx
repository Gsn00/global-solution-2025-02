import { Sun, UserRound } from "lucide-react";
import HeaderButton from "./HeaderButton";
import ProfilePic from "../ProfilePic";

export default function Header({ toggleTheme }) {
  return (
    <header className="sticky top-0 left-0 z-10 w-full px-8 py-4 flex items-center justify-between border-b border-solid border-border-light bg-background-light/80 backdrop-blur-sm dark:border-border-dark dark:bg-background-dark/80">
      <div className="flex items-center gap-5">
        <h1 className="text-text-light-primary dark:text-text-dark-primary text-lg font-bold leading-tight tracking-[-0.015em] select-none">
          THE FUTURE
        </h1>
        <input
          className="py-1 px-4 text-sm rounded-lg border border-border-light bg-content-light text-text-light-primary placeholder:text-text-light-secondary focus:border-primary focus:ring-1 focus:ring-primary/10 dark:border-border-dark dark:bg-content-dark dark:text-text-dark-primary dark:placeholder:text-text-dark-secondary dark:focus:border-primary"
          type="text"
          placeholder="Buscar por nome, skill..."
        />
      </div>

      <nav className="flex gap-5 items-center">
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArwQWNug3-vFi3LdTUK7wzyMlg1xs4mo7B9yEspk11XPJeNYJ-4ze7EW4nYdrZ7-6lpQJwY_kxgXxMSTCv1-fBxqNAIsDXtdqXJN6U8eluZ_XbYOJRYDH069MPFsqpkZ7Bl__DLqzyGJ0lmpIDTpzA6HReYEYmEAv1YQpr7O9BEjMUY4ZQBBdV-J6JLzWxtPwgmOKpT8oeUVtn-OHRxcvAJlX_U44RYeE9a4pynjWaM5zo4Fsq-zLZBAUUjG7AhF-i4rbFXAtY0MFo"
            alt="Profile Picture"
            size={32}
          />
        </button>
      </nav>
    </header>
  );
}

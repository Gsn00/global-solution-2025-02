import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import ProfilePic from "../ProfilePic";

export default function MobileHeader({ toggleTheme, isDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <section className="min-[760px]:hidden w-full sticky top-0 left-0 z-10">
      <header className="flex w-full px-8 py-4 items-center justify-between border-b border-solid border-border-light bg-background-light/80 backdrop-blur-sm dark:border-border-dark dark:bg-background-dark/80">
        <button onClick={() => handleToggleMenu()} className="cursor-pointer">
          <Menu className="text-text-light-primary dark:text-text-dark-primary" />
        </button>

        <div className="flex items-center gap-5">
          <h1 className="text-text-light-primary dark:text-text-dark-primary text-lg font-bold leading-tight tracking-[-0.015em] select-none">
            THE FUTURE
          </h1>
        </div>

        <button className="cursor-pointer">
          <ProfilePic
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArwQWNug3-vFi3LdTUK7wzyMlg1xs4mo7B9yEspk11XPJeNYJ-4ze7EW4nYdrZ7-6lpQJwY_kxgXxMSTCv1-fBxqNAIsDXtdqXJN6U8eluZ_XbYOJRYDH069MPFsqpkZ7Bl__DLqzyGJ0lmpIDTpzA6HReYEYmEAv1YQpr7O9BEjMUY4ZQBBdV-J6JLzWxtPwgmOKpT8oeUVtn-OHRxcvAJlX_U44RYeE9a4pynjWaM5zo4Fsq-zLZBAUUjG7AhF-i4rbFXAtY0MFo"
            alt="Profile Picture"
            className={"max-w-10"}
          />
        </button>
      </header>

      <div
        onClick={() => handleToggleMenu()}
        className={`fixed w-full h-full top-0 left-0 bg-black/80 z-10 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      ></div>
      <nav
        className={`fixed top-0 left-0 z-20 w-[70vw] h-screen border-t border-solid border-border-light bg-content-light backdrop-blur-sm dark:border-border-dark dark:bg-content-dark text-text-light-primary dark:text-text-dark-primary flex-col ${
          isMenuOpen
            ? "flex animate-[mobileMenuAppear_0.3s_ease-in-out]"
            : "hidden animate-[mobileMenuDisappear_0.3s_ease-in-out]"
        }`}
      >
        <div className="flex justify-between border-b p-5 border-border-light dark:border-border-dark">
          <h1 className="text-2xl">Menu</h1>
          <button onClick={() => handleToggleMenu()} className="cursor-pointer">
            <X size={34} strokeWidth={1} />
          </button>
        </div>

        <ul className="p-5">
          <li>
            <div className="flex w-full border border-border-light dark:border-border-dark rounded-lg dark:focus:border-primary scale-105">
              <input
                className="w-full py-3 px-4 rounded-lg bg-content-light text-text-light-primary placeholder:text-text-light-secondary dark:bg-content-dark dark:text-text-dark-primary dark:placeholder:text-text-dark-secondary"
                type="text"
                placeholder="Buscar por nome, skill..."
              />
              <button>
                <Search
                  size={18}
                  className="text-text-light-primary dark:text-text-dark-primary transform scale-x-[-1] mr-3"
                />
              </button>
            </div>
          </li>

          <li>
            <button className="w-full font-light text-left py-5 text-xl cursor-pointer border-b border-border-light dark:border-border-dark">
              Início
            </button>
          </li>

          <li>
            <button className="w-full font-light text-left py-5 text-xl cursor-pointer border-b border-border-light dark:border-border-dark">
              Notificações
            </button>
          </li>

          <li>
            <button className="w-full font-light text-left py-5 text-xl cursor-pointer border-b border-border-light dark:border-border-dark">
              Minha Conta
            </button>
          </li>

          <li className="py-5">
            <button
              onClick={() => toggleTheme()}
              className="bg-blue/60 border border-blue w-full py-2 rounded-lg flex gap-1 justify-center cursor-pointer"
            >
              {isDarkMode ? "Light" : "Dark"}
              {" Mode"}
              {isDarkMode ? <Sun /> : <Moon />}
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}

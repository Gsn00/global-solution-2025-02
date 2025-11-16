import FooterButton from "./FooterButton";

export default function Footer() {
  return (
    <footer className="px-15 min-[1550px]:px-55 bg-content-light dark:bg-content-dark border-t border-border-light dark:border-border-dark">
      <div className="flex max-[1180px]:flex-col max-[1180px]:items-center max-[1180px]:justify-center max-[1180px]:gap-10 justify-between py-10">
        <div className="flex flex-col gap-5 w-[35%] max-[1180px]:w-full max-[1180px]:text-center">
          <h1 className="font-bold text-2xl text-text-light-primary dark:text-text-dark-primary">
            THE FUTURE
          </h1>
          <p className="text-text-light-secondary dark:text-text-dark-secondary max-w-[550px] mx-auto">
            Nossa missão é capacitar profissionais para os desafios do futuro,
            conectando talento e inovação através de reskilling e upskilling
            contínuos.
          </p>
        </div>

        <div className="flex flex-col items-start gap-5 max-[1180px]:gap-2 text-text-light-primary dark:text-text-dark-primary max-[1180px]:items-center max-[1180px]:text-center">
          <h2 className="font-bold">EMPRESA</h2>
          <FooterButton>Sobre Nós</FooterButton>
          <FooterButton>Carreiras</FooterButton>
          <FooterButton>Contato</FooterButton>
        </div>

        <div className="flex flex-col items-start gap-5 max-[1180px]:gap-2 text-text-light-primary dark:text-text-dark-primary max-[1180px]:items-center max-[1180px]:text-center">
          <h2 className="font-bold">RECURSOS</h2>
          <FooterButton>Blog</FooterButton>
          <FooterButton>FAQ</FooterButton>
          <FooterButton>Lista de Competências</FooterButton>
        </div>

        <div className="flex flex-col items-start gap-5 max-[1180px]:gap-2 text-text-light-primary dark:text-text-dark-primary max-[1180px]:items-center max-[1180px]:text-center">
          <h2 className="font-bold">LEGAL</h2>
          <FooterButton>Termos de Serviço</FooterButton>
          <FooterButton>Política de Privacidade</FooterButton>
        </div>
      </div>

      <div className="flex justify-center border-t py-10 border-border-light dark:border-border-dark">
        <p className="text-text-light-secondary dark:text-text-dark-secondary text-center">
          © 2025 THE FUTURE. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

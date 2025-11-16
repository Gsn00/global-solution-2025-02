import { BriefcaseBusiness, CodeXml, MapPin } from "lucide-react";
import Select from "../select";
import UserCard from "./UserCard";
import Pagination from "../pagination";

export default function UserList({ openModal }) {
  return (
    <section className="flex flex-col gap-5 px-5">
      <h1 className="font-bold text-5xl text-text-light-primary dark:text-text-dark-primary">
        Explorar Talentos
      </h1>
      <p className="text-xl text-text-light-secondary dark:text-text-dark-secondary">
        Encontre os profissionais mais qualificados para os desafios do amanhã.
      </p>
      <div className="flex flex-wrap gap-5">
        <Select icon={<BriefcaseBusiness size={15} />} placeholder="Area">
          <option value="Data Science">Ciência de Dados</option>
          <option value="Web Development">Desenvolvimento Web</option>
          <option value="Cybersecurity">Cibersegurança</option>
        </Select>

        <Select icon={<MapPin size={15} />} placeholder="Cidade">
          <option value="São Paulo">São Paulo</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
          <option value="Belo Horizonte">Belo Horizonte</option>
        </Select>

        <Select icon={<CodeXml size={15} />} placeholder="Tecnologia">
          <option value="Python">Python</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Java">Java</option>
        </Select>
      </div>

      <div className="grid grid-cols-1 min-[760px]:grid-cols-2 min-[1180px]:grid-cols-4 gap-5">
        <UserCard
          name={"Mariana Silva"}
          role={"Especialista em IA Ética"}
          skills={["Machine Learning", "Ética Digital", "Python"]}
          img={
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCbwrSfeuB5oXoho3H9OX2OAWVo5dlK3zeaYPuwPGM8_Ub9lGELvmArvFsERnpnSrd-E2yTUlfbQ4fq-g2h2vMSJAkKXpLGbXPLUdulqzT7RhKv-Wo2LE61GbcUbShcLEv9EeaxW_vpkXwzUEeVHUIp-wHzW8zs1W8FNIO3Zf4lS0eHJNHLP1MgMDLMldyn3WOPoxgj2Ujv7o_bCe4AXtqsH7F_f4waWV06PTp9zWOex5g7IZ8_9SdryXTfBiEZuiXM55ZemN0qUzPu"
          }
          onClick={() => {
            openModal("card", {
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
            });
          }}
        />

        <UserCard
          name={"Mariana Silva"}
          role={"Especialista em IA Ética"}
          skills={["Machine Learning", "Ética Digital", "Python"]}
          img={
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCbwrSfeuB5oXoho3H9OX2OAWVo5dlK3zeaYPuwPGM8_Ub9lGELvmArvFsERnpnSrd-E2yTUlfbQ4fq-g2h2vMSJAkKXpLGbXPLUdulqzT7RhKv-Wo2LE61GbcUbShcLEv9EeaxW_vpkXwzUEeVHUIp-wHzW8zs1W8FNIO3Zf4lS0eHJNHLP1MgMDLMldyn3WOPoxgj2Ujv7o_bCe4AXtqsH7F_f4waWV06PTp9zWOex5g7IZ8_9SdryXTfBiEZuiXM55ZemN0qUzPu"
          }
        />

        <UserCard
          name={"Mariana Silva"}
          role={"Especialista em IA Ética"}
          skills={["Machine Learning", "Ética Digital", "Python"]}
          img={
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCbwrSfeuB5oXoho3H9OX2OAWVo5dlK3zeaYPuwPGM8_Ub9lGELvmArvFsERnpnSrd-E2yTUlfbQ4fq-g2h2vMSJAkKXpLGbXPLUdulqzT7RhKv-Wo2LE61GbcUbShcLEv9EeaxW_vpkXwzUEeVHUIp-wHzW8zs1W8FNIO3Zf4lS0eHJNHLP1MgMDLMldyn3WOPoxgj2Ujv7o_bCe4AXtqsH7F_f4waWV06PTp9zWOex5g7IZ8_9SdryXTfBiEZuiXM55ZemN0qUzPu"
          }
        />

        <UserCard
          name={"Mariana Silva"}
          role={"Especialista em IA Ética"}
          skills={["Machine Learning", "Ética Digital", "Python"]}
          img={
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCbwrSfeuB5oXoho3H9OX2OAWVo5dlK3zeaYPuwPGM8_Ub9lGELvmArvFsERnpnSrd-E2yTUlfbQ4fq-g2h2vMSJAkKXpLGbXPLUdulqzT7RhKv-Wo2LE61GbcUbShcLEv9EeaxW_vpkXwzUEeVHUIp-wHzW8zs1W8FNIO3Zf4lS0eHJNHLP1MgMDLMldyn3WOPoxgj2Ujv7o_bCe4AXtqsH7F_f4waWV06PTp9zWOex5g7IZ8_9SdryXTfBiEZuiXM55ZemN0qUzPu"
          }
        />

        <UserCard
          name={"Mariana Silva"}
          role={"Especialista em IA Ética"}
          skills={["Machine Learning", "Ética Digital", "Python"]}
          img={
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCbwrSfeuB5oXoho3H9OX2OAWVo5dlK3zeaYPuwPGM8_Ub9lGELvmArvFsERnpnSrd-E2yTUlfbQ4fq-g2h2vMSJAkKXpLGbXPLUdulqzT7RhKv-Wo2LE61GbcUbShcLEv9EeaxW_vpkXwzUEeVHUIp-wHzW8zs1W8FNIO3Zf4lS0eHJNHLP1MgMDLMldyn3WOPoxgj2Ujv7o_bCe4AXtqsH7F_f4waWV06PTp9zWOex5g7IZ8_9SdryXTfBiEZuiXM55ZemN0qUzPu"
          }
        />

        <UserCard
          name={"Mariana Silva"}
          role={"Especialista em IA Ética"}
          skills={["Machine Learning", "Ética Digital", "Python"]}
          img={
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCbwrSfeuB5oXoho3H9OX2OAWVo5dlK3zeaYPuwPGM8_Ub9lGELvmArvFsERnpnSrd-E2yTUlfbQ4fq-g2h2vMSJAkKXpLGbXPLUdulqzT7RhKv-Wo2LE61GbcUbShcLEv9EeaxW_vpkXwzUEeVHUIp-wHzW8zs1W8FNIO3Zf4lS0eHJNHLP1MgMDLMldyn3WOPoxgj2Ujv7o_bCe4AXtqsH7F_f4waWV06PTp9zWOex5g7IZ8_9SdryXTfBiEZuiXM55ZemN0qUzPu"
          }
        />
      </div>
      <Pagination />
    </section>
  );
}

import { Brain, BriefcaseBusiness, Clock, TrendingUp } from "lucide-react";
import Select from "../select";

export default function UserList() {
  return (
    <section className="flex flex-col gap-5 px-5">
      <h1 className="font-bold text-5xl text-text-light-primary dark:text-text-dark-primary">
        Explorar Talentos
      </h1>
      <p className="text-xl text-text-light-secondary dark:text-text-dark-secondary">
        Encontre os profissionais mais qualificados para os desafios do amanhã.
      </p>
      <div className="flex gap-5">
        <Select icon={<Brain size={15} />} placeholder="Habilidade">
          <option value="react">React</option>
          <option value="node">Node.js</option>
          <option value="python">Python</option>
        </Select>

        <Select icon={<BriefcaseBusiness size={15} />} placeholder="Cargos">
          <option value="Cientista de Dados">Cientista de Dados</option>
          <option value="Desenvolvedor">Desenvolvedor</option>
          <option value="Engenheiro de Software">Engenheiro de Software</option>
        </Select>

        <Select icon={<Clock size={15} />} placeholder="Disponibilidade">
          <option value="full-time">Tempo Integral</option>
          <option value="part-time">Meio Período</option>
          <option value="freelance">Freelancer</option>
        </Select>

        <Select
          icon={<TrendingUp size={15} />}
          placeholder="Nível deExperiência"
        >
          <option value="trainee">Trainee</option>
          <option value="junior">Júnior</option>
          <option value="mid">Pleno</option>
          <option value="senior">Sênior</option>
        </Select>
      </div>
    </section>
  );
}

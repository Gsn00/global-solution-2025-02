import { BriefcaseBusiness, CodeXml, MapPin } from "lucide-react";
import Select from "../select";
import UserCard from "./UserCard";
import Pagination from "../pagination";
import FilterCard from "./FilterCard";
import { useState } from "react";

export default function UserList({ openModal, userList }) {
  const [areas, setAreas] = useState([
    "Cientista de Dados",
    "Designer UX/UI",
    "Engenheira de Software",
    "Engenheiro de Software",
    "Especialista em Cloud",
    "Gerente de Projetos",
  ]);

  const [states, setStates] = useState([
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
  ]);

  const [technologies, setTechnologies] = useState([
    "Tecnologia",
    "Adobe XD",
    "Ansible",
    "AWS",
    "Azure",
    "CI/CD",
    "Deep Learning",
    "Design System",
    "DevOps",
    "Docker",
    "Estatística",
    "Figma",
    "GCP",
    "Gestão de Riscos",
    "HTML/CSS",
    "Java",
    "Jira",
    "Kanban",
    "Kubernetes",
    "Liderança de Equipes",
    "Machine Learning",
    "Matemática Aplicada",
    "Microservices",
    "Miro",
    "Orçamento",
    "PMBOK",
    "Pandas",
    "Prototipagem",
    "Python",
    "C#",
    "Redes",
    "SQL",
    "Scrum",
    "Segurança em Cloud",
    "Sketch",
    "Spring Boot",
    "TensorFlow",
    "Terraform",
    "Usabilidade",
    "User Research",
  ]);

  const [filters, setFilters] = useState([]);

  function addFilter(filter) {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  }

  function removeFilter(filter) {
    setFilters(filters.filter((f) => f !== filter));
  }

  return (
    <section className="flex flex-col gap-5 px-5">
      <h1 className="font-bold text-3xl min-[760px]:text-5xl text-text-light-primary dark:text-text-dark-primary">
        Explorar Talentos
      </h1>
      <p className="text-xl text-text-light-secondary dark:text-text-dark-secondary">
        Encontre os profissionais mais qualificados para os desafios do amanhã.
      </p>
      <div className="flex flex-wrap gap-5">
        <Select
          icon={<BriefcaseBusiness size={15} />}
          placeholder="Area"
          onChange={(e) => addFilter(e.target.value)}
        >
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </Select>

        <Select
          icon={<MapPin size={15} />}
          placeholder="Estado"
          onChange={(e) => addFilter(e.target.value)}
        >
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </Select>

        <Select
          icon={<CodeXml size={15} />}
          placeholder="Tecnologia"
          onChange={(e) => addFilter(e.target.value)}
        >
          {technologies.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </Select>
      </div>

      <div className="flex gap-2 w-full flex-wrap">
        {filters.length === 0 && (
          <span className="text-text-light-secondary dark:text-text-dark-secondary min-h-[30px]">
            Nenhum filtro aplicado.
          </span>
        )}
        {filters.map((filter) => (
          <FilterCard
            key={filter}
            title={filter}
            onRemove={() => removeFilter(filter)}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 min-[760px]:grid-cols-2 min-[1180px]:grid-cols-4 gap-5">
        {userList.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            role={user.role}
            skills={user.hardskills}
            img={user.img}
            onClick={() => openModal("card", user)}
          />
        ))}
      </div>
      <Pagination />
    </section>
  );
}

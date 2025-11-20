import { BriefcaseBusiness, CodeXml, MapPin } from "lucide-react";
import Select from "../select";
import UserCard from "./UserCard";
import Pagination from "../pagination";
import FilterCard from "./FilterCard";
import { useMemo, useState } from "react";

export default function UserList({ openModal, userList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;
  const areas = [
    "Cloud Specialist",
    "Data Scientist",
    "Project Manager",
    "Software Engineer",
    "UX/UI Designer",
  ];

  const states = [
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
  ];

  const technologies = [
    "AWS",
    "Adobe XD",
    "Ansible",
    "Azure",
    "CI/CD",
    "Deep Learning",
    "Design System",
    "DevOps",
    "Docker",
    "Estatística",
    "Excel",
    "Figma",
    "GCP",
    "Gestão de Riscos",
    "HTML/CSS",
    "Java",
    "JavaScript",
    "Jira",
    "Kanban",
    "Kubernetes",
    "Liderança de Equipes",
    "Machine Learning",
    "Microservices",
    "Miro",
    "Orçamento",
    "PMBOK",
    "Pandas",
    "Prototipagem",
    "Python",
    "R",
    "React",
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
  ];

  const [filters, setFilters] = useState([]);

  function addFilter(filter) {
    if (
      !filters.find((f) => f.type === filter.type && f.value === filter.value)
    ) {
      setFilters([...filters, filter]);
    }
    setCurrentPage(1);
  }

  function removeFilter(filter) {
    setFilters(filters.filter((f) => f.value !== filter.value));
    setCurrentPage(1);
  }

  const filteredList = useMemo(() => {
    if (filters.length === 0) return userList;

    return userList.filter((user) => {
      return filters.every((filter) => {
        if (filter.type === "area") {
          return user.role === filter.value;
        } else if (filter.type === "state") {
          return user.state === filter.value;
        } else if (filter.type === "technology") {
          return user.hardskills.includes(filter.value);
        }
        return true;
      });
    });
  }, [filters, userList]);

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
          addFilter={addFilter}
        >
          {areas.map((area) => (
            <option key={area} value={area} type="area">
              {area}
            </option>
          ))}
        </Select>

        <Select
          icon={<MapPin size={15} />}
          placeholder="Estado"
          addFilter={addFilter}
        >
          {states.map((state) => (
            <option key={state} value={state} type="state">
              {state}
            </option>
          ))}
        </Select>

        <Select
          icon={<CodeXml size={15} />}
          placeholder="Tecnologia"
          addFilter={addFilter}
        >
          {technologies.map((tech) => (
            <option key={tech} value={tech} type="technology">
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
            key={filter.value}
            title={filter.value}
            onRemove={() => removeFilter(filter)}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 min-[760px]:grid-cols-2 min-[1180px]:grid-cols-4 gap-5">
        {filteredList
          .slice(
            currentPage * usersPerPage - usersPerPage,
            usersPerPage * currentPage
          )
          .map((user) => (
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
      <Pagination
        totalPages={Math.ceil(filteredList.length / usersPerPage)}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
}

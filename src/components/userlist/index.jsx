import { BriefcaseBusiness, CodeXml, MapPin } from "lucide-react";
import Select from "../select";
import UserCard from "./UserCard";
import Pagination from "../pagination";

export default function UserList({ openModal, userList }) {
  return (
    <section className="flex flex-col gap-5 px-5">
      <h1 className="font-bold text-3xl min-[760px]:text-5xl text-text-light-primary dark:text-text-dark-primary">
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

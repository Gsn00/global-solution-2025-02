import ProfilePic from "../ProfilePic";

export default function UserCard({ img, name, role, skills }) {
  return (
    <div className="flex flex-col items-center bg-content-light dark:bg-content-dark p-5 rounded-lg shadow-md gap-3 select-none cursor-pointer transform transition-transform! hover:scale-103 duration-100">
      <ProfilePic src={img} alt={name} size={100} />
      <h2 className="font-bold text-2xl text-text-light-primary dark:text-text-dark-primary">
        {name}
      </h2>
      <p className="text-text-light-secondary dark:text-text-dark-secondary">
        {role}
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue/15 text-blue border border-blue/15 even:bg-purple/15 even:text-purple even:border-purple/15 rounded-full px-3 py-1 text-sm font-semibold"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

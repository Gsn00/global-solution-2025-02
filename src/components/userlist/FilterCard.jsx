import { X } from "lucide-react";

export default function FilterCard({ title, onRemove }) {
  return (
    <span className="select-none flex gap-2 items-center bg-blue/15 text-blue border border-blue/15 even:bg-purple/15 even:text-purple even:border-purple/15 rounded-full px-3 py-1 text-sm font-semibold  hover:text-blue/70 even:hover:text-purple/70">
      {title}
      <X size={18} className="cursor-pointer" onClick={onRemove} />
    </span>
  );
}

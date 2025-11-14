import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Select({ children, icon, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value, label) => {
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-content-light dark:bg-content-dark text-text-light-primary dark:text-text-dark-primary rounded-lg px-2 py-1 w-full min-w-0 max-w-full text-left shadow-md flex gap-2 justify-between items-center cursor-pointer"
      >
        {icon}
        <span>{placeholder}</span>
        <ChevronDown
          size={15}
          className={`text-text-light-primary dark:text-text-dark-primary transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <ul className="absolute z-50 mt-1 min-w-full bg-content-light dark:bg-content-dark text-text-light-primary dark:text-text-dark-primary border border-blue/20 rounded-lg shadow-lg max-h-60 overflow-auto">
          {children &&
            React.Children.map(children, (child) => (
              <li
                key={child.props.value}
                onClick={() =>
                  handleSelect(child.props.value, child.props.children)
                }
                className="px-5 py-2 cursor-pointer hover:bg-blue/10 rounded-md"
              >
                {child.props.children}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

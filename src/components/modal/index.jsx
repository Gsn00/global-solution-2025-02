import { createPortal } from "react-dom";

export default function Modal({ children }) {
  return createPortal(
    <div className="flex items-center justify-center fixed top-0 left-0 z-20 w-full h-screen bg-black/50">
      {children}
    </div>,
    document.body
  );
}

import { SendHorizontal, X } from "lucide-react";
import ProfilePic from "../../ProfilePic";
import Message from "./Message";
import { useEffect, useRef, useState } from "react";

export default function ChatModal({ data, closeModal }) {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSendMessage(message) {
    setMessages([...messages, message]);
    setInputValue("");
  }

  function handleOnKeyPress(e) {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      handleSendMessage(inputValue);
    }
  }

  return (
    <div
      className={`select-none relative w-full h-full max-w-[900px] max-h-[635px] bg-bg-light dark:bg-bg-dark border border-blue/20 rounded-lg pt-6 flex flex-col items-center `}
    >
      <button
        onClick={() => closeModal()}
        className="cursor-pointer text-text-light-secondary dark:text-text-dark-secondary absolute top-3 right-3"
      >
        <X />
      </button>
      <div className="flex flex-col gap-2 items-center border-b border-border-light dark:border-border-dark pb-8 w-full">
        <div className="mx-auto">
          <ProfilePic size={120} src={data.img} />
        </div>

        <h1 className="font-bold text-4xl text-text-light-primary dark:text-text-dark-primary">
          {data.name}
        </h1>
        <p className="text-blue text-xl">{data.role}</p>
        <p className="text-text-light-secondary dark:text-text-dark-secondary">
          {data.locale}
        </p>
      </div>
      <div className="flex flex-col gap-3 items-end mt-5 pl-5 pr-3 w-full flex-1 text-text-light-primary dark:text-text-dark-primary overflow-y-auto mr-5">
        {messages.map((msg, index) => (
          <Message key={index} content={msg} />
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="p-5 w-full flex">
        <div className="border border-blue/20 focus:border-2 w-full flex rounded-full">
          <input
            type="text"
            placeholder="Digite aqui..."
            className="w-full py-3 px-6 bg-content-light dark:bg-content-dark text-text-light-primary dark:text-text-dark-primary rounded-tl-full rounded-bl-full"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleOnKeyPress}
          />
          <div className="p-1 flex flex-col items-center justify-center bg-content-light dark:bg-content-dark text-text-light-primary dark:text-text-dark-primary rounded-tr-full rounded-br-full">
            <button
              onClick={() => handleSendMessage(inputValue)}
              className="bg-blue text-white w-35 flex items-center justify-center flex-1 rounded-full cursor-pointer hover:bg-blue/60 transition"
            >
              <SendHorizontal />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

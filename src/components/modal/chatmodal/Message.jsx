export default function Message({ role, content }) {
  return (
    <p
      className={`py-2 px-3 bg-blue/40 border border-blue rounded-b-2xl shadow-sm max-w-[500px] wrap-break-words ${
        role === "user"
          ? "self-end bg-green/40 border-green rounded-tl-2xl"
          : "self-start rounded-tr-2xl bg-gray-200/40 border-gray-300"
      }`}
    >
      {content}
    </p>
  );
}

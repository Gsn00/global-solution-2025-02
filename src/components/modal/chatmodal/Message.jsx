export default function Message({ content }) {
  return (
    <p className="py-2 px-3 bg-blue/40 border border-blue rounded-b-2xl rounded-tl-2xl shadow-sm max-w-[500px]">
      {content}
    </p>
  );
}

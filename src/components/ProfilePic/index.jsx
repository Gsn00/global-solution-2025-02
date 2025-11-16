export default function ProfilePic({ src, alt, className }) {
  return (
    <div
      className={`p-1 cursor-pointer rounded-full object-cover pointer-events-none select-none bg-red-300 aspect-square bg-linear-to-br from-[#13a4ec] to-[#DA00FF] flex items-center justify-center ${className}`}
    >
      <img
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        src={src}
        alt={alt}
        className={`rounded-full object-covers w-full`}
      />
    </div>
  );
}

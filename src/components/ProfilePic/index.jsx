export default function ProfilePic({ src, alt, size = 9 }) {
  return (
    <div
      className={`p-0.5 cursor-pointer rounded-full object-cover bg-red-300 w-[${size}px] aspect-square bg-linear-to-br from-[#13a4ec] to-[#DA00FF]`}
    >
      <img
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        src={src}
        alt={alt}
        className={`rounded-full object-covers`}
        style={{ width: size, height: size }}
      />
    </div>
  );
}

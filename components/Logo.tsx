interface LogoProps {
  width?: string;
}

export default function Logo({ width = "full" }: LogoProps) {
  return (
    <div
      className={
        "bg-purple-base relative  h-[5.5rem] rounded-r-2xl inline-grid place-items-center overflow-hidden" +
        ` w-${width}`
      }
    >
      <div className="bg-purple-light rounded-tl-2xl absolute bottom-0 left-0 right-0 h-[50%]"></div>

      <div className="pacman w-7 h-7 bg-white rounded-full relative z-[2]"></div>
    </div>
  );
}

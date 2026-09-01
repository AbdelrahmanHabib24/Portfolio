export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="relative h-[1px] w-full flex items-center justify-center pointer-events-none my-1"
    >
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg px-4 flex items-center justify-center">
        {/* Subtle center ambient radiance (ultra-soft, low opacity) */}
        <div className="absolute w-2/5 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 dark:via-cyan-400/25 to-transparent blur-[1px]" />
        {/* Hairline subtle gradient: transparent → subtle cyan/blue → transparent */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/25 dark:via-cyan-400/35 to-transparent" />
      </div>
    </div>
  );
}

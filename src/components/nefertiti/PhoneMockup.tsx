import { IMG } from "./data";

/**
 * Realistic smartphone frame around the Nefertiti mockup screenshot.
 * Pure CSS — no extra deps. Looks like a modern handset with a notch,
 * side buttons, and a subtle inner reflection.
 */
export function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto w-[230px] sm:w-[260px] md:w-[300px] lg:w-[330px] aspect-[9/19] ${className}`}>
      {/* Outer frame */}
      <div className="absolute inset-0 rounded-[2.6rem] bg-gradient-to-b from-noir to-black p-[10px] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.55),0_8px_20px_-6px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
        {/* Inner bezel */}
        <div className="relative h-full w-full rounded-[2.1rem] bg-black overflow-hidden ring-1 ring-white/5">
          {/* Screen */}
          <img
            src={IMG.mockup}
            alt="Método Nefertiti — área de membros"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          {/* Subtle screen reflection */}
          <span
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.08) 100%)",
            }}
          />
          {/* Dynamic island / notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[34%] h-[18px] rounded-full bg-black z-10 ring-1 ring-white/10 flex items-center justify-end pr-2 gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="w-2 h-2 rounded-full bg-zinc-800 ring-1 ring-zinc-700" />
          </div>
        </div>
      </div>
      {/* Side buttons */}
      <span className="absolute left-[-3px] top-[18%] h-9 w-[3px] rounded-l bg-noir/90" />
      <span className="absolute left-[-3px] top-[28%] h-14 w-[3px] rounded-l bg-noir/90" />
      <span className="absolute left-[-3px] top-[42%] h-14 w-[3px] rounded-l bg-noir/90" />
      <span className="absolute right-[-3px] top-[24%] h-20 w-[3px] rounded-r bg-noir/90" />
      {/* Glossy highlight on the frame */}
      <span className="pointer-events-none absolute inset-0 rounded-[2.6rem] bg-gradient-to-br from-white/10 via-transparent to-white/5" />
    </div>
  );
}

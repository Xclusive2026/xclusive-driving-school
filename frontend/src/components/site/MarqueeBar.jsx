import Marquee from "react-fast-marquee";

const WORDS = ["MANUAL", "AUTOMATIC", "INTENSIVE", "PASS PLUS", "MOTORWAY", "REFRESHER"];

export const MarqueeBar = () => {
  return (
    <div data-testid="marquee-bar" className="marquee-red py-5 md:py-6 border-y border-black/10">
      <Marquee speed={70} gradient={false} autoFill>
        {WORDS.map((w, i) => (
          <div key={i} className="flex items-center">
            <span className="font-display uppercase text-black text-4xl md:text-6xl tracking-tight px-8">
              {w}
            </span>
            <span className="text-black text-2xl md:text-4xl">✳</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

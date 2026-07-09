import { SmileIcon, SparklesIcon } from "lucide-react";

const clinics = [
  "Cabinet Dentaire Lumière",
  "Clinique Sourire Paris",
  "Dentiste du Marais",
  "Cabinet Belleville",
  "Sourire & Santé",
  "Clinique Dentaire Lyon",
  "Espace Dentaire Bordeaux",
  "Cabinet Saint-Germain",
];

function LogoMarquee() {
  return (
    <section className="relative py-16 px-6 overflow-hidden border-y border-border/50 bg-muted/10">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* LABEL */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm">
            <SparklesIcon className="size-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Designed for clinics like these
            </span>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex shrink-0 gap-16 pr-16 animate-marquee">
            {[...clinics, ...clinics].map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 shrink-0 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <SmileIcon className="size-5 text-primary" />
                <span className="text-lg font-semibold tracking-tight text-foreground whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoMarquee;

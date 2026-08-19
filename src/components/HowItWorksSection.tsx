import { LifeBuoy, GraduationCap, Ship, Sparkles } from "lucide-react";
import { Ovoid, FormlineWaves } from "@/components/Formline";

const steps = [
  {
    icon: GraduationCap,
    step: "01",
    title: "Get Acquainted",
    description:
      "We meet on the beach 15 minutes early for a hands-on paddling intro — stroke technique, seat positions, and how the six-person canoe moves.",
  },
  {
    icon: LifeBuoy,
    step: "02",
    title: "Water Safety Briefing",
    description:
      "Every guest is fitted with a US Coast Guard-approved PFD and walked through our safety plan, hand signals, and what to do in the unlikely event of a huli.",
  },
  {
    icon: Ship,
    step: "03",
    title: "Push Off",
    description:
      "Your certified guide steers from the back seat while you paddle as a crew across the clear water of Lake Coeur d'Alene.",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "Share the Aloha",
    description:
      "Anchor in a cove for your brunch, lunch, or drinks and pupus — or head straight back in on the 30-minute tour.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-20 md:py-28 bg-lake-light overflow-hidden">
      <FormlineWaves className="pointer-events-none absolute inset-x-0 bottom-0 w-[120%] h-40 text-primary/15" />
      <div className="container px-4 relative z-10">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent mb-3">
            How It Works
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
            Zero Experience <span className="text-primary">Required</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Every booking includes a paddling orientation and water-safety briefing before we leave the sand.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((s) => (
            <div key={s.step} className="ink-frame shadow-card p-7">
              <div className="flex items-center justify-between mb-5">
                <div className="relative w-16 h-14 flex items-center justify-center">
                  <Ovoid className="absolute inset-0 w-16 h-14 text-primary" />
                  <s.icon className="relative w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-heading font-bold text-2xl text-accent/30">{s.step}</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-sm text-muted-foreground mt-10 max-w-2xl mx-auto">
          Wear clothes you don't mind getting splashed and bring sunscreen — we provide paddles, PFDs, dry bags, and
          everything on the menu. Tours run May through September, weather permitting.
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSection;

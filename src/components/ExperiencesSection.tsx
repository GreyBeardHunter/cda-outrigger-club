import { Button } from "@/components/ui/button";
import { Clock, Users, Waves, UtensilsCrossed, Wine, Sun, Check } from "lucide-react";
import { FormlineBand, Ovoid } from "@/components/Formline";

const experiences = [
  {
    icon: Sun,
    name: "Sunrise Brunch Paddle",
    tag: "Aloha Experience",
    duration: "1 hour on the water",
    price: "$95 / person",
    description:
      "Glide out at first light, drop anchor in a quiet cove, and enjoy a fresh brunch spread served right from the waʻa.",
    includes: ["Chef-prepared brunch board", "Coffee & fresh juice", "Calm-water morning route"],
    bg: "bg-lake-light",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: UtensilsCrossed,
    name: "Midday Lunch Voyage",
    tag: "Aloha Experience",
    duration: "1 hour on the water",
    price: "$95 / person",
    description:
      "A relaxed midday paddle along the shoreline with a cove stop for island-style plates and cold drinks.",
    includes: ["Island-style lunch plates", "Sparkling water & sodas", "Shoreline scenic route"],
    bg: "bg-pine-light",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Wine,
    name: "Sunset Drinks & Apps",
    tag: "Aloha Experience",
    duration: "1 hour on the water",
    price: "$110 / person",
    description:
      "Our signature golden-hour paddle — pau hana pupus and a toast on the water as the sun drops behind the pines.",
    includes: ["Local pupus & charcuterie", "Wine, beer or mocktails (21+)", "Golden-hour sunset route"],
    bg: "bg-koa-light",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Waves,
    name: "Classic 30-Minute Paddle",
    tag: "Quick Tour",
    duration: "30 minutes, no stops",
    price: "$45 / person",
    description:
      "Straight to the good part. A guided out-and-back paddle on Lake Coeur d'Alene — no stops, all lake.",
    includes: ["Guided six-person canoe", "Photo stop from the water", "Perfect first-timer taste"],
    bg: "bg-lake-light",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
];

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="py-20 md:py-28 bg-background kapa-texture">
      <div className="container px-4">
        <div className="text-primary/60 max-w-xs mx-auto mb-10">
          <FormlineBand />
        </div>
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent mb-3">
            Our Experiences
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
            Choose Your <span className="text-primary">Time on the Water</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Every trip begins with a get-acquainted paddling lesson and a full water-safety briefing. No experience
            needed — we handle the canoe, the gear, and the aloha.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {experiences.map((exp) => (
            <div key={exp.name} className={`${exp.bg} ink-frame shadow-card p-8 flex flex-col transition-shadow duration-300 hover:shadow-elevated`}>
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="relative w-16 h-14 flex items-center justify-center">
                  <Ovoid className={`absolute inset-0 w-16 h-14 ${exp.iconColor}`} />
                  <exp.icon className={`relative w-5 h-5 ${exp.iconColor}`} strokeWidth={1.5} />
                </div>
                <span className="font-body text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 border border-foreground/60 bg-card text-muted-foreground">
                  {exp.tag}
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-foreground mb-2">{exp.name}</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-5">{exp.description}</p>

              <ul className="space-y-2 mb-6">
                {exp.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-5 border-t border-border/60 flex items-center justify-between gap-4">
                <div>
                  <p className="font-heading font-bold text-lg text-foreground">{exp.price}</p>
                  <p className="font-body text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {exp.duration}
                  </p>
                </div>
                <Button variant="accent" size="sm" asChild>
                  <a href="#book">Book Now</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-8 ink-frame p-5 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left shadow-card">
          <Users className="w-6 h-6 text-accent flex-shrink-0" />
          <p className="font-body text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Private charters & groups:</span> our canoes seat six, and
            we can run multiple hulls for celebrations, corporate retreats, and wedding parties. Ask us for a quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;

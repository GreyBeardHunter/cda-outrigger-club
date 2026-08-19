import crewLaunch from "@/assets/crew-launch.jpg";
import { Heart, Users, Compass, Waves, Anchor, Camera } from "lucide-react";
import { Ovoid, FormlineBand } from "@/components/Formline";
import paddleWatercolor from "@/assets/paddle-watercolor.jpg";

const values = [
  {
    icon: Heart,
    title: "Aloha Spirit",
    description: "Warm hospitality on and off the water. You arrive as a guest and leave as ʻohana.",
  },
  {
    icon: Users,
    title: "Everyone Paddles",
    description: "Six seats, one crew. First-timers, kids, and grandparents all find their rhythm together.",
  },
  {
    icon: Compass,
    title: "Kuleana",
    description: "We steward the lake we work on — leave-no-trace stops and clean, quiet, human-powered boats.",
  },
];

const highlights = [
  {
    icon: Waves,
    title: "Authentic Waʻa",
    description:
      "We paddle traditional OC6 outrigger canoes — the same craft used across Hawaiʻi and the Pacific, rigged and cared for the traditional way.",
    bg: "bg-lake-light",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Anchor,
    title: "Cove Dining",
    description:
      "Our Aloha Experiences pause in a sheltered cove where your guide serves brunch, lunch, or pupus and drinks right from the canoe.",
    bg: "bg-koa-light",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Camera,
    title: "Photos Included",
    description:
      "Your guide captures the moments you can't — every guest gets a gallery of shots from the water within 48 hours, free.",
    bg: "bg-pine-light",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-28">
          <div className="relative">
            <div className="ink-frame overflow-hidden shadow-elevated p-2">
              <img
                src={crewLaunch}
                alt="Guests launching a six-person outrigger canoe on Lake Coeur d'Alene"
                className="w-full h-[400px] md:h-[500px] object-cover grayscale-[0.35] contrast-[1.05]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent/40 -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-primary/30 -z-10" />
          </div>

          <div>
            <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent mb-3">
              Who We Are
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Hawaiian Paddling on <span className="text-primary">Lake Coeur d'Alene</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              CDA Outrigger is a locally owned tour company sharing the Hawaiian waʻa tradition in North Idaho. We run
              guided OC6 outrigger canoe experiences on Lake Coeur d'Alene — and, by request, on the lakes and rivers
              beyond it.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Our guides are certified, lake-savvy, and genuinely happy to be out there. You bring your crew; we bring
              the canoe, the coaching, the safety gear, and the food and drinks that turn a paddle into an occasion.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-secondary/50 bg-pine-light">
              <Heart className="w-4 h-4 text-secondary" />
              <span className="font-body text-sm font-medium text-secondary">Locally owned · Guided & insured</span>
            </div>
          </div>
        </div>

        <div className="mb-20 md:mb-28">
          <div className="ink-frame shadow-elevated overflow-hidden max-w-3xl mx-auto mb-8">
            <img
              src={paddleWatercolor}
              alt="Watercolor painting of a koa paddle blade entering turquoise water beside an outrigger canoe"
              className="w-full h-[260px] md:h-[340px] object-cover"
              loading="lazy"
              width={1200}
              height={912}
            />
          </div>
          <div className="text-primary/60 max-w-xs mx-auto mb-10">
            <FormlineBand />
          </div>
          <div className="text-center mb-12">
            <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent mb-3">
              Our Values
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground leading-tight">
              Grounded in <span className="text-primary">Aloha</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="text-center px-4">
                <div className="relative w-24 h-20 mx-auto mb-5 flex items-center justify-center">
                  <Ovoid className="absolute inset-0 w-24 h-20 text-primary" />
                  <value.icon className="relative w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{value.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item) => (
            <div key={item.title} className={`${item.bg} ink-frame shadow-card p-8`}>
              <div className="relative w-16 h-14 mb-5 flex items-center justify-center">
                <Ovoid className={`absolute inset-0 w-16 h-14 ${item.iconColor}`} />
                <item.icon className={`relative w-5 h-5 ${item.iconColor}`} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">{item.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

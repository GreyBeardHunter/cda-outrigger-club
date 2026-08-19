import crewLaunch from "@/assets/crew-launch.jpg";
import { Heart, Users, Compass, Waves, Anchor, Camera } from "lucide-react";

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
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={crewLaunch}
                alt="Guests launching a six-person outrigger canoe on Lake Coeur d'Alene"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent/10 -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 rounded-xl bg-lake-light -z-10" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pine-light">
              <Heart className="w-4 h-4 text-secondary" />
              <span className="font-body text-sm font-medium text-secondary">Locally owned · Guided & insured</span>
            </div>
          </div>
        </div>

        <div className="mb-20 md:mb-28">
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
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{value.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item) => (
            <div key={item.title} className={`${item.bg} rounded-2xl p-8`}>
              <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-5`}>
                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
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

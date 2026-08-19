import { Button } from "@/components/ui/button";
import { FormlineWaves } from "@/components/Formline";
import heroCanoe from "@/assets/hero-canoe-watercolor.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-background kapa-texture pt-24 pb-16">
      {/* Ambient formline water */}
      <FormlineWaves className="pointer-events-none absolute -bottom-4 left-0 w-[130%] h-64 text-primary/30 animate-drift" />

      <div className="relative z-10 container px-4">
        <div className="mx-auto max-w-5xl ink-frame shadow-elevated overflow-hidden">
          <img
            src={heroCanoe}
            alt="Watercolor painting of a six-person outrigger canoe crew paddling on a mountain lake at golden hour"
            className="w-full h-[280px] sm:h-[360px] md:h-[440px] object-cover"
            width={1600}
            height={1008}
          />

          <div className="px-6 sm:px-10 py-10 text-center">
            <p className="font-body font-semibold text-xs sm:text-sm tracking-[0.3em] uppercase text-accent mb-6">
              Guided OC6 Outrigger Tours · Lake Coeur d'Alene
            </p>

            <h1 className="font-heading font-semibold text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1.05] text-balance mb-6">
              <span className="text-accent">Aloha</span> &amp; Welcome
            </h1>

            <div className="ink-rule max-w-xs mx-auto mb-6" />

            <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-9 leading-relaxed">
              Six-person Hawaiian outrigger canoe experiences on Lake Coeur d'Alene — brunch, lunch, or sunset drinks
              and apps on the water, plus quick 30-minute paddle tours. Every trip starts with paddling basics and
              water safety.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <a href="#book">Book an Experience</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-2 border-foreground">
                <a href="#experiences">View Tours</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

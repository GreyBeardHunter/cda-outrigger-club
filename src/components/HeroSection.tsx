import { Button } from "@/components/ui/button";
import { FormlineCanoeMark, FormlineWaves, FormlineBand, FormlineCorner } from "@/components/Formline";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-background kapa-texture pt-24 pb-16">
      {/* Ambient formline water */}
      <FormlineWaves className="pointer-events-none absolute -bottom-4 left-0 w-[130%] h-64 text-primary/30 animate-drift" />
      <FormlineCorner className="pointer-events-none absolute top-24 left-6 w-28 h-28 text-accent/50 hidden md:block" />
      <FormlineCorner className="pointer-events-none absolute bottom-16 right-6 w-28 h-28 text-accent/50 rotate-180 hidden md:block" />

      <div className="relative z-10 container px-4">
        <div className="mx-auto max-w-4xl ink-frame shadow-elevated">
          <div className="text-primary px-6 pt-5">
            <FormlineBand />
          </div>

          <div className="px-6 sm:px-10 pb-10 text-center">
            <p className="font-body font-semibold text-xs sm:text-sm tracking-[0.3em] uppercase text-accent mb-6">
              Guided OC6 Outrigger Tours · Lake Coeur d'Alene
            </p>

            <FormlineCanoeMark className="mx-auto w-full max-w-md text-foreground animate-fade-slide-up mb-6" />

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

          <div className="text-primary px-6 pb-5 rotate-180">
            <FormlineBand />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

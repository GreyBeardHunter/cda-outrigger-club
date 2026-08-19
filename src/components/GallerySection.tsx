import crewBeach from "@/assets/crew-beach-group.jpg.asset.json";
import crewDusk from "@/assets/crew-dusk-paddles.jpg.asset.json";
import crewSunset from "@/assets/crew-sunset-shaka.jpg.asset.json";

const photos = [
  {
    src: crewBeach.url,
    alt: "Guests gathered alongside the outrigger canoe at NIC Beach on Lake Coeur d'Alene",
    caption: "Launching on Lake Coeur d'Alene",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: crewSunset.url,
    alt: "Guests throwing shakas at sunset after an outrigger canoe tour",
    caption: "Shakas at sunset",
    className: "",
  },
  {
    src: crewDusk.url,
    alt: "Tour guests with paddles in hand at dusk beside the canoes",
    caption: "Paddles up at dusk",
    className: "",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-lake-light">
      <div className="container px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent mb-3">
            On the Water
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
            Moments from Our <span className="text-primary">Tours</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Friends, families, and first-timers — real guests, real golden hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[220px] gap-4 max-w-6xl mx-auto">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className={`relative group ink-frame overflow-hidden shadow-card ${photo.className}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[260px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
                <figcaption className="font-body text-sm text-primary-foreground">
                  {photo.caption}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
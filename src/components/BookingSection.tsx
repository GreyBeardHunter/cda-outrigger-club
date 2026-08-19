import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, Users, ShieldCheck } from "lucide-react";
import { FormlineBand } from "@/components/Formline";

const timeSlots = [
  { label: "Brunch Paddle", time: "8:30 AM daily", note: "1 hour" },
  { label: "Lunch Voyage", time: "12:00 PM daily", note: "1 hour" },
  { label: "Drinks & Apps", time: "Sunset, daily", note: "1 hour" },
  { label: "Classic Paddle", time: "Hourly, 10 AM – 4 PM", note: "30 minutes" },
];

const BookingSection = () => {
  return (
    <section id="book" className="py-20 md:py-28 bg-background kapa-texture">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent mb-3">
              Reserve Your Seat
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-5 leading-tight">
              Book Your <span className="text-primary">Aloha Experience</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              Seats are limited to six per canoe, so we recommend booking a few days out during summer. Tell us your
              date, party size, and which experience you'd like and we'll confirm within 24 hours.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-secondary" /> Ages 8 and up · six seats per canoe
              </li>
              <li className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-secondary" /> Guided, insured, and PFD-equipped
              </li>
              <li className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                <CalendarDays className="w-4 h-4 text-secondary" /> Free reschedule for weather cancellations
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" asChild>
                <a href="mailto:aloha@cdaoutrigger.com?subject=Booking%20Request">Request a Booking</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-2 border-foreground">
                <a href="#contact">Ask a Question</a>
              </Button>
            </div>
          </div>

          <div className="bg-lake-light ink-frame shadow-elevated p-8">
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">Daily Departures</h3>
            <div className="text-primary/60 mb-6">
              <FormlineBand />
            </div>
            <div className="space-y-4">
              {timeSlots.map((slot) => (
                <div
                  key={slot.label}
                  className="bg-card border border-foreground/50 p-4 flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="font-heading font-semibold text-foreground">{slot.label}</p>
                    <p className="font-body text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {slot.time}
                    </p>
                  </div>
                  <span className="font-body text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 border border-secondary/60 bg-pine-light text-secondary whitespace-nowrap">
                    {slot.note}
                  </span>
                </div>
              ))}
            </div>
            <p className="font-body text-xs text-muted-foreground mt-5">
              Departures leave from NIC Beach, just south of the Yap-Keehn-Um Beach volleyball courts. Custom departure
              times available for private charters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

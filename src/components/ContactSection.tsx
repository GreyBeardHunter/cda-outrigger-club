import { Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="text-center mb-14">
          <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Drop Us a Line
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Questions about paddling, or just want to say aloha? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-10">
          <a
            href="mailto:info@cdaoutrigger.com"
            className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 rounded-full bg-koa-light flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-1">Email</h3>
            <p className="font-body text-sm text-muted-foreground">info@cdaoutrigger.com</p>
          </a>

          <div className="bg-card rounded-xl p-6 text-center shadow-card">
            <div className="w-12 h-12 rounded-full bg-lake-light flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-1">Location</h3>
            <p className="font-body text-sm text-muted-foreground">NIC Beach — Just South of Yap-Keehn-Um Beach Volleyball Courts<br />Coeur d'Alene, Idaho</p>
          </div>

          <div className="bg-card rounded-xl p-6 text-center shadow-card">
            <div className="w-12 h-12 rounded-full bg-pine-light flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-1">Follow Us</h3>
            <div className="flex justify-center gap-3 mt-2">
              <a href="https://www.instagram.com/cda_outrigger_canoe_club/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579139774315" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@CDAOutrigger" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-muted-foreground hover:text-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-card border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d405.51763029028257!2d-116.7979772192376!3d47.67481824592917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1780360343019!5m2!1sen!2sus"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NIC Beach Meetup Location"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

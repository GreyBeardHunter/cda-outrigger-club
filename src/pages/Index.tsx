import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExperiencesSection />
      <HowItWorksSection />
      <AboutSection />
      <GallerySection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

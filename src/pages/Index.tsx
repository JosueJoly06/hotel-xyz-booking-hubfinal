
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SpaSection from '@/components/sections/SpaSection';
import CommunalKitchenSection from '@/components/sections/CommunalKitchenSection';
import AboutUsSection from '@/components/sections/AboutUsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import FeaturedRoomsSection from '@/components/sections/FeaturedRoomsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <AboutUsSection />
        <SpaSection />
        <CommunalKitchenSection />
        <FeaturesSection />
        <FeaturedRoomsSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;

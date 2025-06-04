import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import ConsultationStepsSection from '../components/sections/ConsultationStepsSection';
import DestinationsSection from '../components/sections/DestinationsSection';
import PackagesSection from '../components/sections/PackagesSection';
import FaqCtaSection from '../components/sections/FaqCtaSection';
import Footer from '../components/layout/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <ConsultationStepsSection />
        <DestinationsSection />
        <PackagesSection />
        <FaqCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
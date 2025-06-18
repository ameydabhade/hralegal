import HeroSection from './components/HeroSection';
import HomePracticeAreasGrid from './components/HomePracticeAreasGrid';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ServicesSection from './components/ServicesSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HomePracticeAreasGrid />
      <WhyChooseUsSection />
      <ServicesSection />
    </main>
  );
}

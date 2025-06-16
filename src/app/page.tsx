import HeroSection from './components/HeroSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ServicesSection from './components/ServicesSection';
import HomePracticeAreasGrid from './components/HomePracticeAreasGrid';
import HomeOverviewSection from './components/HomeOverviewSection';
import HomeFoundersSection from './components/HomeFoundersSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <HomePracticeAreasGrid />
      <HomeOverviewSection />
      <HomeFoundersSection />
    </main>
  );
}

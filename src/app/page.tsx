import HeroSection from './components/HeroSection';
import HomePracticeAreasGrid from './components/HomePracticeAreasGrid';
import HomeFoundersSection from './components/HomeFoundersSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ServicesSection from './components/ServicesSection';


export default function Home() {
  return (
    <main className="min-h-screen bg-[#ECE5DE]">
      <HeroSection />
      <HomePracticeAreasGrid />
   
      <WhyChooseUsSection />
      <ServicesSection />
      <HomeFoundersSection />
    </main>
  );
}

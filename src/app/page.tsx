import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HomeOverviewSection from './components/HomeOverviewSection';
import HomePracticeAreasSection from './components/HomePracticeAreasSection';
import HomeFoundersSection from './components/HomeFoundersSection';
import HomeWhyChooseUsSection from './components/HomeWhyChooseUsSection';
import HomeTestimonialsSection from './components/HomeTestimonialsSection';
import HomeCTASection from './components/HomeCTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <HomeOverviewSection />
      <HomePracticeAreasSection />
      <HomeWhyChooseUsSection />
      <HomeFoundersSection />
      <HomeTestimonialsSection />
      <HomeCTASection />
      <Footer />
    </main>
  );
}

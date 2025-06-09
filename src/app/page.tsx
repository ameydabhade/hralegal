import HeroSection from './components/HeroSection';
import HomePracticeAreasGrid from './components/HomePracticeAreasGrid';
import HomeOverviewSection from './components/HomeOverviewSection';
import HomeFoundersSection from './components/HomeFoundersSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HomePracticeAreasGrid />
      <HomeOverviewSection />
      <HomeFoundersSection />
    </main>
  );
}

import HeroSection from './components/HeroSection';
import HomePracticeAreasGrid from './components/HomePracticeAreasGrid';
import HomeOverviewSection from './components/HomeOverviewSection';
import HomeFoundersSection from './components/HomeFoundersSection';
import HomeFeatureSection from './components/HomeFeatureSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HomePracticeAreasGrid />
      <HomeFeatureSection />
      <HomeOverviewSection />
      <HomeFoundersSection />
    </main>
  );
}

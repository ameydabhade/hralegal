import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import FoundersSection from '../components/FoundersSection';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About Us | HRA Legal - Professional Law Firm',
  description: 'Learn about HRA Legal, our mission, vision, core values, and meet our experienced founders. Professional law firm with specialized expertise across various legal disciplines.',
  keywords: 'HRA Legal, about us, law firm, legal services, mission, vision, founders, legal expertise',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutSection />
      <FoundersSection />
      <Footer />
    </main>
  );
} 
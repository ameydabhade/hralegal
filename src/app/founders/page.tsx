import Header from '../components/Header';
import FoundersSection from '../components/FoundersSection';
import Footer from '../components/Footer';

export default function FoundersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <FoundersSection standalone={true} />
      <Footer />
    </main>
  );
} 
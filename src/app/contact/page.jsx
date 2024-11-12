import Contact from '../components/Contact';
import Navbar from '../components/Navbar';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-orange-50/30 to-orange-100/20">
      <Navbar />
      <Contact />
    </main>
  );
} 
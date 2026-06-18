import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

interface HomeProps {
  onServicesClick: () => void;
}

export default function Home({ onServicesClick }: HomeProps) {
  return (
    <main className="relative w-full">
      <Hero onServicesClick={onServicesClick} />

      <Services />

      <Projects />

      <Contact />
    </main>
  );
}
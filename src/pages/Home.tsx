import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

interface HomeProps {
  onBudgetClick: () => void;
  onServicesClick: () => void;
}

export default function Home({ onBudgetClick, onServicesClick }: HomeProps) {
  return (
    <main className="relative w-full">
      <Hero
        onBudgetClick={onBudgetClick}
        onServicesClick={onServicesClick}
      />

      <Services
        onBudgetClick={onBudgetClick}
      />

      <Projects />

      <Contact />
    </main>
  );
}

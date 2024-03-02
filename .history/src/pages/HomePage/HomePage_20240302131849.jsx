import Hero from '../../components/Hero/Hero';
import MainAnimation from '../../components/MainAnimation/MainAnimation';
import Sections from '../../components/Sections/Sections';

export default function HomePage() {
  return (
    <div>
      <MainAnimation />
      <Hero />
      <Sections />
    </div>
  );
}

import './HeroSection.css';
import Image from 'next/image';
import fondoHotel from '../public/fondo_hotel_principalpng.png';

const HeroSection = () => (
  <section className="hero-section">
    <div>
      <h1>Hotel Calacoto</h1>
      <p>"Un hotel para cada momento, lleno de emociones inolvidables."</p>
      <p>Cada momento se siente como la primera vez.</p>
    </div>
    <Image src={fondoHotel} alt="Hotel Calacoto" width={500} height={300} />
  </section>
);

export default HeroSection;

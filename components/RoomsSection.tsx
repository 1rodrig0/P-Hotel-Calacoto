import './RoomsSection.css';
import Image from 'next/image';
import habitacionesImg from '../public/habitaciones_hotel_principal.png';

const RoomsSection = () => (
  <section className="rooms-section">
    <Image src={habitacionesImg} alt="Habitaciones de lujo" width={500} height={300} />
    <div>
      <h2>Habitaciones de Lujo</h2>
      <p>
        Suites privadas. Suites de luna de miel, alojamiento Airbnb-style y apartamentos con cocina.
        Todas las estadías incluyen uno de los mejores desayunos buffet de la ciudad, estacionamiento
        gratuito y conserjería 24/7.
      </p>
      <button>Saber más</button>
    </div>
  </section>
);

export default RoomsSection;

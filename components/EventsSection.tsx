import './EventsSection.css';
import Image from 'next/image';
import eventosImg from '../public/eventos_hotel_principal.png';

const EventsSection = () => (
  <section className="events-section">
    <Image src={eventosImg} alt="Eventos y Convenciones" width={500} height={300} />
    <div>
      <h2>Eventos y Convenciones</h2>
      <p>
        Te ayudamos a elegir el formato que mejor se adapte a tus necesidades, aplicando normas de
        bioseguridad y a foros controlados, de forma segura para tus invitados.
      </p>
      <button>Saber más</button>
    </div>
  </section>
);

export default EventsSection;

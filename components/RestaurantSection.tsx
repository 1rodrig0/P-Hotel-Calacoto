import './RestaurantSection.css';
import Image from 'next/image';
import kentyImg from '../public/kenty_hotel_principal.png';

const RestaurantSection = () => (
  <section className="restaurant-section">
    <Image src={kentyImg} alt="The Kenty" width={500} height={300} />
    <div>
      <h2>The Kenty</h2>
      <p>
        Un lugar que ofrece restaurante, bar y karaoke en un solo espacio. Disfruta de un menú
        especializado en parrillas, junto con opciones de comida nacional e internacional.
      </p>
      <button>Saber más</button>
    </div>
  </section>
);

export default RestaurantSection;

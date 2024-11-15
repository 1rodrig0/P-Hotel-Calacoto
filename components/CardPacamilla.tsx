import React from 'react';
import Image from 'next/image';
import styles from './CardSalon.module.css';

const CardPacamilla = () => {
    return (
        <div className={styles.card}>
            <Image src="/events/salon_pacamilla.jpg" alt="Salón tipo Pacamilla" width={600} height={400} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Salón tipo Pacamilla</h3>
                <p className={styles.cardDescription}>
                    Capacidad de 30 personas máximo. Perfecto para eventos al aire libre y reuniones pequeñas.
                </p>
            </div>
        </div>
    );
};

export default CardPacamilla;

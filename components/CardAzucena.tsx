import React from 'react';
import Image from 'next/image';
import styles from './CardSalon.module.css';

const CardAzucena = () => {
    return (
        <div className={styles.card}>
            <Image src="/events/salon_azucena.jpg" alt="Salón tipo Azucena" width={600} height={400} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Salón tipo Azucena</h3>
                <p className={styles.cardDescription}>
                    Capacidad de 50 personas máximo. Un ambiente elegante para eventos exclusivos.
                </p>
            </div>
        </div>
    );
};

export default CardAzucena;

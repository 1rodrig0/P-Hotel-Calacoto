import React from 'react';
import Image from 'next/image';
import styles from './CardSalon.module.css';

const CardManzanero = () => {
    return (
        <div className={styles.card}>
            <Image src="/events/salon_manzanero.jpg" alt="Salón tipo Manzanero" width={600} height={400} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Salón tipo Manzanero</h3>
                <p className={styles.cardDescription}>
                    Capacidad de 60 personas máximo. Ideal para eventos íntimos y conferencias pequeñas.
                </p>
            </div>
        </div>
    );
};

export default CardManzanero;

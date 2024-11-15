import React from 'react';
import Image from 'next/image';
import styles from './CardSalon.module.css';

const CardMacuripi = () => {
    return (
        <div className={styles.card}>
            <Image src="/events/salon_macuripi.jpg" alt="Salón tipo Macuripi" width={600} height={400} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Salón tipo Macuripi</h3>
                <p className={styles.cardDescription}>
                    Capacidad de 80 personas máximo. Perfecto para reuniones y eventos de tamaño mediano.
                </p>
            </div>
        </div>
    );
};

export default CardMacuripi;

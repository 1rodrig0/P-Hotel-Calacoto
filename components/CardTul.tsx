import React from 'react';
import Image from 'next/image';
import styles from './CardSalon.module.css';

const CardTul = () => {
    return (
        <div className={styles.card}>
            <Image src="/events/salon_tul.jpg" alt="Salón tipo Tul" width={600} height={400} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Salón tipo Tul</h3>
                <p className={styles.cardDescription}>
                    Capacidad de 100 personas máximo. Este salón es ideal para presentaciones y eventos empresariales.
                </p>
            </div>
        </div>
    );
};

export default CardTul;

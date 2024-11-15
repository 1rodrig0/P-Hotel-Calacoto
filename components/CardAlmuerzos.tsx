import React from 'react';
import Image from 'next/image';
import styles from './Card.module.css';

const CardAlmuerzos = () => {
    return (
        <div className={styles.card}>
            <Image src="/events/almuerzo_eventos.svg" alt="Almuerzos, Cenas y Otros" width={300} height={200} />
            <h3 className={styles.cardTitle}>Almuerzos, Cenas y Otros</h3>
            <p className={styles.cardText}>Te ofrecemos amplias opciones para almuerzos, cenas y otros eventos especiales...</p>
        </div>
    );
};

export default CardAlmuerzos;
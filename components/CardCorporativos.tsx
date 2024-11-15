import React from 'react';
import Image from 'next/image';
import styles from './Card.module.css';

const CardCorporativos = () => {
    return (
        <div className={styles.card}>
            <Image src="/events/corporativos_eventos.svg" alt="Eventos Corporativos" width={300} height={200} />
            <h3 className={styles.cardTitle}>Eventos Corporativos</h3>
            <p className={styles.cardText}>Organiza tu evento corporativo en nuestros espacios especialmente diseñados...</p>
        </div>
    );
};

export default CardCorporativos;
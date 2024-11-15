import React from 'react';
import Image from 'next/image';
import styles from './Card.module.css';

const CardBodas = () => {
    return (
        <div className={styles.card}>
            <Image src="/events/bodas_eventos.svg" alt="Bodas" width={300} height={200} />
            <h3 className={styles.cardTitle}>Bodas</h3>
            <p className={styles.cardText}>Queremos ser parte de tu boda soñada...</p>
        </div>
    );
};

export default CardBodas;
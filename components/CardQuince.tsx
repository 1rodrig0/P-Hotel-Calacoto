import React from 'react';
import Image from 'next/image';
import styles from './Card.module.css';

const CardQuince = () => {
    return (
        <div className={styles.card}>
            <Image src="/events/quince_eventos.svg" alt="15 años" width={300} height={200} />
            <h3 className={styles.cardTitle}>15 años</h3>
            <p className={styles.cardText}>En ese día tan importante e inolvidable...</p>
        </div>
    );
};

export default CardQuince;
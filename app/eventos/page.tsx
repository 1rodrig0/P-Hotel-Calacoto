import React from 'react';
import CardBodas from '@/components/CardBodas';
import CardQuince from '@/components/CardQuince';
import CardCorporativos from '@/components/CardCorporativos';
import CardAlmuerzos from '@/components/CardAlmuerzos';
import CardTul from '@/components/CardTul';
import CardMacuripi from '@/components/CardMacuripi';
import CardManzanero from '@/components/CardManzanero';
import CardAzucena from '@/components/CardAzucena';
import CardPacamilla from '@/components/CardPacamilla';
import styles from './eventos.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const EventosPage = () => {
    return (
        <div className={styles.eventosPage}>
          <Navbar />
            {/* Sección de tipos de eventos existentes */}
            <section className={styles.tiposEventos}>
                <h2 className={styles.sectionTitle}>Tipos de Eventos</h2>
                <div className={styles.eventosContainer}>
                    <CardBodas />
                    <CardQuince />
                    <CardCorporativos />
                    <CardAlmuerzos />
                </div>
            </section>

            {/* Nueva sección de tipos de salones */}
            <section className={styles.tiposSalones}>
                <h2 className={styles.sectionTitle}>Tipo de armado de Salones</h2>
                <div className={styles.salonesContainer}>
                    <CardTul />
                    <CardMacuripi />
                    <CardManzanero />
                    <CardAzucena />
                    <CardPacamilla />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default EventosPage;

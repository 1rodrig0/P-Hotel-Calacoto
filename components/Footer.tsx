import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerSection}>
                <h2 className={styles.footerTitle}>Hotel Calacoto</h2>
                <p>
                    Catalogado actualmente como un hotel 4 estrellas, su amplio abanico de ofertas y variedad de servicios a disposición de sus huéspedes, hacen que el Hotel Calacoto detente características de hoteles de 5 estrellas.
                </p>
            </div>
            <div className={styles.footerSection}>
                <h3>Links</h3>
                <ul>
                    <li>Habitaciones booking</li>
                    <li>Habitaciones</li>
                    <li>Reservaciones</li>
                    <li>Eventos</li>
                </ul>
            </div>
            <div className={styles.footerSection}>
                <h3>Compañía</h3>
                <ul>
                    <li>Nosotros</li>
                    <li>Servicios</li>
                    <li>Términos y Condiciones</li>
                    <li>Contactar</li>
                </ul>
            </div>
            <div className={styles.footerSection}>
                <h3>Redes Sociales</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
            <div className={styles.footerSection}>
                <h3>Otros Contactos</h3>
                <ul>
                    <li>Dirección: Calacoto Calle 13 esquina Sanchez Bustamante</li>
                    <li>WhatsApp: 69412010</li>
                    <li>Email: info@hotelcalacoto.com</li>
                    <li>Email Reservas: reservas@hotelcalacoto.com</li>
                </ul>
            </div>
            <div className={styles.footerSection}>
                <h3>Mapa</h3>
                <img src="/images/mapa.jpg" alt="Ubicación del hotel" className={styles.mapImage} />
            </div>
            <div className={styles.footerBottom}>
                <p>Hotel Calacoto desde 1993</p>
            </div>
        </footer>
    );
};

export default Footer;

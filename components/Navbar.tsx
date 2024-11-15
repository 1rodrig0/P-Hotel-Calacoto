import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/principal" className="navbar-logo">
        <Image
          src="/logo_hotel_principal.png"
          width={100} 
          height={100}
          alt="Logo del Hotel"
        />
      </Link>

      <div className="navbar-links">
        <Link href="/principal" className="active">Principal</Link>
        <Link href="/ofertas">Ofertas</Link>
        <Link href="/habitaciones">Habitaciones</Link>
        <Link href="/eventos">Eventos</Link>
        <Link href="/contactos">Contactos</Link>
        <Link href="/nosotros">Nosotros</Link>
      </div>

      <div className="navbar-buttons">
        <Link href="/registrar"><button>Registrarse</button></Link>
        <Link href="/sesion"><button>Iniciar Sesión</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
"use client";
import React from 'react';

const ConfirmacionOferta = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>¡Tu oferta ha sido registrada con éxito!</h1>
      <p>Gracias por elegir Hotel Calacoto. Nuestro equipo se pondrá en contacto contigo pronto.</p>
      <a href="/ofertas" style={{ color: '#A91F8C', fontWeight: 'bold' }}>Volver a Ofertas</a>
    </div>
  );
};

export default ConfirmacionOferta;

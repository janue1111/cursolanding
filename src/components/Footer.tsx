import React from 'react';

const Footer = () => {
  return (
    <div className="py-8 text-center">
      {/* Logos de partners */}
      <div className="py-4">
        <a href="https://pay.hotmart.com/G99109427E?checkoutMode=10">
          <img 
            loading="lazy" 
            decoding="async" 
            src="https://i0.wp.com/blacks.university/wp-content/uploads/2025/04/logos.png?fit=800%2C219&amp;ssl=1" 
            alt="" 
            className="mx-auto"
            style={{ width: '800px', height: '219px' }}
          />
        </a>
      </div>
      
      {/* Información de contacto */}
      <div className="py-4">
        <h3 style={{ textAlign: 'center' }}>Mauricio Duque Zuluaga</h3>
        <p style={{ textAlign: 'center' }}>
          Principal en Seminarios.Online® – Blacks.University® – Universidad.Online®.<br />
          Avenida 4 Norte # 7N – 46 Cali Colombia.
        </p>
        <p style={{ textAlign: 'center' }}>
          Suite 400, Lake Nona Town Center, Tavistock Lakes Blvd, Orlando, FL 32827
        </p>
        <p style={{ textAlign: 'center' }}>
          contacto: <span style={{ color: '#ffff00' }}>soporte@blacks.university</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
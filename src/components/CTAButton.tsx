import React from 'react';

const CTAButton = () => {
  return (
    <div className="cta-sticky">
      {/* Imagen de flecha */}
      <div className="py-4">
        <a href="https://pay.hotmart.com/G99109427E?checkoutMode=10">
          <img 
            loading="lazy" 
            decoding="async" 
            src="https://i0.wp.com/blacks.university/wp-content/uploads/2024/10/arrow-brushes-design-png-34.png?fit=252%2C300&amp;ssl=1" 
            alt="" 
            className="mx-auto"
            style={{ width: '252px', height: '300px' }}
          />
        </a>
      </div>
      
      {/* Texto de inscripciones */}
      <div className="py-4">
        <p style={{ textAlign: 'center' }}><strong>INSCRIPCIONES ABIERTAS HASTA HOY  <span style={{ color: '#ff0000' }}>Dom 28 septiembre</span> a las <span style={{ color: '#ff0000' }}>10:00 PM</span> hora Colombia</strong></p>
      </div>
      
      {/* Botón CTA */}
      <div className="py-6">
        <div className="elementor-button-wrapper">
          <a 
            className="cta-button"
            href="https://pay.hotmart.com/G99109427E?checkoutMode=10"
          >
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">
                CLICK AQUÍ PARA COMENZAR A VENDER NUESTROS PRODUCTOS DIGITALES Y GENERAR INGRESOS INMEDIATAMENTE...
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTAButton;
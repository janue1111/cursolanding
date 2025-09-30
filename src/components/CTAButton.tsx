import React from 'react';

const CTAButton = () => {
  return (
    <div className="cta-sticky">
      <img
        className="cta-arrow"
        src="https://i0.wp.com/blacks.university/wp-content/uploads/2024/10/arrow-brushes-design-png-34.png?fit=252%2C300&ssl=1"
        alt="Flecha hacia el botón de compra"
        loading="lazy"
      />

      <p className="cta-deadline">
        INSCRIPCIONES ABIERTAS HASTA HOY <span>Dom 28 septiembre</span> a las{' '}
        <span>10:00 PM</span> hora Colombia
      </p>

      <a className="cta-button" href="https://pay.hotmart.com/G99109427E?checkoutMode=10">
        CLICK AQUÍ PARA COMENZAR A VENDER NUESTROS PRODUCTOS DIGITALES Y GENERAR INGRESOS INMEDIATAMENTE...
      </a>

      <span className="cta-subtext">SIN EXPERIENCIA PREVIA</span>
    </div>
  );
};

export default CTAButton;

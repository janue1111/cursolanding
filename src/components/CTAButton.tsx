import React from 'react';

const CTAButton = () => {
  return (
    <div className="cta-section section-block">
      <img
        className="cta-section__arrow"
        src="https://i0.wp.com/blacks.university/wp-content/uploads/2024/10/arrow-brushes-design-png-34.png?fit=252%2C300&ssl=1"
        alt="Flecha apuntando al botón de compra"
        loading="lazy"
      />

      <a className="cta-section__link" href="https://pay.hotmart.com/G99109427E?checkoutMode=10">
        CLICK AQUÍ PARA COMENZAR A VENDER NUESTROS PRODUCTOS DIGITALES Y GENERAR INGRESOS INMEDIATAMENTE...
      </a>
    </div>
  );
};

export default CTAButton;

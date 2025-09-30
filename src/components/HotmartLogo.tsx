import React from 'react';

const HotmartLogo = () => {
  return (
    <section className="logo-strip">
      <div className="logo-strip__row">
        <img
          src="https://i0.wp.com/blacks.university/wp-content/uploads/2025/06/universidad-online-logo.png?resize=260%2C80&ssl=1"
          alt="Universidad Online"
          className="logo-strip__brand"
        />
        <span className="logo-strip__separator" aria-hidden="true" />
        <img
          src="https://i0.wp.com/blacks.university/wp-content/uploads/2025/06/hotmart-powered-logo.png?resize=260%2C80&ssl=1"
          alt="Powered by Hotmart"
          className="logo-strip__brand"
        />
      </div>
      <p className="logo-strip__caption">
        USAMOS ACTIVOS VIRTUALES COMO HOTMART, REDES SOCIALES Y LA UNIVERSIDAD ONLINE PARA CREAR INGRESOS 100% DIGITALES.
      </p>
    </section>
  );
};

export default HotmartLogo;

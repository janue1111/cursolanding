import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-block">
      <a href="https://pay.hotmart.com/G99109427E?checkoutMode=10" target="_blank" rel="noopener">
        <img
          loading="lazy"
          decoding="async"
          src="https://i0.wp.com/blacks.university/wp-content/uploads/2025/04/logos.png?fit=800%2C219&ssl=1"
          alt="Aliados Blacks.University"
        />
      </a>

      <div>
        <h3>Mauricio Duque Zuluaga</h3>
        <p>
          Principal en Seminarios.Online® – Blacks.University® – Universidad.Online®<br />
          Avenida 4 Norte # 7N – 46 Cali, Colombia.
        </p>
        <p>Suite 400, Lake Nona Town Center, Tavistock Lakes Blvd, Orlando, FL 32827.</p>
        <p>
          contacto: <span className="contact-highlight">soporte@blacks.university</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

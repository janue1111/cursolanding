import React from 'react';

const SalesStats = () => {
  return (
    <div className="py-6">
      <h3 className="text-center text-xl font-bold py-2">
        VENTAS DÍAS RANDOM (ANALIZA LAS COLUMNAS DE PRODUCTOS, VENDEDORES Y FECHAS)
      </h3>
      <p className="text-center py-2">
        POR DIRECTRIZ DE HOTMART® DEBEMOS OCULTAR LA INFORMACIÓN DE LA TRANSACCIÓN Y NOMBRE DEL VENDEDOR
      </p>
      <p className="text-center py-2">
        <span style={{ textDecoration: 'underline', color: '#33cccc' }}>
          <a style={{ color: '#33cccc', textDecoration: 'underline' }} href="https://blacks.university/wp-content/uploads/2025/05/nuevas.jpg">
            15 mayo 2025
          </a>
        </span> –{" "}
        <span style={{ color: '#33cccc' }}>
          <span style={{ textDecoration: 'underline' }}>
            <a style={{ color: '#33cccc', textDecoration: 'underline' }} href="https://blacks.university/wp-content/uploads/2025/05/gente2.jpg">
              9 mayo 2025
            </a>
          </span> –{" "}
        </span>
        <a href="https://blacks.university/wp-content/uploads/2025/05/001-1.jpg">
          <span style={{ textDecoration: 'underline' }}>
            <span style={{ color: '#33cccc', textDecoration: 'underline' }}>14 enero 2025</span>
          </span>
        </a>{" "}
        –{" "}
        <span style={{ textDecoration: 'underline' }}>
          <span style={{ color: '#33cccc', textDecoration: 'underline' }}>
            <a style={{ color: '#33cccc', textDecoration: 'underline' }} href="https://blacks.university/wp-content/uploads/2025/05/002-1.jpg">
              1 febrero 2025
            </a>
          </span>
        </span>{" "}
        –{" "}
        <span style={{ textDecoration: 'underline' }}>
          <a href="https://blacks.university/wp-content/uploads/2025/05/003-1.jpg">
            <span style={{ color: '#33cccc', textDecoration: 'underline' }}>1 marzo 2025</span>
          </a>
        </span>{" "}
        –{" "}
        <a href="https://blacks.university/wp-content/uploads/2025/05/004-1.jpg">
          <span style={{ color: '#33cccc' }}>
            <span style={{ textDecoration: 'underline' }}>1 abril 2025</span>
          </span>
        </a>{" "}
        –{" "}
        <span style={{ textDecoration: 'underline' }}>
          <span style={{ color: '#33cccc', textDecoration: 'underline' }}>
            <a style={{ color: '#33cccc', textDecoration: 'underline' }} href="https://blacks.university/wp-content/uploads/2025/05/005-1.jpg">
              1 mayo 2025
            </a>
          </span>
        </span>
      </p>
    </div>
  );
};

export default SalesStats;
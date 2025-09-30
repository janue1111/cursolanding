import React from 'react';

const mentors = [
  {
    name: 'Mauricio Duque',
    role: 'Director Blacks.University®',
    photo: 'https://blacks.university/wp-content/uploads/2025/04/jueves.jpg',
  },
  {
    name: 'Marcos Araujo',
    role: 'Tráfico Pago',
    photo: 'https://blacks.university/wp-content/uploads/2025/04/lunes.jpg',
  },
  {
    name: 'Kike Cadena',
    role: 'Inteligencia Artificial',
    photo: 'https://blacks.university/wp-content/uploads/2025/04/martes.jpg',
  },
  {
    name: 'Diana Aragón',
    role: 'Closer Digital Profesional',
    photo: 'https://blacks.university/wp-content/uploads/2025/04/miercoles.jpg',
  },
  {
    name: 'Nino Scarpato',
    role: 'Diseño y Crafting Digital',
    photo: 'https://blacks.university/wp-content/uploads/2025/04/viernes.jpg',
  },
];

const InstructorInfo = () => {
  return (
    <section className="section-block">
      <div className="mentors-banner">
        <h2 className="mentors-banner__heading">MENTORÍA PARA TODA LA VIDA</h2>
        <span className="section-block__subtext">Hotmart® para toda la vida.</span>
        <div className="mentor-cards">
          {mentors.map((mentor) => (
            <div className="mentor-card" key={mentor.name}>
              <img className="mentor-card__photo" src={mentor.photo} alt={mentor.name} loading="lazy" />
              <h4>{mentor.name}</h4>
              <p>{mentor.role}</p>
            </div>
          ))}
        </div>
      </div>

      <img
        className="team-photo"
        loading="lazy"
        decoding="async"
        src="https://i0.wp.com/blacks.university/wp-content/uploads/2025/05/equipo.jpg?fit=800%2C317&ssl=1"
        alt="Equipo Blacks.University"
      />

      <div className="bio-section">
        <h3>¿Quién es Mauricio Duque y por qué puede ayudarle?</h3>
        <p>
          Mauricio Duque lleva 30 años trabajando por Internet y 23 de ellos dedicados a la creación y comercialización de
          educación en línea.
        </p>
        <p>
          Es Administrador de Negocios de la Universidad de Sanbuenaventura Cali y{' '}
          <a href="https://blacks.university/wp-content/uploads/2025/05/Andes.jpg" target="_blank" rel="noopener">
            especialista en eCommerce de la Universidad de Los Andes
          </a>{' '}
          además de especialista en Derecho de las Telecomunicaciones y TICs en Colombia.
        </p>
        <p>
          Cuenta con múltiples certificaciones, cursos, talleres y seminarios exitosos en la industria de la educación digital
          en habla hispana.
        </p>
        <p>
          Mauricio ha creado proyectos como Seminarios.Online® alcanzando una facturación récord de más de 77 millones de dólares
          (GMV) en poco más de 4 años y Universidad.Online® con más de 150 mil estudiantes activos.
        </p>
        <p>
          Actualmente lidera Universidad.Online® y Blacks.University®, promoviendo la afiliación como modelo de negocio y
          respuesta a la empleabilidad en países de habla hispana.
        </p>
      </div>

      <div className="bio-section">
        <h3>Mauricio Duque ha recibido 14 premios Hotmart®</h3>
        <ul>
          <li>
            <a href="https://blacks.university/wp-content/uploads/2025/04/fotoPremios.jpg" target="_blank" rel="noopener">
              3 Premios Hotmart® Galaxy por 3 años consecutivos
            </a>
          </li>
          <li>
            <a href="https://blacks.university/wp-content/uploads/2025/04/fotoPremios.jpg" target="_blank" rel="noopener">
              6 Premios Hotmart® Black (1.200.000 dólares de ingreso neto)
            </a>
          </li>
          <li>
            <a href="https://blacks.university/wp-content/uploads/2025/04/fotoPremios.jpg" target="_blank" rel="noopener">
              3 Premios Hotmart® Moon (3 millones de dólares de ingreso neto)
            </a>
          </li>
          <li>
            <a href="https://blacks.university/wp-content/uploads/2025/04/fotoPremios.jpg" target="_blank" rel="noopener">
              2 Premios Hotmart® Venus (4 millones de dólares de ingreso neto)
            </a>
          </li>
        </ul>
      </div>

      <div className="bio-section">
        <p>
          Mauricio Duque Zuluaga ha sido invitado como conferencista en{' '}
          <a href="https://blacks.university/wp-content/uploads/2025/04/mdz.jpg" target="_blank" rel="noopener">
            múltiples eventos internacionales y congresos
          </a>
          . Su trabajo ha sido destacado en medios como{' '}
          <a href="https://blacks.university/wp-content/uploads/2025/04/forbes.jpg" target="_blank" rel="noopener">
            Forbes
          </a>
          ,{' '}
          <a href="https://blacks.university/wp-content/uploads/2025/04/europapress.jpg" target="_blank" rel="noopener">
            EuropaPress
          </a>
          ,{' '}
          <a href="https://blacks.university/wp-content/uploads/2024/10/rs.jpg" target="_blank" rel="noopener">
            Revista Semana
          </a>
          ,{' '}
          <a href="https://blacks.university/wp-content/uploads/2025/04/espectador.jpg" target="_blank" rel="noopener">
            Diario El Espectador
          </a>
          ,{' '}
          <a href="https://blacks.university/wp-content/uploads/2024/10/mercurio.jpg" target="_blank" rel="noopener">
            Diario El Mercurio (Chile)
          </a>
          ,{' '}
          <a href="https://blacks.university/wp-content/uploads/2024/10/yahoo.jpg" target="_blank" rel="noopener">
            Yahoo Finanzas Latam
          </a>{' '}
          y{' '}
          <a href="https://blacks.university/wp-content/uploads/2024/10/emprendedoresdehoy.jpg" target="_blank" rel="noopener">
            Revista Emprendedores de Hoy
          </a>
          , entre otros.
        </p>
        <p>
          Recibió el{' '}
          <a href="https://blacks.university/wp-content/uploads/2025/05/photo_2022-12-04_11-18-51.jpg" target="_blank" rel="noopener">
            premio 40 en 7
          </a>{' '}
          por facturar más de 1 millón de dólares en 7 días durante 11 meses consecutivos.
        </p>
        <p>
          Además, es parte del selecto grupo de las 25 empresas más grandes del mundo en el mercado de Hotmart® y ha recibido el{' '}
          <a href="https://blacks.university/wp-content/uploads/2025/05/galaxy.jpg" target="_blank" rel="noopener">
            premio Hotmart® Galaxy
          </a>{' '}
          durante 3 años consecutivos.
        </p>
      </div>

      <div className="bio-section">
        <div className="media-frame">
          <iframe
            allowFullScreen
            allow="clipboard-write"
            title="Reproductor de vídeo videopress"
            src="https://videopress.com/embed/VPepnCAO?at&controls=1&autoPlay=0&muted=0&loop=0&playsinline=0"
          ></iframe>
        </div>
        <p>
          Mauricio también ha recibido los premios{' '}
          <a href="https://blacks.university/wp-content/uploads/2025/05/galaxy.jpg" target="_blank" rel="noopener">
            Hotmart® Galaxy
          </a>{' '}
          y{' '}
          <a href="https://blacks.university/wp-content/uploads/2025/05/photo_2024-07-09_21-01-08.jpg" target="_blank" rel="noopener">
            Hotmart® Explorers
          </a>{' '}
          por su transformación y desempeño en el mercado de habla hispana.
        </p>
      </div>
    </section>
  );
};

export default InstructorInfo;

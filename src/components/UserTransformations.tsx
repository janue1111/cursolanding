import React from 'react';

const UserTransformations = () => {
  const links = [
    { label: '1', href: 'https://blacks.university/wp-content/uploads/2025/05/001.jpg' },
    { label: '2', href: 'https://blacks.university/wp-content/uploads/2025/05/002.jpg' },
    { label: '3', href: 'https://blacks.university/wp-content/uploads/2025/05/003.jpg' },
    { label: '4', href: 'https://blacks.university/wp-content/uploads/2025/05/004.jpg' },
    { label: '5', href: 'https://blacks.university/wp-content/uploads/2025/05/005.jpg' },
    { label: '6', href: 'https://blacks.university/wp-content/uploads/2025/05/006.jpg' },
    { label: '7', href: 'https://blacks.university/wp-content/uploads/2025/05/007.jpg' },
    { label: '8', href: 'https://blacks.university/wp-content/uploads/2025/05/008.jpg' },
    { label: '9', href: 'https://blacks.university/wp-content/uploads/2025/05/009.jpg' },
    { label: '10', href: 'https://blacks.university/wp-content/uploads/2025/05/010.jpg' },
  ];

  return (
    <section className="section-block">
      <p className="section-block__heading">MÁS USUARIOS COMPARTIENDO SU TRANSFORMACIÓN</p>
      <div className="transform-links">
        {links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noopener">
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default UserTransformations;

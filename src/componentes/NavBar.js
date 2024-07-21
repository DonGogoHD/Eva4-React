import React from 'react';

const NavBar = ({ showSection }) => {
  return (
    <nav>
      <ul>
        <li><a href="#!" onClick={() => showSection('section-quienessomos')}>Quiénes Somos</a></li>
        <li><a href="#!" onClick={() => showSection('section-contacto')}>Contáctenos</a></li>
        <li><a href="#!" onClick={() => showSection('section-lista')}>Lista</a></li>
        <li><a href="#!" onClick={() => showSection('section-contenido')}>Contenido</a></li>
        <li><a href="#!" onClick={() => showSection('section-ruleta')}>Ruleta</a></li>
        <li><a href="#!" onClick={() => showSection('section-sugerencia')}>Sugerencias</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;

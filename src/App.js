import React, { useState } from 'react';
import './App.css';
import NavBar from './componentes/NavBar';
import Imagenportada from './componentes/Imagenportada';
import QuienesSomos from './componentes/QuienesSomos';
import Contacto from './componentes/Contacto';
import Lista from './componentes/Lista';
import Contenido from './componentes/Contenido';
import Ruleta from './componentes/Ruleta';
import Sugerencias from './componentes/Sugerencias';
import Footer from './componentes/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('section-quienessomos');

  const showSection = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="App">
      <NavBar showSection={showSection} />
      <Imagenportada />
      {currentSection === 'section-quienessomos' && <QuienesSomos />}
      {currentSection === 'section-contacto' && <Contacto />}
      {currentSection === 'section-lista' && <Lista />}
      {currentSection === 'section-contenido' && <Contenido />}
      {currentSection === 'section-ruleta' && <Ruleta />}
      {currentSection === 'section-sugerencia' && <Sugerencias />}
      <Footer />
    </div>
  );
}

export default App;


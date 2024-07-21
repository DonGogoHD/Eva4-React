import React from 'react';

function Contenido() {
    return (
        <section id="section-contenido" className="section-contenido">
            <div className="grid-container">
                <div data-text="Emuladores" style={{ '--r': '-15' }} className="glass emuladores">
                    <a href="https://vimm.net/emulate" aria-label="Ir a Emuladores">
                        <img
                            src="https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenes/emuladores.png"
                            alt="Imagen de emuladores"
                            className="image"
                        />
                    </a>
                </div>
                <div data-text="Videojuegos" style={{ '--r': '5' }} className="glass juegos">
                    <a href="https://vimm.net/vault" aria-label="Ir a Videojuegos">
                        <img
                            src="https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenes/juegos.jpg"
                            alt="Imagen de videojuegos"
                            className="image"
                        />
                    </a>
                </div>
                <div data-text="Noticias" style={{ '--r': '25' }} className="glass noticias">
                    <a href="https://www.levelup.com/noticias" aria-label="Ir a Noticias">
                        <img
                            src="https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenes/noticias.jpeg"
                            alt="Imagen de noticias"
                            className="image"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contenido;

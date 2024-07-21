import React, { useState } from 'react';

const juegos = [
    { names: ["Super Mario Bros"], link: "https://vimm.net/vault/834", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/1.jpg" },
    { names: ["Super Mario Bros 3"], link: "https://vimm.net/vault/836", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/2.jpg" },
    { names: ["Tetris"], link: "https://vimm.net/vault/880", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/3.jpg" },
    { names: ["Super Mario Bros 2"], link: "https://vimm.net/vault/835", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/4.jpg" },
    { names: ["Donkey Kong"], link: "https://vimm.net/vault/257", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/5.jpg" },
    { names: ["Excitebike"], link: "https://vimm.net/vault/302", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/6.jpg" },
    { names: ["Megaman 2"], link: "https://vimm.net/vault/546", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/7.jpg" },
    { names: ["Dr. Mario"], link: "https://vimm.net/vault/287", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/8.jpg" },
    { names: ["Sonic"], link: "https://vimm.net/vault/2343", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/9.jpg" },
    { names: ["Sonic 2"], link: "https://vimm.net/vault/2344", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/10.jpg" },
    { names: ["Super Mario World"], link: "https://vimm.net/vault/1652", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/11.jpg" },
    { names: ["Donkey Kong Country"], link: "https://vimm.net/vault/1169", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/12.jpg" },
    { names: ["Super Metriod"], link: "https://vimm.net/vault/1654", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/13.jpg" },
    { names: ["Chrono Trigger"], link: "https://vimm.net/vault/1127", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/14.jpg" },
    { names: ["The Legend Of Zelda: ALTTP"], link: "https://vimm.net/vault/1346", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/15.jpg" },
    { names: ["Killer Instinc"], link: "https://vimm.net/vault/1327", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/16.jpg" },
    { names: ["Kirby Super Star"], link: "https://vimm.net/vault/1336", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/17.jpg" },
    { names: ["Street Fighter II Turbo"], link: "https://vimm.net/vault/1609", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/18.jpg" },
    { names: ["Street Fighter Alpha 2"], link: "https://vimm.net/vault/1610", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/19.jpg" },
    { names: ["Super Mario All-Stars"], link: "https://vimm.net/vault/1648", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/20.jpg" },
    { names: ["X-Men vs. Street Fighter"], link: "https://vimm.net/vault/6861", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/21.jpg" },
    { names: ["WWF SmackDown! 2: Know Your Role"], link: "https://vimm.net/vault/7175", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/22.jpg" },
    { names: ["Resident Evil 2"], link: "https://vimm.net/vault/6037", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/23.jpg" },
    { names: ["Resident Evil: Director's Cut"], link: "https://vimm.net/vault/17068", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/24.jpg" },
    { names: ["Resident Evil 3: Nemesis"], link: "https://vimm.net/vault/6038", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/25.jpg" },
    { names: ["Crash Bandicoot"], link: "https://vimm.net/vault/5953", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/26.jpg" },
    { names: ["Silent Hill"], link: "https://vimm.net/vault/6039", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/27.jpg" },
    { names: ["Castlevania: Symphony of the Night"], link: "https://vimm.net/vault/5963", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/28.jpg" },
    { names: ["Metal Gear Solid"], link: "https://vimm.net/vault/5943", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/29.jpg" },
    { names: ["Tekken 3"], link: "https://vimm.net/vault/6116", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/30.jpg" },
    { names: ["Spyro the Dragon"], link: "https://vimm.net/vault/6040", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/31.jpg" },
    { names: ["Final Fantasy VII"], link: "https://vimm.net/vault/2826", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/32.jpg" },
    { names: ["CTR: Crash Team Racing"], link: "https://vimm.net/vault/6194", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/33.jpg" },
    { names: ["Crash Bandicoot 2: Cortex Strikes Back"], link: "https://vimm.net/vault/5956", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/34.jpg" },
    { names: ["Crash Bandicoot: Warped"], link: "https://vimm.net/vault/5955", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/35.jpg" },
    { names: ["Mega Man X6"], link: "https://vimm.net/vault/2842", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/36.jpg" },
    { names: ["Dino Crisis"], link: "https://vimm.net/vault/5964", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/37.jpg" },
    { names: ["Dino Crisis 2"], link: "https://vimm.net/vault/5974", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/38.jpg" },
    { names: ["Disney-Pixar Toy Story 2: Buzz Lightyear to the Rescue!"], link: "https://vimm.net/vault/6430", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/39.jpg" },
    { names: ["Jackie Chan Stuntmaster"], link: "https://vimm.net/vault/6590", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/40.jpg" },
    { names: ["Legacy of Kain: Soul Reaver"], link: "https://vimm.net/vault/6003", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/41.jpg" },
    { names: ["Metal Gear Solid: HD Collections"], link: "https://vimm.net/vault/25246", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/42.jpg" },
    { names: ["Red Dead Redemption - GOTY"], link: "https://vimm.net/vault/25436", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/43.jpg" },
    { names: ["Donkey Kong Country Return"], link: "https://vimm.net/vault/17392", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/44.jpg" },
    { names: ["Super Smash Bros Brawl"], link: "https://vimm.net/vault/18177", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/45.jpg" },
    { names: ["Golden Sun"], link: "https://vimm.net/vault/5359", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/46.jpg" },
    { names: ["Castlevania: Aria of Sorrow"], link: "https://vimm.net/vault/5149", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/47.jpg" },
    { names: ["Golden Sun: The Lost Age"], link: "https://vimm.net/vault/5360", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/48.jpg" },
    { names: ["God Of War: Ghost of Sparta"], link: "https://vimm.net/vault/24005", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/49.jpg" },
    { names: ["Final Fantasy III"], link: "https://vimm.net/vault/18855", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/50.jpg" },
    { names: ["Metal Gear Peace Walker"], link: "https://vimm.net/vault/23867", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/51.jpg" },
    { names: ["Kingdom Heart birth by sleep"], link: "https://vimm.net/vault/23997", image: "https://raw.githubusercontent.com/DonGogoHD/Imagenes/main/imagenes%20nube/Imagenesjuegos/52.jpg" }
];

function Ruleta() {
    const [resultado, setResultado] = useState('');
    const [imagen, setImagen] = useState('');

    const suerteJuego = () => {
        let currentIndex = 0;
        const intervalTime = 100; // Tiempo entre cada actualización de la ruleta
        const spinTime = 3000; // Tiempo total para la animación de la ruleta

        // Mostrar una imagen inicial
        setImagen(juegos[0].image);

        // Girar la ruleta
        const interval = setInterval(() => {
            const juego = juegos[currentIndex];
            setResultado(`Juego: ${juego.names[0]}`);
            setImagen(juego.image);
            currentIndex = (currentIndex + 1) % juegos.length;
        }, intervalTime);

        // Detener la ruleta y mostrar un juego aleatorio
        setTimeout(() => {
            clearInterval(interval);
            const randomIndex = Math.floor(Math.random() * juegos.length);
            const selectedCartucho = juegos[randomIndex];
            setResultado(`Juego aleatorio: <a href="${selectedCartucho.link}" target="_blank">${selectedCartucho.names[0]}</a>`);
            setImagen(selectedCartucho.image);
        }, spinTime);
    };

    return (
        <section id="section-ruleta" className="section-ruleta">
            <div className="ruleta">
                <h2>RULETA</h2>
                <button id="suerteBtn" onClick={suerteJuego}>Voy a tener suerte</button>
                <p id="resultado" dangerouslySetInnerHTML={{ __html: resultado }}></p>
                <img id="imagen" src={imagen} alt="Portada" style={{ maxWidth: '200px', display: imagen ? 'block' : 'none' }} />
            </div>
        </section>
    );
}

export default Ruleta;
import React, { useState } from 'react';

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        numero: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { nombre, correo, numero } = formData;

        if (nombre && correo && numero) {
            alert(`Se guardó correctamente en nuestro sistema:\n\nNombre: ${nombre}\nCorreo: ${correo}\nCelular: ${numero}`);
            setFormData({
                nombre: '',
                correo: '',
                numero: '',
            });
        } else {
            alert('Por favor, complete todos los campos.');
        }
    };

    return (
        <section id="section-contacto" className="section-contacto">
            <div className="contactoh2">
                <h2>Contacto</h2>
            </div>
            <div className="contacto">
                <form className="form row" id="contactoForm" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="inputnombre" className="form-label">Nombre:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            id="inputnombre"
                            placeholder=""
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputemail" className="form-label">Correo:</label>
                        <input
                            type="email"
                            className="form-control"
                            name="correo"
                            id="inputemail"
                            placeholder="name@example.com"
                            value={formData.correo}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputnumero" className="form-label">Celular:</label>
                        <input
                            type="tel"
                            className="form-control"
                            name="numero"
                            id="inputnumero"
                            placeholder=""
                            value={formData.numero}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="contactoboton">Guardar</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contacto;

import React, { useState } from 'react';

const Sugerencias = () => {
    const [personas, setPersonas] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [formData, setFormData] = useState({
        Nickname: '',
        personaEmail: '',
        sugerenciaCliente: '',
        region: '',
        EstadoEstudiante: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCheckboxChange = (event) => {
        setFormData({
            ...formData,
            EstadoEstudiante: event.target.value
        });
    };

    const addPersona = (event) => {
        event.preventDefault();
        const { Nickname, personaEmail, sugerenciaCliente, region, EstadoEstudiante } = formData;

        if (!EstadoEstudiante) {
            alert('Debes completar el formulario antes de mandar la sugerencia UwU');
            return;
        }

        const fechaHora = new Date().toLocaleString();

        if (editIndex === -1) {
            setPersonas([
                ...personas,
                { Nickname, personaEmail, sugerenciaCliente, region, EstadoEstudiante, fechaHora }
            ]);
        } else {
            const updatedPersonas = [...personas];
            updatedPersonas[editIndex] = { Nickname, personaEmail, sugerenciaCliente, region, EstadoEstudiante, fechaHora };
            setPersonas(updatedPersonas);
            setEditIndex(-1);
        }

        setFormData({
            Nickname: '',
            personaEmail: '',
            sugerenciaCliente: '',
            region: '',
            EstadoEstudiante: ''
        });
        toggleDownloadButton();
    };

    const deletePersona = (index) => {
        const updatedPersonas = personas.filter((_, i) => i !== index);
        setPersonas(updatedPersonas);
        toggleDownloadButton();
    };

    const editPersona = (index) => {
        const persona = personas[index];
        setFormData({
            Nickname: persona.Nickname,
            personaEmail: persona.personaEmail,
            sugerenciaCliente: persona.sugerenciaCliente,
            region: persona.region,
            EstadoEstudiante: persona.EstadoEstudiante
        });
        setEditIndex(index);
    };

    const downloadAllPersonas = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(personas));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "sugerencias.json");
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
        alert('SE DESCARGÓ EL ARCHIVO EN FORMATO JSON');
    };

    const checkEstudiante = (checkboxId) => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"][name="EstadoEstudiante"]');
        checkboxes.forEach((checkbox) => {
            if (checkbox.id !== checkboxId) {
                checkbox.checked = false;
            }
        });
    };

    const toggleDownloadButton = () => {
        const downloadButton = document.getElementById('downloadAllButton');
        if (personas.length > 0) {
            downloadButton.style.display = 'block';
        } else {
            downloadButton.style.display = 'none';
        }
    };

    return (
        <section id="section-sugerencia" className="section-sugerencia">
            <h2>Sugerencias</h2>
            <form id="FormularioSugerencia" onSubmit={addPersona}>
                <label htmlFor="Nickname">Ingrese su Nickname: </label>
                <input
                    type="text"
                    id="Nickname"
                    name="Nickname"
                    value={formData.Nickname}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="personaEmail">Email: </label>
                <input
                    type="email"
                    id="personaEmail"
                    name="personaEmail"
                    value={formData.personaEmail}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="sugerenciaCliente">¿Qué juego quisieras que se agregara a la ruleta?</label>
                <input
                    type="text"
                    id="sugerenciaCliente"
                    name="sugerenciaCliente"
                    value={formData.sugerenciaCliente}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="region">¿De dónde eres?</label>
                <select
                    id="region"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Seleccione una región</option>
                    <option value="Arica y Parinacota">Arica y Parinacota</option>
                    <option value="Tarapacá">Tarapacá</option>
                    <option value="Antofagasta">Antofagasta</option>
                    <option value="Atacama">Atacama</option>
                    <option value="Coquimbo">Coquimbo</option>
                    <option value="Valparaíso">Valparaíso</option>
                    <option value="Metropolitana de Santiago">Metropolitana de Santiago</option>
                    <option value="O'Higgins">O'Higgins</option>
                    <option value="Maule">Maule</option>
                    <option value="Ñuble">Ñuble</option>
                    <option value="Biobío">Biobío</option>
                    <option value="Araucanía">Araucanía</option>
                    <option value="Los Ríos">Los Ríos</option>
                    <option value="Los Lagos">Los Lagos</option>
                    <option value="Aysén">Aysén</option>
                    <option value="Magallanes y la Antártica Chilena">Magallanes y la Antártica Chilena</option>
                </select>

                <div id="OpcionEstudiante">
                    <p>¿Eres alumno Inacap?</p>
                    <div className="checkbox-wrapper-19">
                        <input
                            type="checkbox"
                            id="estudianteSi"
                            name="EstadoEstudiante"
                            value="Si"
                            checked={formData.EstadoEstudiante === 'Si'}
                            onChange={handleCheckboxChange}
                            onClick={() => checkEstudiante('estudianteSi')}
                        />
                        <label className="check-box" htmlFor="estudianteSi"></label>
                        <span className="checkbox-label">SI</span>
                    </div>
                    <div className="checkbox-wrapper-19">
                        <input
                            type="checkbox"
                            id="estudianteNo"
                            name="EstadoEstudiante"
                            value="No"
                            checked={formData.EstadoEstudiante === 'No'}
                            onChange={handleCheckboxChange}
                            onClick={() => checkEstudiante('estudianteNo')}
                        />
                        <label className="check-box" htmlFor="estudianteNo"></label>
                        <span className="checkbox-label">NO</span>
                    </div>
                </div>
                <button type="submit">Mandar Sugerencia</button>
            </form>
            <h2>Lista de Sugerencias</h2>
            <div id="sugelist">
                <table>
                    <thead>
                        <tr>
                            <th>Nickname</th>
                            <th>Email</th>
                            <th>Sugerencia</th>
                            <th>Region</th>
                            <th>Alumno</th>
                            <th>Fecha y Hora</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personas.map((persona, index) => (
                            <tr key={index}>
                                <td data-label="Nickname">{persona.Nickname}</td>
                                <td data-label="Email">{persona.personaEmail}</td>
                                <td data-label="Sugerencia">{persona.sugerenciaCliente}</td>
                                <td data-label="Región">{persona.region}</td>
                                <td data-label="Estudiante">{persona.EstadoEstudiante}</td>
                                <td data-label="Fecha y Hora">{persona.fechaHora}</td>
                                <td className="acciones">
                                    <button onClick={() => editPersona(index)}>Editar</button>
                                    <button onClick={() => deletePersona(index)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {personas.length > 0 && (
                <button
                    id="downloadAllButton"
                    style={{ display: 'block' }}
                    onClick={downloadAllPersonas}
                >
                    Descargar Todo
                </button>
            )}
        </section>
    );
};

export default Sugerencias;

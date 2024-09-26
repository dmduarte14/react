
import React, { useState } from 'react';

function Form() {

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        type: '',
        message: '',
        customer: false, // Cambiado a booleano
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        alert('El mensaje se envió con exito, por favor revise la consola para ver el contenido', formData);
    };
    const handleReset = () => {
        setFormData({
            name: '',
            lastName: '',
            email: '',
            phone: '',
            type: '',
            message: '',
            customer: false,
        });
    };

    return (

        <section id="Contacto">
        <form onSubmit={handleSubmit}>
            <div className="contactContainer">
                <div className="form">
                    <div className="conta">
                        <div className="contenedor"></div>
                        <img src="../../public/img/LogoServicioTecnico.png" style={{width: "200px"}} alt="Logo"/>
                        <label htmlFor="name">Nombre: </label>
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="nombre "
                            required/>
                        
                        <label htmlFor="lastName">Apellido: </label>
                        <input 
                            type="text" 
                            name="lastName" 
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="apellido "
                            required/>
                                
                        <label htmlFor="email">Email: </label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email " 
                            required/>

                        <label htmlFor="phone">Teléfono: </label>
                        <input 
                            type="text" 
                            name="phone" 
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="teléfono " 
                            required/>

                        <label htmlFor="type">Tipo de consulta: </label>
                        <input 
                            type="text" 
                            list="tipoconsulta" 
                            name="type"
                            value={formData.type}
                            onChange={handleChange} 
                            placeholder="Presione aquí... " />
                        <datalist id="tipoconsulta">
                            <option value="Sugerencia" />
                            <option value="Solicitud" />
                            <option value="Reclamo" />
                            <option value="Otros" />
                        </datalist>
            
                        <label htmlFor="customer">Ya es cliente:   
                            <input 
                                type="checkbox" 
                                name="customer"
                                checked={formData.customer}
                                onChange={(e) => setFormData({ ...formData, customer: e.target.checked })} 
                            />
                        </label>
                    </div>
       
                    <div className="contaMsg">
                        <label htmlFor="message">Mensaje</label>
                        <br />
                        <textarea 
                            name="message" 
                            className="textarea" 
                            value={formData.message}
                            onChange={handleChange} 
                            placeholder="Escriba aquí su mensaje..." 
                        />
                    </div>
                </div>
                <div className='botones'>
                    <button type="submit" className="btn btn-success">Enviar</button>
                    <button type="button" onClick={handleReset} className="btn btn-danger">Borrar</button>
                </div>
            </div>
        </form>
        </section>
    );
};

export default Form;

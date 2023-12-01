import React,{useState} from "react";
import "./styles.css"

function Contact (){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: '',
        message: '',
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here, such as sending data to a server
        console.log('Form submitted:', formData);
      };

    return(
        <section className="contact-containet">
            <div className="contact-text">
                <h2>¿Te gustaría contactarte con nosotros?</h2>
                <h2>Escríbenos</h2>
                <div>
                    <img />
                </div>
            </div>

            <div className="form-container">

                        <form onSubmit={handleSubmit}>
                            {/* Name */}
                            <label htmlFor="name">Nombre:</label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            />

                            <br />

                            {/* Email */}
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            />

                            <br />

                            {/* Telephone */}
                            <label htmlFor="telephone">Teléfono:</label>
                            <input
                            type="tel"
                            id="telephone"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            required
                            />

                            <br />

                            {/* Text */}
                            <label htmlFor="message">Mensaje:</label>
                            <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Escribe tu mensaje"
                            required
                            ></textarea>

                            <br />

                            {/* Submit Button */}
                            <div className="button-container">
                              <button type="submit">ENVIAR</button>
                            </div>
                            
                        </form>
                </div>


        </section>
    )
}

export {Contact}
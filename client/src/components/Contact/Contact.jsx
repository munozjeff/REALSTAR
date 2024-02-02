import React,{useState} from "react";
import "./styles.css"
import right_arrow from "/src/assets/icons/right-arrow-black.png"

function Contact ({showNodal=()=>{}}){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: '',
        message: '',
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async(e) => {
        e.preventDefault();

        try {
          const response = await fetch('server/server.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData).toString(),
          });
          const datosJSON = null
          if (response.ok) {
            datosJSON = await respuesta.json();
            console.error('succes to send email');
            // console.log(datosJSON);
          } else {
            datosJSON = await respuesta.json();
            console.error('Failed to send email');
            // console.log(datosJSON);
          }
          showNodal(datosJSON)
        } catch (error) {
          console.error('Error sending email:', error);
        }


        console.log('Form submitted:', formData);
      };

    return(
        <section id="contact-form" className="contact-containet">
            <div className="contact-text">
                <div>
                  <h2>¿Te gustaría <br/> contactarte con <br/> nosotros?</h2>
                </div>
                <div>
                  <h2>¡Escríbenos!</h2>
                </div>
                
                <div>
                    <img src={right_arrow} alt="right-arrow"/>
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
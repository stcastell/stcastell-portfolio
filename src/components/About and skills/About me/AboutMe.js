import React, {useEffect} from "react";
import './AboutMe.css'
import Aos from "aos";

const AboutMe = () => { 

    useEffect(() => { 
        Aos.init({duration: 500});
    });

    return (
        <div className="about-me-container" id='about-me'>
            <h2>Sobre mi</h2>
            <div className="image-n-info">
                <div className="image">
                    <img data-aos='fade-right' data-aos-delay='500' src="https://i.imgur.com/F25Jh9C.jpg" alt='me.jpg' />
                </div>

                <div className="info">
                <p>¡Hola! Mi nombre es <b className="yellow">Santiago Castellanos</b> y soy estudiante de ingeniería mecatrónica. Me apasiona el desarrollo web y he tenido la oportunidad de trabajar en varios proyectos emocionantes en esta área. Soy cofundador de <b className="blue">Jera Devs</b>, una empresa dedicada a desarrollar soluciones digitales creativas y efectivas.</p>

                    <p>Como diseñador de UI, tengo habilidades para crear interfaces de usuario atractivas y funcionales. Adicionalmente, tengo experiencia en desarrollo web utilizando <b className="orange">HTML</b>, <b className="blue">CSS</b>, <b className="yellow">Javascript</b>, <b className="pink">React.js</b>, <b className="blue">PHP</b>, <b className="pink">Bootstrap</b>, y otras tecnologías relacionadas. También tengo conocimientos sólidos en la creación, mantenimiento y gestión de bases de datos.</p>

                    <p>Como analista <b className="blue">SEO</b>, mi experiencia abarca la auditoría técnica, donde evalúo la optimización de imágenes, la densidad de palabras clave y la estructura de enlaces. En la redacción estratégica, identifico las palabras clave, creo contenido optimizado y analizo su rendimiento para mejorar el posicionamiento.</p>

                    <p>Este portafolio es una muestra de mi trabajo y habilidades. ¡Gracias por tu visita!</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe
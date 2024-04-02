import { Box } from "@mui/material";
import "./about.scss";

const About = () => {
    return (
        <Box className="about">
            <Box
                component="section"
                className="about__section">
                <h3>Misión</h3>
                <img
                    src="../../../public/images/about/mision.png"
                    alt="Fotrografía de la misión de la empresa"/>
                <p>Proporcionar las tecnologías más innovadoras a medida de las necesidades personales, con el
                        objetivo de incrementar
                        su competitividad y productividad. Para ello implementamos sla busqueda de articulos
                        electrónicos prácticas adaptados a sus necesidades donde desarrollamos nuevas soluciones
                        creativas para el bienestar de nuestros clientes.</p>
            </Box>

            <Box
                component="section"
                className="about__section about__section--vision">
                <h3>Visión</h3>
                <img
                    src="../../../public/images/about/vision.png"
                    alt="Fotrografía de la visión de la empresa"/>
                <p>Proporcionar las tecnologías más innovadoras a medida de las necesidades personales, con el
                        objetivo de incrementar su competitividad y productividad. Para ello implementamos sla busqueda
                        de articulos electrónicos prácticas adaptados a sus necesidades donde desarrollamos nuevas
                        soluciones creativas para el bienestar de nuestros clientes.</p>
            </Box>

            <Box
                component="section"
                className="about__section about__section--valores">
                <h3>Nuestros Valores</h3>
                <img
                    src="../../../public/images/about/valores.jpg"
                    alt="Fotrografía valores de la empresa"/>
                <p><ol><li><b>Honestidad.</b> La transparencia, sinceridad y franqueza, son valores que actualmente el público no solamente desea para las empresas, las exige.</li>
                    <li><b>Calidad:</b> Vivimos en un mundo donde todos dicen que tienen los mejores productos del mercado. Pero una cosa es afirmarlo y la otra es garantizarlo.</li>
                    <li><b>Puntualidad:</b> No solo estamos hablando de ser respetuoso con los plazos de entrega de mercancía. También darle la importancia a la puntualidad a la hora de llegada y salida.</li>
                    <li><b>Pasión:</b> Pocas cosas atraen más a clientes que ver personas que disfrutan lo que hacen. Por ello, el tener la pasión como valor de una empresa, servirá para crear y mantener la emocionalidad al tope y transmitir esa motivación al exterior.</li>
                    <li><b>Competitividad:</b> Tener la meta clara que sólo te puedes conformar estando en la cima, es un valor que muy pocos logran llevar a la práctica.</li>
                    <li><b>Trabajo en equipo:</b>  La gestión de equipos de trabajo surge como una necesidad importante en ambientes corporativos donde la tolerancia, respeto, la admiración y la consideración son las prioridades.</li></ol></p>
            </Box>

        </Box>
    );
};

export default About;
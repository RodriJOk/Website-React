import '../styles/AboutMe.scss';

const AboutMe = () => {
    return ( 
        <section className="about section" id="aboutme">
            <h2 className="section-title">Sobre mi</h2>

            <div className='about__container bg-grid'>
                <div className="about__img">
                    <img src="imagenes/index/Foto.jpg" alt="Alan Rodrigo Juarez" loading="lazy" />
                </div>

                <div className='about__container-info'>
                    <h2 className="about__subtitle">Alan Rodrigo Juarez</h2>
                    <p className="about__profession">Desarrollador Web Front-End </p>
                    <p className="about__text">Soy un desarrollador Web Front-End, autodidacta, apasionado por el desarrollo web, y con muchas ganas de formar parte de un equipo en el cual pueda aportar mis conocimientos y aceptar nuevos retos y desafios. Tambien me gusta mucho compartir mis conocimientos y me fascina que la tecnologia sea un medio que contribuya a eso. </p>

                    <div className="about__social">
                        <a href="https://www.linkedin.com/in/rodrijuarez/" className="about__social-icon"><i className='bx bxl-linkedin' ></i></a>
                        <a href="https://github.com/RodriJOk" className="about__social-icon"><i className='bx bxl-github' ></i></a>
                        <a href="https://www.instagram.com/preguntastech/" className="about__social-icon"><i className='bx bxl-instagram' ></i></a>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default AboutMe;
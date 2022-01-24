import '../styles/Welcome.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons';

const Welcome = () => {
    return ( 
        <section className="home" id="home">
            <h1 className="home__title">
                <i>
                    <span>Bienvenido a mi website! 👋</span>
                </i>
            </h1>
            <div className="home__description">
                <p>
                    Hola! Me llamo Alan Rodrigo Juarez 👦🏻. Soy desarrollador Web Front-End,  👨‍💻 y me encanta codear en JS 💛.
                    Soy una persona autodidacta, apasionado por la tecnologia 🦾 y el desarrollo web 💻, que le encanta compartir mis conocimientos con la comunidad 🤓.</p>
            </div>

            <div className='home__contactme'>
                <div className="home__scroll">
                    <a href="#about">
                        Scroll down
                    </a>
                    <FontAwesomeIcon icon={faArrowDown} className='faArrowUp'/>
                </div>
                <div className='home__social'>
                    <a href="https://www.linkedin.com/in/rodrijuarez/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className='faLinkedin'/>
                    </a>
                    <a href="https://github.com/RodriJOk" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className='faGithub'/>
                    </a>
                    <a href="https://www.instagram.com/preguntastech" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className='faInstagram'/>
                    </a>
                </div>
            </div>
        </section>
    );
}
 
export default Welcome;
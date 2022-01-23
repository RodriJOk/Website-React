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
            <div className="home_mini_container">
                <div className="home__scroll">
                    <a href="#about" className="home__scroll-link">
                        Scroll down
                    </a>
                    <FontAwesomeIcon icon={faArrowDown} className='faArrowUp'/>
                </div>
                <div class="text-cursor__prov">
                    <p>Hola! Me llamo Alan Rodrigo Juarez. Soy desarrollador Web Front-End y me encanta codear en JS</p>
                </div>
            </div>

            <div className='social-section'>
                    <a href="https://www.linkedin.com/in/alan-rodrigo-juarez-a8a8b5a4/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className='faLinkedin'/>
                    </a>
                    <a href="https://www.linkedin.com/in/alan-rodrigo-juarez-a8a8b5a4/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className='faGithub'/>
                    </a>
                    <a href="https://www.linkedin.com/in/alan-rodrigo-juarez-a8a8b5a4/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className='faInstagram'/>
                    </a>
            </div>
        </section>
    );
}
 
export default Welcome;
import '../styles/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return ( 
        <footer className="footer section">
            <div className="footer__container bd-grid">
                <div className="footer__data-personal">
                    <h2 className="footer__title">ALAN RODRIGO JUAREZ</h2>
                    <p className="footer__text">Espero que hayas disfrutado mi website. Si deseas compartir tu feedback, no dudes en contactarme.</p>
                </div>

                <div className="footer__data-explore">
                    <h2 className="footer__title">EXPLORE</h2>
                    <ul>
                        <li><a href="#home" className="footer__link">Home</a></li>
                        <li><a href="#about" className="footer__link">About</a></li>
                        <li><a href="#skills" className="footer__link">Skills</a></li>
                        <li><a href="#portfolio" className="footer__link">Portfolio</a></li>
                        <li><a href="#Contact" className="footer__link">Contact</a></li>
                    </ul>
                </div>
                
                <div className="footer__data-follow">
                    <h2 className="footer__title">FOLLOW</h2>
                    <a href="https://www.linkedin.com/in/rodrijuarez/" className="about__social-icon">
                        <FontAwesomeIcon icon={faLinkedin} className='icon'/>
                    </a>
                    <a href="https://github.com/RodriJOk" className="about__social-icon">
                        <FontAwesomeIcon icon={faGithub} className='icon'/>
                    </a>
                    <a href="https://www.instagram.com/preguntastech" className="about__social-icon">
                        <FontAwesomeIcon icon={faInstagram} className='icon'/>
                    </a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
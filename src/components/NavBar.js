import '../styles/NavBar.scss';
import { NavLink } from 'react-router-dom';
import Home from '../pages/Home';

const NavBar = () => {
    return ( 
        <header className="header">
            <nav className="header-nav bd-grid">
                <div className="header-nav__logo">
                    <NavLink to={Home} className="logo">Alan Rodrigo Juarez</NavLink>
                </div>

                <div className="header-nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to={'/home'} className="nav__link">Home</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to={'/home#aboutme'} className="nav__link">Sobre mi</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to={'/home#skills'} className="nav__link">Skills</NavLink>
                            {/* <a href="index.html#skills" className="nav__link">Skills</a> */}
                        </li>
                        <li className="nav__item">
                            <NavLink to={'/home#portfolio'} className="nav__link">Portfolio</NavLink>
                            {/* <a href="index.html#portfolio" className="nav__link">Portfolio</a> */}
                        </li>
                        <li className="nav__item">
                            <NavLink to={'/home#contact'} className="nav__link">Contacto</NavLink>
                            {/* <a href="index.html#contact" className="nav__link">Contacto</a> */}
                        </li>
                        <li className="nav__item">
                            <NavLink to={'/home#blog'} className="nav__link">Blog</NavLink>
                            {/* <a href="index.html#blog" className="nav__link">Blog</a> */}
                        </li>
                        <li className="nav__item">
                            <NavLink to={'/home#blog'} className="nav__link">Articulos</NavLink>
                            {/* <a href="index.html#blog" className="nav__link active">Articulos</a> */}
                        </li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>
     );
}
 
export default NavBar;
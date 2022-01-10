import '../styles/Welcome.scss';

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
                        <i class='bx bx-up-arrow-alt'></i>
                        Scroll down
                    </a>
                </div>

                <div id='type-me' className='text-cursor'></div>
            </div>
        </section>
     );
}
 
export default Welcome;
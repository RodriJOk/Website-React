import "../styles/Portfolio.scss";

const Portfolio = () => {
    return ( 
        <section className="portfolio section" id="portfolio">
            <h2 className="section-title">Portfolio</h2>

            {/* <div className="portfolio__container bd-grid"> */}
            <div className="portfolio__container">
                <div className="portfolio__img">
                    <img src="../imagenes/index/RODRIFLIX.png" alt="RODRIFLIX" loading="lazy" />

                    <div className="portfolio__link">
                        <a href="https://rodriflix.netlify.app/" className="portfolio__link-name" target="_blank">Ver mas</a>
                    </div>
                </div>
                <div className="portfolio__img">
                    <img src="../imagenes/index/ARQUIAR.png" alt="ARQUIAR" loading="lazy" />

                    <div className="portfolio__link">
                        <a href="https://arquiar.netlify.app/" className="portfolio__link-name" target="_blank">Ver mas</a>
                    </div>
                </div>
                <div className="portfolio__img">
                    <img src="../imagenes/index/RODRICUP.png" alt="RODRICUP" loading="lazy" />

                    <div className="portfolio__link">
                        <a href="https://rodri-cup.netlify.app/" className="portfolio__link-name" target="_blank">Ver mas</a>
                    </div>
                </div>
                <div className="portfolio__img">
                    <img src="../imagenes/index/RODRITECH.png" alt="RODRITECH" loading="lazy" />

                    <div className="portfolio__link">
                        <a href="https://rodri-tech.netlify.app/" className="portfolio__link-name" target="_blank">Ver mas</a>
                    </div>
                </div>
                <div className="portfolio__img">
                    <img src="../imagenes/index/RODRIBOOK.png" alt="RODRIBOOK" loading="lazy" />

                    <div className="portfolio__link">
                        <a href="https://rodrijok.github.io/RodriBook/" className="portfolio__link-name" target="_blank">Ver mas</a>
                    </div>
                </div>
                <div className="portfolio__img">
                    <img src="../imagenes/index/RODRI-WORLD.png" alt="RODRI-WORLD" loading="lazy" />

                    <div className="portfolio__link">
                        <a href="https://rodri-paises.netlify.app/" className="portfolio__link-name" target="_blank">Ver mas</a>
                    </div>
                </div>
                <div className="portfolio__img">
                    <img src="../imagenes/index/RodriVideoPlay.png" alt="RodriVideoPlay" loading="lazy" />

                    <div className="portfolio__link">
                        <a href="https://rodrivideo.netlify.app/" className="portfolio__link-name" target="_blank">Ver mas</a>
                    </div>
                </div>
                <div className="portfolio__img">
                    <img src="../imagenes/index/Portfolio Jaume.png" alt="Jaume" loading="lazy" />
                    <div className="portfolio__link">
                        <a href="https://portfoliojaume.netlify.app/" className="portfolio__link-name" target="_blank">Ver mas</a>
                    </div>
                </div>
                <div className="portfolio__img">
                    <img src="../imagenes/index/Portfolio Elisa.png" alt="Elisa" loading="lazy" />
                    <div className="portfolio__link">
                        <a href="https://portfolioelisa.netlify.app/" className="portfolio__link-name" target="_blank">Ver mas</a>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Portfolio;
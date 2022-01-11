import '../styles/Articles.scss';

const Articles = () => {
    return ( 
        <section id="articles">
            <h2 className="section-title">Articulos</h2>
            <div className="personal-articles">
                <a className="personal-articles_single" href="productividad.html">
                    <h2>Tips para aumentar tu productividad en el desarrollo. </h2>
                    <div className="read-more">
                        <p>Leer articulo</p>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                </a>
            </div>
        </section>
     );
}
 
export default Articles;
import '../styles/Blog.scss';

const Blog = () => {
    return ( 
        <section id="blog">
            <h2 className="section-title">Blog</h2>
            <div className="portfolio__container">
                <div className="portfolio__img">
                    <img src="../imagenes/NPM/NPM.png" alt="NPM" loading="lazy" width={300}/>
                    <div className="portfolio__link">
                        <a href="npm.html" className="portfolio__link-name">Ver mas</a>
                    </div>
                </div>

                <div className="portfolio__img">
                    <img src="../imagenes/Javascript/Javascript Icon.png" alt="Javascript" width={300} loading="lazy"/>
                    <div className="portfolio__link">
                        <a href="javascript.html" className="portfolio__link-name">Ver mas</a>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Blog;
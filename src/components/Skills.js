import '../styles/Skills.scss'

const Skills = () => {
    return ( 
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>

            <div className="skills__container">
                <div className="skills__box">
                    <h3 className="skills__subtitle">Desarrollo web  <i class="fas fa-laptop-code"></i></h3>
                        <span className="skills__name">Html <i class="fab fa-html5"></i></span>
                        <br/>
                        <span className="skills__name">CSS <i class="fab fa-css3-alt"></i></span>
                        <br/>
                        <span className="skills__name">Bootstrap <i class="fab fa-bootstrap"></i></span>
                        <br/>
                        <span className="skills__name">Javascript <i class="fab fa-js-square"></i></span>
                        <br/>
                        <span className="skills__name">Node <i class="fab fa-node"></i></span>
                        <br/>
                        <span className="skills__name">Sass <i class="fab fa-sass"></i></span>
                        <br/>
                        <span className="skills__name">React/Redux <i class="fab fa-react"></i></span>
                        <br/>
                        <span className="skills__name">Git/Github <i class="fab fa-github-square"></i></span>
                </div>

                <div className="skills__img">
                    <img 
                        width={400}
                        height={400}
                        src="../imagenes/index/coding-1853305.jpg" 
                        alt="Programing" 
                        loading="lazy" />
                </div>
            </div>
        </section>
     );
}
 
export default Skills;
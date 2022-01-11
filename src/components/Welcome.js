import '../styles/Welcome.scss';

//Functionality to type the text
// function init() {
//     var text = 'Hola! Me llamo Alan Rodrigo Juarez. Soy desarrollador Web Front-End y me encanta codear en JS .';
//     var i = 0;
//     var speed = 250;
//     var cursor = '_';
//     var element = document.getElementById('type-me');
//     var textArray = text.split('');
//     console.log(textArray);
//     var textArrayLength = textArray.length;
//     var timer = setInterval(function() {
//         if (i < textArrayLength) {
//             element.innerHTML += textArray[i];
//             i++;
//         } else {
//             clearInterval(timer);
//             setTimeout(function() {
//                 element.innerHTML = '';
//                 i = 0;
//                 // setTimeout(function() {
//                 //     // init();
//                 // }, speed);
//             }, speed);
//         }
//     }, speed);
// }

// init();

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

                {/* <div id='type-me' className='text-cursor'> */}
                <div class="text-cursor__prov">
                    <p>Hola! Me llamo Alan Rodrigo Juarez. Soy desarrollador Web Front-End y me encanta codear en JS</p>
                </div>
            </div>
        </section>
    );
}
 
export default Welcome;
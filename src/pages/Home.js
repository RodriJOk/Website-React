import React from 'react'
import Welcome from '../components/Welcome';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import ContactMe from '../components/ContactMe';
import Blog from '../components/Blog';
import Articles from '../components/Articles';

const Home = () => {
    return ( 
        <>
            <Welcome/>
            <AboutMe/>
            <Skills/>
            <ContactMe/>
            <Portfolio/>
            <Articles/>
            <Blog/>
        </>
     );
}
 
export default Home;
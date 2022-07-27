import React from 'react';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Navbar from './pages/Navbar';
import Profile from './pages/Profile';
import Skills from './pages/Skills';

const Home = () => {
  return (
    <section>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col s12 m4 l3">
            <Profile />
          </div>
          <div className="col s12 m8 l9">
            <About />
            <Skills />
            <Experience />
            <Education />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

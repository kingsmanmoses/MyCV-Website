import React from 'react';

const About = () => {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom header-me">ABOUT ME</h6>
          <p className="black-text text-darken-4 about-me">
            I am a creative Front-End Developer with 2 years of experience
            building and maintaining responsive websites. Proficient in HTML,
            CSS, JavaScript and React; plus modern libraries and frameworks. The
            ability to communicate with team mates well and also being able to
            learn and re-learn and constantly improve on my skills. I possess
            working knowledge of Adobe Photoshop, Figma, Java, Python, C#, SQL
            and PHP.
          </p>
        </div>
        <div className="card-action">
          <h6 className="header-me">PERSONAL INFO</h6>
          <div className="row mt">
            <div className="col s12 m6 l6 xl6">
              <p className="about-me">Email: kingsmanmoses@gmail.com</p>
              <p className="about-me">Phone: +234 813 105 8146</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

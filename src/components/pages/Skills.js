import React from 'react';
import { FrontendData } from '../Data/SkillsData';

const Skills = () => {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="header-me">PROFESSIONAL SKILLS</h6>
          <div className="row mt-top">
            {FrontendData.map((item, index) => (
              <div key={index} className="col s6">
                <p className="about-me">{item.header}</p>
                <p className="perct">{item.perct}</p>
                <div className="progress">
                  <div className="determinate" style={item.style}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

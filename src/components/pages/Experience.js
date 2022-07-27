import React from 'react';

const Experience = () => {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="header-me">EXPERIENCE</h6>
          <div className="row">
            <div className="col s12 m4 l4 xl4">
              <p className="teal year_exp white-text about-me">
                August 2016 - March 2020
              </p>
            </div>
            <div className="col s12 m8 l8 xl8">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">Laptop Technician </h6>
                <h6 className="no-pad mt-bottom exp-me">
                  Laptopstore.ng, Enugu State, Nigeria.
                </h6>
                <p className="about-me">
                  In Laptopstore.ng I was into repairing laptops and desktops.
                  Got some experience on the motherboard fixing and how most
                  things function.{' '}
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

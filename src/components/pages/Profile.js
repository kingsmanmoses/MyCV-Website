import React from 'react';
import Me from '../../img/me.jpg';
import { MdMoreVert } from 'react-icons/md';
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <div className="card small">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={Me} alt="" />
        </div>
        <div className="card-content">
          <span className="card-title grey-text text-darken-4 me-card">
            Okoye Moses
            <MdMoreVert className="material-icons right icon activator" />
          </span>
          <p className="me-card">Front-end Developer</p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4 ">Follow Me</span>
          <p className="flex-container">
            <NavLink
              to="//github.com/kingsmanmoses?tab=repositories"
              target="_blank"
            >
              <FaGithub className="grey-text text-darken-4 social-style" />
            </NavLink>
            <NavLink to="//www.instagram.com/kingsmanmoses/" target="_blank">
              <FaInstagram className="grey-text text-darken-4 social-style" />
            </NavLink>
            <NavLink to="//twitter.com/Iceagemoses" target="_blank">
              <FaTwitter className="grey-text text-darken-4 social-style" />
            </NavLink>
            <NavLink
              to="//www.linkedin.com/in/okoye-moses-976a5b1b5/"
              target="_blank"
            >
              <FaLinkedin className="grey-text text-darken-4 social-style" />
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

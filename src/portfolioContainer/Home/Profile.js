import React from "react";
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-github-square"></i>
            </a>

            <a href="#">
              <i className="fa fa-twitter-square"></i>
            </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Cherno</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                loop={Infinity}
                steps={[
                  "Enthusiastic Dev 🔴", 
                  1500,
                  "FullStack Dev 🖥", 
                  1500,
                  "MERN Stack Dev 😎", 
                  1500,
                  "React/React Native Dev 📲", 
                  1500,
                   
                ]}
                />
           
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and backend operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="CHERNO_CAMARA_Resume.pdf" download='CHERNO_CAMARA_Resume.pdf'>
              <button className="btn highlighted-btn">Get resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
        <div className="profile-picture-background">
          
          </div>
        </div>
      </div>
    </div>
  );
}

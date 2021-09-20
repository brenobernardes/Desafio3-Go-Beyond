import React from "react";
import "../App.css";
import backgroundImage from '../img/background.jpg';
import profilePicture from '../img/profile-picture.jfif';
import whatsappImage from '../img/icons8-whatsapp-24.png';
import gitImage from '../img/icons8-github-30.png';
import linkedinImage from '../img/icons8-linkedin-30.png';

function Header () {
  return (
    <div>
      <header className="App-header">
        <div className="backgroundImage">
          <img src={backgroundImage} alt="backgroundd image" />
        </div>      
      </header>
      <section>
        <div className="profilePicture">
          <img src={profilePicture} alt="profile picture" />
        </div>

        <div className="profileName">
          <h1>Breno Bernardes</h1>
          <h2>Front-end Developer</h2>
        </div>
      </section>

        <section>
          
          <div className="listContacts">

            <div className="listContacts-style">
              <a target="_blank" rel="noreferrer"
                  href="https://api.whatsapp.com/send?phone=5531992854695&text=Ol%C3%A1.%20Vi%20o%20seu%20contato%20em%20seu%20portif%C3%B3lio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20trabalhos">
                  <img src={whatsappImage} alt="Logo Whatsapp" />
              </a>
              <p>Whatsapp</p>
            </div>

            <div className="listContacts-style">
              <a target="_blank" rel="noreferrer" href= "https://github.com/brenobernardes">
                <img src={gitImage} alt="Logo Github" />
              </a>
              <p>GitHub</p>
            </div>

            <div className="listContacts-style">
              <a target="_blank" rel="noreferrer" href= "https://www.linkedin.com/in/breno-bernardes/">
                <img src={linkedinImage} alt="Logo Linkedin" />
              </a>
              <p>Linkedin</p>
            </div>

          </div>

      </section>
    </div>
  )
}

export default Header;

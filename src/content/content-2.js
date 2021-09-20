import React from "react";
import './content.css';
import certificado1 from '../img/certificado-1.png'
import certificado2 from '../img/certificado-2.png'
import certificado3 from '../img/certificado-3.png'
import certificado4 from '../img/certificado-4.png'
import certificado5 from '../img/certificado-5.png'
import certificado6 from '../img/certificado-6.png'
import certificado7 from '../img/certificado-7.png'
import certificado8 from '../img/certificado-8.png'

function Content2 () {
  return (

    <section>
      <h2>Certificados</h2>
      
      <div className="certificateList">

        <img src={certificado1} alt="Certificado"/>
      
        <img src={certificado2} alt="Certificado"/>
    
        <img src={certificado3} alt="Certificado"/>

        <img src={certificado4} alt="Certificado"/>

        <img src={certificado5} alt="Certificado"/>

        <img src={certificado6} alt="Certificado"/>

        <img src={certificado7} alt="Certificado"/>

        <img src={certificado8}alt="Certificado"/>


    </div>
    </section>
    
  )
}

export default Content2;

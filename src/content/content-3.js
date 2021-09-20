import React from "react";
import './content.css';
import html5Image from '../img/html5.png';
import css3Image from '../img/css3.png';
import jsImage from '../img/js.png';
import typescriptImage from '../img/typescript.png';
import reactImage from '../img/react.png';
import nodeImage from '../img/node.png';
import cImage from '../img/linguagem-c.png';
import c2Image from '../img/linguagem-c++.png';


function Content3 () {
  return (
  <section>
    <h2>Conhecimentos</h2>
    
    <div className="knowList">

      <img src={html5Image} alt="html5"/>
    
      <img src={css3Image} alt="css3"/>

      <img src={jsImage} alt="javascript"/>

      <img src={typescriptImage} alt="typescript"/>

      <img src={reactImage} alt="react"/>

      <img src={nodeImage} alt="nodejs"/>

      <img src={cImage} alt="Linguagem C"/>

      <img src={c2Image} alt="Linguagem C++"/>

    </div>
  </section>
  )
}

export default Content3;

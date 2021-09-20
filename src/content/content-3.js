import React from "react";
import './content.css';
import html5Image from '../img/html5.png';
import css3Image from '../img/css3.png';
import jsImage from '../img/js.png';
import typescriptImage from '../img/typescript.png';
import nodeImage from '../img/node.png';
import cImage from '../img/linguagem-c.png';
import c2Image from '../img/linguagem-c++.png';


function Content3 () {
  return (
  <section>
    <h2>Conhecimentos</h2>
    
    <div className="knowList">

      <img src={html5Image}/>
    
      <img src={css3Image}/>

      <img src={jsImage}/>

      <img src={typescriptImage}/>

      <img src={nodeImage}/>

      <img src={cImage}/>

      <img src={c2Image}/>

    </div>
  </section>
  )
}

export default Content3;
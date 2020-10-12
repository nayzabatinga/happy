import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

import '../styles/pages/landing.css'
import logo from '../images/logo.svg'

function Landing(){
    return (
        <div id="page-landing">
      <div className="content">
        <img src={logo} alt="happy"/>
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>Maceió</strong>
          <p>Alagoas</p>
        </div>
        <a href="https://www.facebook.com/" className="enter">
          <FiArrowRight size={26}/>
        </a>
      </div>
    </div>
    );
}

export default Landing
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import headerImage from '../../assets/wall-with-plants.jpg';
import { ReactComponent as FlagNL } from '../../assets/netherlands.svg';
import { ReactComponent as FlagES } from '../../assets/spain.svg';
import './Header.css';
import {LangContext} from "../../context/LangContextProvider";


const content = {
  nl: {
    menuItems: {
      aboutUs: 'Over ons',
      allPlants: 'Alle planten',
      experience: 'Persoonlijke ervaringen'
    },
    changeTo: 'Cambiar el idioma a',
    title: 'Planten voor iedereen!'
  },
  es: {
    menuItems: {
      aboutUs: 'Sobre nosotros',
      allPlants: 'todas las plantas',
      experience: 'Experiencias personales'
    },
    changeTo: 'Wissel taal naar',
    title: 'Plantas para todos!'
  }
}

function Header() {
  const {language, setLanguage} = useContext(LangContext);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/about-us">
                {content[language].menuItems.aboutUs}
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/all-plants">
                {content[language].menuItems.allPlants}
              </NavLink>
              </li>
            <li className="language-switch">
              <p>{content[language].changeTo}</p>
              <FlagNL onClick={setLanguage}/>
            </li>
          </ul>
        </nav>
        <div className="image-container">
          <img src={headerImage} alt="Beautiful plants" className="header-image"/>
          <h1>{content[language].title}</h1>
        </div>

      </header>
    </>
  );
}

export default Header;

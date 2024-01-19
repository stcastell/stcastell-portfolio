import React, { useEffect } from 'react';
// import Scrollbar from 'smooth-scrollbar';

import Header from './components/Header/Header';
import AboutAndSkills from './components/About and skills/AboutAndSkills';
import MyEducation from './components/My education/MyEducation';
import MyProjects from './components/My projects/MyProjects';
import Footer from './components/footer/Footer';
import './App.css'


function App() {

  // useEffect(() => { 
  //   Scrollbar.init(document.body, { damping: 0.07 });
  // },[]); 

  const imgLinks = {
    css:{
      link:"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      alt:'CSS logo',
    },
    git: {
      link: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      alt: 'Git logo',
    },
    figma: {
      link: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      alt: 'Figma logo',
    },
    html: {
      link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", 
      alt:'HTML logo.',
    },
    javascript: {
      link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      alt:'JavaScript logo',
    },
    photoshop: {
      link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
      alt:'Photoshop',
    },
    react: {
      link: "https://img.icons8.com/color/144/react-native.png",
      alt:'React.js logo',
    },
    php: {
      link: "https://www.php.net//images/logos/new-php-logo.svg",
      alt:'PHP logo',
    },
    mysql: {
      link: "https://img.icons8.com/color/144/mysql-logo.png",
      alt:'MySQL logo',
    },
    python: {
      link: "https://img.icons8.com/color/144/python--v1.png",
      alt:'Python logo',
    }
  }

  return (
    <>
      <Header />
      <AboutAndSkills imgLinks={imgLinks} />
      <MyProjects imgLinks={imgLinks} />
      <MyEducation />
      <Footer/>
    </>
  );
}

export default App;

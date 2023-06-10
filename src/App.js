import React, { Fragment } from 'react';
import Header from './components/Header/Header';
import AboutMe from './components/About me/AboutMe';
import MySkills from './components/My skills/MySkills';
import MyProjects from './components/My projects/MyProjects';
import './App.css'


function App() {
  return (
    <Fragment>
      <Header/>
      <AboutMe/>
      <MySkills/>
      <MyProjects/>
    </Fragment>
  );
}

export default App;

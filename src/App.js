import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { useEffect } from 'react';
import MyExperience from './components/MyExperience';
import SomeProjects from './components/SomeProjects';
import Footer from './components/Footer';
// import { Link, Element } from 'react-scroll';

function App() {
  return (
    <div className="dynamic-background ">
     <Header/>
     <Experience/>
     <Projects/>
     <MyExperience/>
     <SomeProjects/>
     <Footer/>
    </div>
  );
}

export default App;

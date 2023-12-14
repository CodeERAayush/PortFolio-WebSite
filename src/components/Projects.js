// Projects.js

import React from 'react';
import './Projects.css'; // Import your CSS for styling
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import SkillCard from './cards/SkillCard';

const Projects = () => {
  // Sample project data (you can replace this with your own projects)
  const languages = [
    {
      name: 'HTML',
      url:'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png'
    },
    {
      name: 'CSS',
      url:'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png'
    },
    {
      name: 'JavaScript',
      url:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png'
    },
    {
      name: 'JAVA',
      url:'https://w7.pngwing.com/pngs/405/878/png-transparent-java-logo-java-runtime-environment-computer-icons-java-platform-standard-edition-java-miscellaneous-text-logo-thumbnail.png'
    },
    
  ];
  const Tools = [
    {
      name: 'GIT',
      url:'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'
    },
    {
      name: 'GitHub',
      url:'https://icons-for-free.com/iconfiles/png/512/github+icon-1320168274457504277.png'
    },
    {
      name: 'Firebase',
      url:'https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png'
    },
    
    {
      name: 'Supabase',
      url:'https://s4-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/588/400/original/profile_pic.png'
    },
    {
      name: 'MongoDB',
      url:'https://www.pngrepo.com/png/331488/512/mongodb.png'
    },
  ];
  const Frameworks = [
    {
      name: 'ReactNative',
      url:'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png'
    },
    {
      name: 'React Js',
      url:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
    },
    {
      name: 'Next Js',
      url:'https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp'
    },
    {
      name: 'Express.js',
      url:'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png'
    },
    {
      name: 'Redux',
      url:'	https://cdn.worldvectorlogo.com/logos/redux.svg'
    },
    {
      name: 'TailWind Css',
      url:'https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png'
    },
    {
      name: 'JME',
      url:'https://w7.pngwing.com/pngs/546/448/png-transparent-android-mobile-app-development-logo-android-logo-grass-mobile-app-development.png'
    },
    
  ];

  return (
    <div className='container'>
      <div className='exper-bottom'/>
<div className='project_holder'>
</div>
<div className='project_data_holder'>
<div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
  <h1>My <span style={{color:'#ffcccb'}}>Skills</span></h1>
</div>
<div className='skill_card_holder'>
    <SkillCard
    arr={languages}
    heading={"Languages"}
    />
    <SkillCard
    arr={Tools}
    heading={"Tools/Technologies"}
    />
    <SkillCard
    arr={Frameworks}
    heading={"Frameworks"}
    />
</div>
</div>
    </div>
  );
};

export default Projects;

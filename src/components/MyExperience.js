import React from 'react'
import './MyExperience.css'
import Lottie from 'react-lottie';
import * as animationData from '../assets/lotte/skills.json'
import ExperienceCard from './cards/ExperienceCard';
export default function MyExperience() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className='my_project_screen'>
      <div className='exper-bottom-myPro' />

      <div className='parent_card'>
        <div className='left-side-experience'>
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
          />
        </div>
        <div className='right-side-experience'>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 20 }}>
            <h1>My <span style={{ color: '#f0f8ff' }}>Experience</span></h1>
          </div>
          <ExperienceCard 
          company={"Resshu Connect Pvt. Ltd."}
          date={"May(2023) - Present"}
          task1={"Developed and deployed mobile applications using React Native framework,resulting in enhanced user experience and increased app performance."}
          task2={"Collaborated with a team of developers to design and implement new features, contributing to the overall success of the project"}
          task3={"Conducted thorough testing and debugging of mobile applications, identifying and resolving issues to ensure high-quality deliverables."}
          task4={"Implemented ccAvenue payment gateway to the application"}
          role={"React Native Developer"}
          />
          <ExperienceCard 
          company={"Dr. Rammanohar Lohia Avadh University, Ayodhya"}
          date={"Sept(2022) - Oct(2022)"}
          task1={"Developed and Deployed an Android application under Honorable Governor of UP"}
          task2={"The application was developed to connect people from all over India to the famous festival Deepotsav held every year in Ayodhya"}
          task3={"The application is developed using different popular technologies like JME, React, Node js, Firebase."}
          task4={"Presented our application to the Raj Bhavan in front of Honorable Governor of UP"}
          role={"Android Developer!"}
          />
        </div>
      </div>
    </div>
  )
}

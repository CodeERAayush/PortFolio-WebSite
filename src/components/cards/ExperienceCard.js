import React from 'react'
import './ExperienceCard.css'
export default function ExperienceCard({company,date,task1,task2,task3,task4,role}) {
  return (
    <div className='experience-card'>
      <p className='experience-card-role-name'>{role||"React Native Developer!"}</p>
      <p className='experience-card-company-name'>{company||"Resshu Connect Pvt. Ltd."}</p>
      <div style={{display:'flex',alignItems:'center',width:'100%'}}>
      <p className='sub_headings-exp-3'>{date||"May (2023) - Present "}</p>
      <div
      style={{backgroundColor:'#ffcccb',height:2,width:'30%',marginLeft:5}}
      />
      </div>
      <div>
        <ul>
            <li className='list_items'>{task1||"Aayush"}</li>
            <li className='list_items'>{task2||"Aayush"}</li>
            <li className='list_items'>{task3||"Aayush"}</li>
            <li className='list_items'>{task4||"Aayush"}</li>
        </ul>
      </div>
    </div>
  )
}

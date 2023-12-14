import React from 'react'
import "./ProjectCard.css"
export default function ProjectCard({project}) {
  const { tech,title, native, info, image,link } = project;
  return (
    <div className="card-container">
    <img className="card-image" src={image} alt={title} />
    <div className="card-content">
      <h3 className="project-title">{title}</h3>
      {/* <p className="project-native">{native}</p> */}
      <div className='tech_card_holder'>
      {
        tech?.map(t=><div className='tech_card'>
          <p className='tech_text'>{t}</p>
        </div>)
      }
      </div>
      <p className="project-info">{info}</p>
     {link? <a className="project-info" target="_main" href={link}>View</a>:null}
    </div>
  </div>
  )
}

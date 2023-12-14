import React from 'react'
import './SkillCard.css'
export default function SkillCard({arr,heading}) {
  return (
    <div className='skill_card'>
        <p className='skill_heading'>{heading}</p>
      {/* {console.log(arr)} */}
      {
        arr?.map((item)=>(
            <div className='skill_des'>
                <img className='icon_skills' src={`${item?.url}`} alt="icon" />
                <p className='skill_sub'>{item?.name}</p>
                </div>
        ))
        }
    </div>
  )
}

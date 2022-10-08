import React from 'react'
import { Element } from 'react-scroll'
import photo2 from "../../images/photo2.jpg"
import LinearProgress from '@material-ui/core/LinearProgress';
import "./SkillContainer.css"


const SkillContainer = () => {
  return (
    <Element className='skillContainer' name="skills">
     <div className='skillContainer__image'>
      <img src={photo2} alt=""/> 
     </div>
     <div className='skillContainer__text'>
   <h2>Skillset</h2>

   <div className='skillContainer__skillset'> 
    <h5>React</h5>
    <div className='skillContainer__slider skillContainer__slider1'>
    <LinearProgress variant="determinate" value={80} />
    </div>
   </div>
   <div className='skillContainer__skillset'> 
    <h5>NodeJS</h5>
    <div className='skillContainer__slider skillContainer__slider2'>
    <LinearProgress variant="determinate" value={60} />
    </div>
   </div>
   <div className='skillContainer__skillset'> 
    <h5>MongoDB</h5>
    <div className='skillContainer__slider skillContainer__slider3'>
    <LinearProgress variant="determinate" value={50} />
    </div>
   </div>
   <div className='skillContainer__skillset'> 
    <h5>Express</h5>
    <div className='skillContainer__slider skillContainer__slider4'>
    <LinearProgress variant="determinate" value={90} />
    </div>
   </div>
     </div>
    </Element>
  )
}

export default SkillContainer
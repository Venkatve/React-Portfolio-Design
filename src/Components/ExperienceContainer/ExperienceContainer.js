import React from 'react';
import { Element } from 'react-scroll';
import Experience from '../Experience/Experience';
import "./ExperienceContainer.css"


const ExperienceContainer = () => {
  return (
    <Element name="exp" className='experiencecontainer'>
      <h1>Experience</h1>
      <div className='experiencecontainer__info'>
      <Experience number={+20} title="client" />
      <Experience number="60+" title="projects" style={{backgroundColor: "orange"}} />
      <Experience number="6+" title="years" />
      <Experience number="20+" title="countries" />
      </div>
      
    </Element>
    
  )
}

export default ExperienceContainer
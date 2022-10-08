import React from 'react';
import "./ProjectContainer.css";
import { Element } from 'react-scroll'
import Project from '../Project/Project';



const ProjectContainer = () => {
    const Projects=[
        {
            name:"facebook",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEaugscTwbcz0oGDR9ANucQJkVb-U-Md3CA&usqp=CAU",
            desc:"Rajinikanth is an Indian actor, producer and screenwriter who works predominantly in Tamil cinema, where he is also referred to as Super Star or Thalaivar",
            link:"www.google.com"
        },{
            name:"facebook",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEaugscTwbcz0oGDR9ANucQJkVb-U-Md3CA&usqp=CAU",
            desc:"Rajinikanth is an Indian actor, producer and screenwriter who works predominantly in Tamil cinema, where he is also referred to as Super Star or Thalaivar",
            link:"www.google.com"
        },{
            name:"facebook",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEaugscTwbcz0oGDR9ANucQJkVb-U-Md3CA&usqp=CAU",
            desc:"Rajinikanth is an Indian actor, producer and screenwriter who works predominantly in Tamil cinema, where he is also referred to as Super Star or Thalaivar",
            link:"www.google.com"
        },{
            name:"facebook",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEaugscTwbcz0oGDR9ANucQJkVb-U-Md3CA&usqp=CAU",
            desc:"Rajinikanth is an Indian actor, producer and screenwriter who works predominantly in Tamil cinema, where he is also referred to as Super Star or Thalaivar",
            link:"www.google.com"
        },{
            name:"facebook",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEaugscTwbcz0oGDR9ANucQJkVb-U-Md3CA&usqp=CAU",
            desc:"Rajinikanth is an Indian actor, producer and screenwriter who works predominantly in Tamil cinema, where he is also referred to as Super Star or Thalaivar",
            link:"www.google.com"
        },{
            name:"facebook",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEaugscTwbcz0oGDR9ANucQJkVb-U-Md3CA&usqp=CAU",
            desc:"Rajinikanth is an Indian actor, producer and screenwriter who works predominantly in Tamil cinema, where he is also referred to as Super Star or Thalaivar",
            link:"www.google.com"
        }
    ]
  return (
    <Element className='ProjectContainer' id="project">
        <h1>Project</h1>
        <p>here are some project with here are some project</p>
        <div className='ProjectContainer__projects'>
           {
             Projects.map((project,index)=>{
                return(
                    <Project key={index} name={project.name} img={project.img} desc={project.desc} link={project.link} />
                    
                )
             })
           }
        </div>
    </Element>
    
  )
}

export default ProjectContainer
import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css"

const TopContent = () => {
  return (
    <div className='topContent'>
     <div className='topContent__container'>
<h1>Mr.Venkatraman</h1>
<p>I am a professoional developer</p>
<a href='www.google.com'>
    <button className='topContent__download'>Download CV</button>
</a>
<Link to="project" smooth={true} duration={500}>
    <button className='topContent__work'>My Work</button>
</Link>
     </div>
    </div>
  )
}

export default TopContent
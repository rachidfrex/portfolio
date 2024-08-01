import React from 'react'
import Nav from "../../components/nav"
import Header from '../../components/header'
import About from '../../components/About'
import Project from '../../components/project'
import Contact from '../../components/contact'
function home() {
  return (
    <div className='    '>
      <div className='grid-bg absolute w-[100% ] h-[100%] top-0 '>
        
      </div>
        <Nav/>
        <Header/>
        <About/>
        <Project/>
        <Contact/>

    </div>
  )
}

export default home
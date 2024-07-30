import React from 'react'
import Nav from "../../components/nav"
import Header from '../../components/header'
import About from '../../components/About'
import Project from '../../components/project'
import Contact from '../../components/contact'
function home() {
  return (
    <div className=' '>
      
        <Nav/>
        <Header/>
        <About/>
        <Project/>
        <Contact/>

    </div>
  )
}

export default home
import React from 'react'
import Nav from "../../components/nav"
import Header from '../../components/header'
import About from '../../components/About'
import Project from '../../components/project'
function home() {
  return (
    <div className=' '>
      
        <Nav/>
        <Header/>
        <About/>
        <Project/>

    </div>
  )
}

export default home
"use client"

import About from '@/components/about/about'
import Contact from '@/components/contact/contact'
import Header from '@/components/header/header'
import Projects from '@/components/projects/projects'
import Carousel from '@/components/skills/skills'
import React from 'react'

const Home = () => {
  return (
   <div className=''>
    <Header/>
<About/>
<Carousel/>
<Projects/>
<Contact/>

   </div>
  )
}

export default Home
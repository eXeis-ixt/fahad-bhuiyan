import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Project from '@/components/Project'
import Skills from '@/components/Skills'

import React from 'react'

export default function page() {
  return (
    <div className=' min-h-screen bg-black overflow-hidden'>


    <div className=' dark:bg-black  dark:bg-grid-black/[0.5] bg-grid-white/[0.05] relative'>


      <div className='  container '>
      <Navbar />
    <HeroSection />

      </div>

      <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full'>

      </div>

    </div>

      <div className=' container mt-20'>

    <Skills />
    <Project />
    <Footer />

      </div>


    </div>
  )
}

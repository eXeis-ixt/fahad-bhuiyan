"use client";

import React from 'react'
import Title from './title'
import { HoverEffect } from './ui/card-hover-effect'
import { SiAlpinedotjs, SiLaravel, SiLivewire, SiMysql, SiNextdotjs, SiReact, SiSvelte, SiTailwindcss } from 'react-icons/si'

export default function Skills() {

    const skills = [
        {
            text: 'Laravel',
            Icon: SiLaravel
        },
        {
            text: 'Tailwind CSS',
            Icon: SiTailwindcss
        },
        {
            text: 'Livewire',
            Icon: SiLivewire
        },
        {
            text: 'AlpineJS',
            Icon: SiAlpinedotjs
        },
        {
            text: 'React',
            Icon: SiReact
        },
       
    
        {
            text: 'Next JS',
            Icon: SiNextdotjs
        },
        {
            text: 'MySQL',
            Icon: SiMysql
        },
        {
            text: 'SvelteKIT',
            Icon: SiSvelte
        },
    ]


  return (
    <div className=' container'>
               <Title text='Skills' className='flex flex-col items-center justify-center -rotate-6' />
 
     
     <HoverEffect items={skills} />


    </div>
  )
}

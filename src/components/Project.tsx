import React from 'react'
import { SiLaravel, SiLivewire, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import Title from './title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from './ui/direction-aware-hover'

export default function Project() {
    const projects = [
        {
          title: "Adons Tech",
          tech: [SiLaravel, SiLivewire, SiTailwindcss],
          link: "https://adons.org",
          cover: '/Fahad-Bhuiyan-1.png',
          background: "bg-indigo-500"
        },
        {
            title: "Adons Tech",
            tech: [SiNextdotjs, SiTailwindcss,],
            link: "https://adons.org",
            cover: '/Fahad-Bhuiyan-1.png',
            background: "bg-green-500"
          },
    ]
  return (
    <div  className=' py-10 p-5 sm:p-0'>
        <Title  text='Projects' className='flex flex-col items-center justify-center rotate-6'/>

        <div className=' grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
            {projects.map((Project, index)=> {
                return <Link href={Project.link} key={index}>
                    <div className={cn("p-5 rounded-md", Project.background)}>
                      <DirectionAwareHover imageUrl={Project.cover} className=' w-full space-y-5'>
                        <div className=' space-y-5'>
                        <h1 className=' text-2xl font-bold'>{Project.title}</h1>

                        <div className=' items-center gap-5 flex'>
                            {Project.tech.map((Icon, index)=>{
                                return <Icon className=' w-8 h-8' key={index} />
                            })}
                        </div>
                        </div>
                      </DirectionAwareHover>
                    </div>
                </Link>
            })}
        </div>

 
    </div>
  )
}

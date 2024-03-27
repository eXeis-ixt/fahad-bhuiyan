import Link from 'next/link';
import React from 'react'
import { SiGmail } from 'react-icons/si';
import { MovingBorderBtn } from './ui/moving-border';
import Title from './title';

const HeroSection = () => {
    const name = 'Fahad Bhuiyan'
    const about = "I'm from Bangladesh, I'm a Back-end web developer passionate about Laravel and all sort of cool technology";

  return (
    <div className=' lg:flex-row flex-col-reverse lg:gap-0 gap-14  min-h-[60vh] flex items-center justify-between'>
        <div className=' space-y-10 text-center lg:text-left'>
            <h1 className=' text-4xl lg:text-7xl font-bold '>Hello there 👋 <br /> <span className='
            underline  underline-offset-8 decoration-green-500
            '>I'm {name}</span> </h1>
       
            <p className=' md:w-96 text-lg text-gray-300'>
            I'm from Bangladesh, I'm a Back-end web developer passionate about Laravel and all sort of cool technology
            </p>

            <Link className=' inline-block group' href={"mailto:exeis10@adons.org"} >
               <Title text='Contact me' />
            </Link>
        </div>

        <div className=' relative'>
            <div className=' w-72 h-72 space-y-3 -rotate-[30deg] relative'>
                <div className=' flex gap-3 translate-x-8'>
                    <div className=' w-32 h-32 rounded-2xl bg-green-500'> </div>
                    <div className=' w-32 h-32 rounded-full bg-indigo-500'> </div>
                </div>
                <div className=' flex gap-3 -translate-x-8'>
                    <div className=' w-32 h-32 rounded-full bg-indigo-500'> </div>
                    <div className=' w-32 h-32 rounded-2xl bg-green-500'> </div>
                </div>

                <div className=' glow absolute top-[40%] right-1/2 -z-10 '></div>

            </div>


        <div className=' absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'>

          <MovingBorderBtn borderRadius='0.5rem' className='  p-3 font-semibold' >
            <p> 💻 Available for work </p>
          </MovingBorderBtn>
          </div>

        </div>

    </div>
  )
}

export default HeroSection
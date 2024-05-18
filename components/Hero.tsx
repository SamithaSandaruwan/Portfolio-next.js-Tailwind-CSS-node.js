import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row '>
        {/*LEFT SIDE*/}
    
        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
          <h1 className='bold-52 lg:bold-88'>
            Samitha Sandaruwan
          </h1>
          <p className="bold-16 lg:bold-20 text-blue-70 ">
            Developer and Editor
          </p>
          <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
            Undergraduate in Rajarata University of Srilanka
          </p>
          
          <div className='mt-10 flex  gap-x-6'>
            
            <Link href="./Samitha Sandaruwan.pdf" className="btn_green rounded-xl  px-3.5 py-2.5">
              Download CV
            </Link>
            
            <Link href="#contact_me" className=" border-2 rounded-xl py-5 px-5 outline-green-custom">
              Contact Me
            </Link>


          </div>
        </div>

        {/* IMAGE */}
        
        <div className='hidden lg:block'>

        <Image className="blob " src="/Hero_DP.png" alt='Samitha' width={305} height={340}/>
  
        </div>
        


    </section>
    
  )
}

export default Hero

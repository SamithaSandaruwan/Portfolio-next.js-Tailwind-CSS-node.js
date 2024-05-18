import React from 'react'
import { Carousel } from "flowbite-react"; 
import Image from 'next/image';
import Link from 'next/link';
  const Projects = () => {
    return (
    
    <section id='projects' className=' py-24 items-center'>
      <div className='pt-4 md:pt-8 pb-1 text-center'>
        <h1 className='bold-40 lg:bold-64 py-5'>
          My Projects
        </h1>
        <div className='inline-block cursor-pointer lg:hidden py-4'>
                {/* GitHub icon with Link */}
                <Link href="https://github.com/SamithaSandaruwan">
                   
                        <img src="/github-icon.svg" alt='GitHub' width={32} height={32}/>
                    
                </Link>
            </div>
        <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div>
            <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px] border-4 rounded-2xl'>
              <Image src='Project-01.png' alt='Project-1' layout='fill' className='object-contain'/>
            </div>
            <p className="mt-2 text-center">E-Commerce Website</p>
          </div>
          <div>
            <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px] border-4 rounded-2xl'>
              <Image src='Project-02.png' alt='Project-1' layout='fill' className='object-contain'/>
            </div>
            <p className="mt-2 text-center">Library Management System</p>
          </div>
          <div>
            <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px] border-4 rounded-2xl '>
              <Image src='Project-03.png' alt='Project-1' layout='fill' className='object-contain'/>
            </div>
            <p className="mt-2 text-center">DDEC</p>
          </div>
          <div>
            <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px] border-4 rounded-2xl '>
              <Image src='Project-04.png' alt='Project-1' layout='fill' className='object-contain'/>
            </div>
            <p className="mt-2 text-center">Calculator - React</p>
          </div>
          <div>
            <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px] border-4 rounded-2xl '>
              <Image src='Project-05.png' alt='Project-1' layout='fill' className='object-contain'/>
            </div>
            <p className="mt-2 text-center">Portfolio - React</p>
          </div>
          <div>
            <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px] border-4 rounded-2xl '>
              <Image src='Project-06.png' alt='Project-1' layout='fill' className='object-contain'/>
            </div>
            <p className="mt-2 text-center">Buddhist Flag</p>
          </div>
          <div>
            <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px] border-4 rounded-2xl '>
              <Image src='Project-07.png' alt='Project-1' layout='fill' className='object-contain'/>
            </div>
            <p className="mt-2 text-center">Image Compressor - ChatGPT</p>
          </div>
          <div>
            <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px] border-4 rounded-2xl '>
              <Image src='Project-08.png' alt='Project-1' layout='fill' className='object-contain'/>
            </div>
            <p className="mt-2 text-center">QR Code - Generator</p>
          </div>
        </div>
      </div>
      <div>

      </div>
      

      {/* <div className='max-container padding-container w-full '>
        <div className='z-60'>
          <h2 className='bold-40 lg:bold-64 py-10 text-center'>
            My Projects
          </h2>
          
          <Carousel slideInterval={5000} className="h-56 sm:h-64 xl:h-80 2xl:h-150 w-full md:w-3/4 lg:w-1/2 mx-auto">
            {/* <img src="/Project-01.png" alt="Moonstone Batik" className="hidden sm:block lg:block" />
            <img src="/Project-02.png" alt="Library System" className="hidden sm:block lg:block" />
            <img src="/Project-03.png" alt="DDEC" className="hidden sm:block lg:block" />
            <img src="/Project-04.png" alt="REACT-CAL" className="hidden sm:block lg:block" />
            <img src="/Project-05.png" alt="REACT-Portfolio" className="hidden sm:block lg:block" />
            <img src="/Project-06.png" alt="Buddhist-flag" className="hidden sm:block lg:block" /> */}

            {/* <img src="/Project-01.png" alt="Moonstone Batik" className="block sm:block " />
            <img src="/Project-02.png" alt="Library System" className="block sm:block " />
            <img src="/Project-03.png" alt="DDEC" className="block sm:block " />
            <img src="/Project-04.png" alt="REACT-CAL" className="block sm:block " />
            <img src="/Project-05.png" alt="REACT-Portfolio" className="block sm:block " />
            <img src="/Project-06.png" alt="Buddhist-flag" className="block sm:block " />
          </Carousel>
  
          </div>
      </div>  */}
     
    </section >  
    )
  }
  
  export default Projects
  


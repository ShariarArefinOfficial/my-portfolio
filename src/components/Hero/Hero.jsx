import React from 'react';
import {FiDownload} from 'react-icons/fi'
import { Button } from '../ui/button';
import Link from 'next/link'; 

//======Shared Component
import Socials from '../Shared/Socials/Socials';
import Photo from '../Shared/Photo/Photo';


const Hero = () => {
    return (
        <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
            <div className='text-center xl:text-left order-2 xl:order-none'>
                <span>Front End Developer</span>
                <h1 className='h1 mb-6'>
                  Hello,I'm <br />
                  <span className='text-accent'>Shariar Arefin</span>
                </h1>
                <p className='max-w-[500px] mb-9 text-white/80'>
                I am a passionate Front-End Developer with a strong focus on creating visually appealing, user-friendly, and responsive web applications. With expertise in HTML, CSS, and JavaScript, alongside framework like React js, I bring innovative designs to life with seamless functionality. 
                </p>
                <div className='flex flex-col xl:flex-row items-center gap-8'>
                  <Link href={'/resume.pdf'}  download={'Resume'}>
                  <Button size="lg" className=" uppercase flex items-center gap-2" >
                    <span className='mr-2'>Download Resume</span>
                    <FiDownload className='text-xl'></FiDownload>
                  </Button>
                  </Link>
                  <div className='mb-8 xl:mb-0'>
                    <Socials
                    containerStyle={'flex gap-4'}
                    iconStyle={'w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'}
                    ></Socials>
                  </div>
                </div>

            </div>
            <div
            className='order-1 xl:order-none mb-8 xl:mb-9'
            >
              <Photo></Photo>
            </div>
          </div>

        </div>
    );
};

export default Hero;
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsArrowUpRight , BsGithub} from 'react-icons/bs'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'




const projects=[
    {
        num:'01',
        title:'Job Deed',
        skills:'HTML5,CSS3,REACT JS , FIREBASE , NODE JS , EXPRESS JS , MONGODB',
        description:'The main goal of JobDeed is to create a comprehensive and user-friendly platform that connects job seekers with potential employers. The website will serve as a centralized hub where job seekers can find and apply for job opportunities, and employers can post job openings and find suitable candidates.',
        image:'/assets/work/one.png',
        link:'https://job-project-61af0.web.app/',
        gitHub:'https://github.com/ShariarArefinOfficial/job-deed'


    },
    {
        num:'02',
        title:'ArtZone',
        skills:'HTML5,CSS3,REACT JS , FIREBASE , NODE JS , EXPRESS JS , MONGODB',
        description:'The primary goal of ArtZone is to create an intuitive, user-friendly e-commerce platform dedicated to selling a wide range of craft supplies and DIY project kits. The website will cater to hobbyists, professional crafters, and DIY enthusiasts by providing a comprehensive selection of products and resources to inspire creativity.',
        image:'/assets/work/Vite-React.png',
        link:'https://craft-store-56652.web.app/',
        gitHub:'https://github.com/ShariarArefinOfficial/art-zone-client'
        

    },
    {
        num:'03',
        title:'Scholar Scholarship',
        skills:'HTML5,CSS3,REACT JS , FIREBASE , NODE JS , EXPRESS JS , MONGODB',
        description:'The primary goal of ScholarHub is to create a comprehensive, user-friendly platform that connects students with scholarship opportunities. The website will serve as a centralized database where students can easily search for, apply to, and track various scholarships based on their qualifications and interests.',
        image:'/assets/work/Home-Scholar.png',
        link:'https://scholar-scholarship.web.app/',
        gitHub:'https://github.com/ShariarArefinOfficial/scholars-scholarship-client'
        
    },

]

const Work = () => {
    const [project,setProject]=useState(projects[0])


    const handleSlideChange=swiper=>{
        console.log(swiper)
        const currentIdx=swiper.activeIndex;
        setProject(projects[currentIdx])
    }
    return (
        <div className='min-h-[80vh] flex flex-col py-12 justify-center xl:px-0'>
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px]'>
                            <div className='text-8xl text-transparent font-extrabold leading-none text-outline'>{project.num}</div>
                            <h2 className='text-white font-bold leading-none text-[42px] capitalize group-hover:text-accent transition-all duration-500 '>{project.title}</h2>
                            <p className='text-white/60'>{project.description}</p>
                            <p className='text-accent text-xl'>{project.skills}</p>
                            <div className="border border-white/20 mt-6"></div>

                            <div className='mt-6 flex flex-col xl:flex-row gap-4 xl:gap-0 justify-between items-center'>
                                <Link href={project.link}>
                                <button className='bg-accent text-primary rounded-full py-4 px-6 flex flex-row items-center gap-2'> 
                                    Live Website
                                    <BsArrowUpRight></BsArrowUpRight>
                                </button>
                                </Link>
                                <Link href={project.gitHub}>
                                <button className='bg-accent text-primary rounded-full py-4 px-6 flex flex-row items-center gap-2'> 
                                    GitHub Repo
                                    <BsGithub></BsGithub>
                                </button>
                                </Link>
                            </div>

                        </div>


                    </div>
                    <div className='w-full xl:w-[50%] '>
                    <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    className='xl:h-[520px] mb-12'
                    onSlideChange={handleSlideChange}
                    >
                        {
                            projects.map((project,idx)=>{
                                return <SwiperSlide
                                key={idx}
                                className='w-full'
                                >
                                <div
                                className='h-[460px] relative group flex justify-center items-center bg-slate-50'
                                >
                                <div>
                                    <div className='relative w-full h-full'>
                                    <Image
                                    src={project.image}
                                    fill
                                    className='object-cover'
                                    alt=''
                                
                                    >
                                    </Image>
                                    </div>
                                </div>
                                </div>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
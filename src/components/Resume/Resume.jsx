import React from 'react';
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaNodeJs,
    FaReact,

} from "react-icons/fa"
import {
    SiTailwindcss,
    SiNextdotjs,
    
} from "react-icons/si"
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

import {
Tabs,
TabsContent,
TabsList,
TabsTrigger

} from "@/components/ui/tabs"

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip"

//About
const about={
    title:'About Me',
    description:`Hello! I'm Shariar Arefin, an aspiring front-end developer with a passion for creating visually stunning and user-friendly websites. Although I’m at the beginning of my professional journey, my dedication to learning and growing in the field of web development drives me forward every day.`,
    info:[
        {
            fieldName:"Name",
            fieldValue:"Shariar Arefin"
        },
        {
            fieldName:"Phone",
            fieldValue:"+880 1780990863"
        },
        {
            fieldName:"Nationality",
            fieldValue:"Bangladeshi"
        },
        {
            fieldName:"Email",
            fieldValue:"shaharierarefin35@gmail.com"
        },
        {
            fieldName:"Language",
            fieldValue:"English,Bangla,Hindi"
        }
    ]
}

//Education
const education={
    icon:'/assets/resume/cap.svg',
    title:"My Education",
    description:`Studied core principles of computer science including programming, data structures, and algorithms.
Completed coursework in web development, focusing on HTML, CSS, JavaScript, and React.
Engaged in various projects that enhanced my understanding of front-end development.`,
    items:[
        {
            institution:"National University",
            subject:"Computer Science",
            degree:'B.Sc',
            duration:'2016-2019'

        },
    ]

}


const skill={
    title:"My Skills",
    description:`As an enthusiastic front-end developer, I have developed a solid foundation in a variety of web development technologies and tools. I am proficient in HTML and CSS, which allow me to create well-structured and visually appealing web pages. My knowledge of JavaScript enables me to add interactivity and dynamic elements to websites. Additionally, I have experience with React, which I use to build efficient and scalable web applications. I am also familiar with version control systems like Git, ensuring that my projects are well-organized and collaborative. Constantly eager to learn, I stay updated with the latest industry trends and best practices to continually enhance my skill set.
`,
    skillList:[
        {
            icon : <FaHtml5></FaHtml5>,
            name:'Html 5'
        },
        {
            icon : <FaCss3></FaCss3>,
            name:'CSS 3'
        },
        {
            icon : <FaJs></FaJs>,
            name:'Javascript'
        },
        {
            icon : <FaNodeJs></FaNodeJs>,
            name:'Node JS'
        },
        {
            icon : <SiTailwindcss></SiTailwindcss>,
            name:'Tailwind Css'
        },
        {
            icon : <SiNextdotjs></SiNextdotjs>,
            name:'Next Js'
        },

    ]
}

const Resume = () => {
    return (
        <div
        className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className="container max-auto">
                <Tabs
                defaultValue='about'
                className='flex flex-col xl:flex-row gap-[60px]'
                >
                    <TabsList
                    className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
                    >
                        <TabsTrigger value='about'>About Me</TabsTrigger>
                        <TabsTrigger value='education'>My Education</TabsTrigger>
                        <TabsTrigger value='skill'>My Skills</TabsTrigger>
                        

                       

                    </TabsList>
                    {/**Content */}
                    <div className='min-h-[70vh] w-full'>
                        {/**About */}
                            <TabsContent value='about' className="w-full">
                                <div className='flex flex-col text-center xl:text-left gap-[30px]'>
                                    <h3 className='text-4xl font-bold'>{about.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'> 
                                            {
                                                about.info.map((item,idx)=>{
                                                    return <li 
                                                    className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                                                    key={idx}>
                                                        <span className='text-accent'>{item.fieldName}:</span>
                                                        <h3 className='text-xl text-center lg:text-left h-[60px] max-w-[260px]'>{item.fieldValue}</h3>
                                                    </li>
                                                })
                                            }
                                        </ul>

                                    </ScrollArea>
                                </div>
                            </TabsContent>
                            {/**education */}
                            <TabsContent value='education' className="w-full">
                            <div className='flex flex-col text-center xl:text-left gap-[30px]'>
                                    <h3 className='text-4xl font-bold'>{education.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'> 
                                            {
                                                education.items.map((item,idx)=>{
                                                    return <li 
                                                    className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                                                    key={idx}>
                                                        <span className='text-accent'>{item.degree}</span>
                                                        <h3 className='text-xl text-center lg:text-left '>{item.institution}</h3>
                                                        <span className='text-accent'>{item.duration}</span>
                                                    </li>
                                                })
                                            }
                                        </ul>

                                    </ScrollArea>
                                </div>
                            </TabsContent>
                            {/**Skill */}
                            <TabsContent value='skill' className="w-full">
                            <div className='flex flex-col text-center xl:text-left gap-[30px]'>
                                    <h3 className='text-4xl font-bold'>{skill.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skill.description}</p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'> 
                                            {
                                                skill.skillList.map((item,idx)=>{
                                                    return <li 
                                                    className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                                                    key={idx}>
                                                        <span className='text-accent text-xl mb-2'>{item.icon}</span>
                                                        <h3 className='text-xl text-center lg:text-left '>{item.name}</h3>
                                                    </li>
                                                })
                                            }
                                        </ul>

                                    </ScrollArea>
                                </div>
                            </TabsContent>

                        </div>
                </Tabs>
            </div>
            
        </div>
    );
};

export default Resume;
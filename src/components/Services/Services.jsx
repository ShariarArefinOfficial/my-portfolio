"use Client";
import React from 'react';
import {BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';

const allServices=[
    {
        num:'01',
        title:'Web Development',
        description:'your trusted partner in web development. We specialize in creating stunning, functional, and user-friendly websites that help businesses succeed online.'
    },
    {
        num:'02',
        title:'Web Design',
        description:'We specialize in crafting visually appealing and highly functional websites that capture your brand essence and engage your target audience. '
    },
    {
        num:'03',
        title:'Figma To React',
        description:'your expert partner in transforming stunning Figma designs into robust and scalable React applications. We bridge the gap between design and development, ensuring your vision is brought to life with pixel-perfect precision and seamless functionality'
    }
]

const Services = () => {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className="container mx-auto">
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-[60px]'>
                {
                        allServices.map((service,idx)=>{
                            return <div
                            key={idx}
                            className='flex-1 flex flex-col justify-center gap-6 group'
                            >
                                <div className='w-full flex justify-between items-center'>
                                    <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                                    <Link 
                                    className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'
                                    href={'#'}><BsArrowDownRight className='text-3xl text-primary'></BsArrowDownRight></Link>
                                </div>
                                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                                <p className='text-white/60'>{service.description}</p>
                                <div className="border-b w-full border-white/20"></div>

                            </div>
                        })
                    }
                </div>


            </div>
        </section>
    );
};

export default Services;
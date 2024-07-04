"use Client";
import React from 'react';
import {BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';

const allServices=[
    {
        num:'01',
        title:'Web Development',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam excepturi inventore cum, in numquam optio fuga iste distinctio aut reprehenderit!'
    },
    {
        num:'02',
        title:'Web Design',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam excepturi inventore cum, in numquam optio fuga iste distinctio aut reprehenderit!'
    },
    {
        num:'03',
        title:'Figma To React',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam excepturi inventore cum, in numquam optio fuga iste distinctio aut reprehenderit!'
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
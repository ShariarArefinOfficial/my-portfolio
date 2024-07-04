"use Client"
import React from 'react';
import {Button} from "@/components/ui/button"
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'
import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue} from '@/components/ui/select'

const info=[
    {
        fieldName:'Phone',
        value:'+880 1780990863'
    },
    {
        fieldName:'Email',
        value:'shaharierarefin35@gmail.com'
    },
]
const Contact = () => {
    return (
        <div className='py-6'>
           <div className="container mx-auto">
            <div className='flex flex-col xl:flex-row gap-[30px]'>
                <div className='flex-1 w-full'>
                    <form  className='w-full flex flex-col items-center gap-6 bg-[#27272c] rounded-xl p-10'>
                        <h1 className='text-3xl text-accent'>Let's Work Together</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <Input type='firstName' placeholder="Enter First Name"></Input>
                            <Input type='lastName' placeholder="Enter Last Name"></Input>
                            <Input type='email' placeholder="Enter YOur Email Address"></Input>
                            <Input type='phone' placeholder="Enter your Phone Number"></Input>

                        </div>
                        <div>
                            <textarea name="text" id="" placeholder='Type your massage'cols={100} className='rounded-xl w-full h-[200px]'></textarea>

                        </div>

                        <Button>Send Massage</Button>

                    </form>
                </div>
                <div className='flex-1 flex items-center justify-start order-1 xl:order-none mb-8 xl:mb-0'>
                    <ul>
                        {
                            info.map((item,idx)=>{
                                return <li key={idx}>
                                    <div>
                                        <span className='font-bold text-accent'>{item.fieldName}</span>
                                         <h3>{item.value}</h3>
                                     </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            </div> 
        </div>
    );
};

export default Contact;
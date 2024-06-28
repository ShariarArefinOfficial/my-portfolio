
"use client";
import React from 'react';

import { Sheet,SheetContent,SheetTrigger } from '../ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci'

const links =[
    {
        name:'Home',
        path:"/",
    },
    {
        name:'Services',
        path:"/services",
    },
    {
        name:'Resume',
        path:"/resume",

    },
    {
        name:'Work',
        path:"/work",
    },
    {
        name:'Contact',
        path:"/contact",
    },
]
const MobileNav = () => {
    const pathName=usePathname()
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-accent text-[32px]'></CiMenuFries>
            </SheetTrigger>
            <SheetContent
            className='flex flex-col'
            >
                <div className='mt-32 mb-10 text-center text-2xl font-semibold'>
                    <Link href={'/'}>
                    <h1>
                       Sha<span className='text-accent'>riar.</span>
                    </h1>
                    </Link>
                </div>
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {
                        links.map(link=><Link
                        key={link.path}
                        href={link.path}
                        className={`${pathName === link.path && 'text-accent border-b-2 border-accent'} text-xl capitalize hover:text-accent transition-all`}
                        >
                        {
                            link.name
                        }
                        </Link>)
                    }
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
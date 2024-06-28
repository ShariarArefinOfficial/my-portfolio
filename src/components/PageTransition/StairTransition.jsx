//import React from 'react';
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stair from "./Stair";



const StairTransition = () => {
    const pathName=usePathname()
    return (
        <>
        <AnimatePresence
        mode="wait"
        >
         <div key={pathName}>
            <div className="h-screen w-screen fixed  top-0 left-0 right-0 pointer-events-none z-40 flex"> 
                <Stair></Stair>
            </div>
         </div>
        </AnimatePresence>
        <motion.div
                initial={{opacity:1}}
                animate={{
                    opacity:0,
                    transition:{
                        delay:1,
                        duration:0.4,
                        ease:'easeInOut'
                    }
                }}
                className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
                ></motion.div>
        </>
    );
};

export default StairTransition;
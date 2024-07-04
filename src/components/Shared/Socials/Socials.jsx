import { icons } from 'lucide-react';
import Link from 'next/link';
import React from 'react';


import {FiGithub,FiTwitter} from 'react-icons/fi'

const socialsLink=[
    {
        icons:<FiGithub></FiGithub>,
        path:'',

    },
    {
        icons:<FiTwitter></FiTwitter>,
        path:'',

    }
]

const Socials = ({containerStyle,iconStyle}) => {
    return (
        <div className={containerStyle}>
            {
                socialsLink.map((social,idx)=>{
                    return <Link 
                    key={idx} 
                    href={social.path}
                    className={iconStyle}
                    >{social.icons}</Link>
                })
            }
        </div>
    );
};

export default Socials;
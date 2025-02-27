import React from 'react'

import { Link, Element } from 'react-scroll';
const Header = ({image,headerText,linkText,textColor,id,bgColor}) => {
  return (
    <div className={`header p-3  text-center flex justify-between bg-${bgColor}`} id={id}>
        <img src={image} alt=""  />
        <h1 className={`text-[${textColor}]`}>{headerText}</h1>
        <div>
            <ul className='flex gap-4 cursor-pointer px-2'>
                {linkText?.links.map((item,index)=>(
                
                   <li key={index}>
                    <Link to="section1" smooth={true} duration={500}>
                            <a href={item.href} className={`text-[${textColor}]`}>{item.text}</a>  
                    </Link>
                
                    </li>
                   
                ))}
            </ul>
        </div>

    </div>
  )
}

export default Header
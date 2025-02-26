import React from 'react'

const Header = ({image,headerText,linkText,textColor}) => {
  return (
    <div className='p-6 text-center flex justify-between'>
        <img src={image} alt=""  />
        <h1 className={`text-[${textColor}]`}>{headerText}</h1>
        <div>
            <ul className='flex gap-4 cursor-pointer'>
                {linkText?.links.map((item,index)=>(
                
                   <li key={index}>{item?.text}</li>
                   
                ))}
            </ul>
        </div>

    </div>
  )
}

export default Header
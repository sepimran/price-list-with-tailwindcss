import React from 'react';

const Link = (props) => {
    const {name ,path} = props.route;
   
    return (
        <li className=' w-full block md:inline-block md:w-auto'>
            <a className='
                    hover:bg-purple-800 
                    hover:text-white 
                    block py-2 
                    px-3
                    duration-500
                
                ' 
                href={path}>{name}
            </a>
        </li>
    );
};

export default Link;
import React, { memo, useEffect, useState } from 'react';
import Link from '../Link/Link';
import { BeakerIcon , Bars3Icon , XMarkIcon} from '@heroicons/react/24/solid'

const Navbar = memo(() => {
    const [open , setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Blog', path: '/blog' }
      ]
    return (
        <nav className='bg-purple-400'>

        <div onClick={() => setOpen(!open)} className='md:hidden inline-block'>
          
            
            <span>
                {
                    open === true ?   
                    <XMarkIcon className="h-6 w-6 text-white ml-3" />   :            
                    <Bars3Icon className="h-6 w-6 text-white ml-3" />   
                }
            </span>
        </div>
            <ul className={`
                py-2 
                md:flex 
                md:justify-center 
                sm:block 
                w-full
                bg-purple-300 
                 absolute 
                 md:static 
                 duration-500 
                 ${open ? 'top-7' : '-top-full'}`}>
                {
                    routes.map(route => <Link 
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
});

export default Navbar;
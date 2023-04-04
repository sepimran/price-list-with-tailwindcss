import React from 'react';
import Feature from '../Feature/Feature';

const Pricecart = ({price}) => {
    return (
        <div className='rounded-xl border-2 border-purple-950 bg-purple-200 pb-4 flex flex-col'>
            <img className='h-56 w-full object-cover	' src={price.image} alt="" />
            <div className='p-5'>
                <h2 className='mb-2'>
                    <span className='text-6xl font-extrabold text-purple-800'>{price.price}</span>
                    <span>/month</span>
                </h2>
                <h3 className='text-3xl font-bold mb-2'>{price.name}</h3>
                <h4 className='text-xl font-bold'>Features:</h4>
                <ul className='mt-2'>
                    {
                        price.features.map((feature , idx) => <Feature 
                            feature={feature}
                            key={idx}
                        ></Feature>)
                    }
                </ul>

                
            </div>
            <div className='mt-auto text-center pb-3 px-5'>
                <button className='py-3 duration-500 w-full px-9 bg-purple-600 rounded-md text-white font-semibold hover:bg-purple-900'>Buy Now</button>
            </div>
        </div>
    );
};

export default Pricecart;
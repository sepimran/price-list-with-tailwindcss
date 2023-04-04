import React, { useEffect, useState } from 'react';
import Pricecart from '../PriceCart/Pricecart';

const Pricelist = () => {
    const [prices, setPrices] = useState([]);
    
    useEffect( () => {
        fetch(`/public/prices.json`)
            .then(res => res.json())
            .then(data => setPrices(data))
    },[]);


    return (
        <section className="pricelist-area">
            <div className="container max-w-screen-xl w-full m-auto px-4 py-12">
                <div className='grid md:grid-cols-3 gap-4 '>
                {
                    prices.map(price => <Pricecart 
                        key={price.id}
                        price={price}
                    
                    ></Pricecart>)
                }
            </div>
            </div>
        </section>
    );
};

export default Pricelist;
import React from 'react';
import { BeakerIcon , CheckCircleIcon} from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <li className='flex mb-2'>
            <CheckCircleIcon className="h-6 w-6 text-purple-500 me-2" />
            {feature}
        </li>
    );
};

export default Feature;
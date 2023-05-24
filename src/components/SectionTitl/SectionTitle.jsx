import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className=' md:w-4/12 text-center my-8 mx-auto'>
            <p className='text-yellow-600 text-lg mb-3'>---{subHeading}--</p>
            <h3 className='text-3xl border-y-4  uppercase py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;
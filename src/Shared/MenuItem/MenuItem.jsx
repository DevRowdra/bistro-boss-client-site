import React from 'react';

const MenuItem = ({item}) => {
    const {_id,name,image,recipe,price}=item

    return (
        <div className='flex space-x-2'>
    <img className='h-[100px] ' style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" />        
    <div>
        <h4 className='uppercase'>{name}------------</h4>
        <p >{recipe}</p>

    </div>
    <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;
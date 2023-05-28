import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../Hooks/useCart';

const MyCart = () => {
  const [cart] = useCart();
  const total=cart.reduce((sum,item)=>item.price +sum,0)
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || My Cart</title>
      </Helmet>
      <div>
        <h3 className='text-3xl'>{cart.length}</h3>
        <h2 className='text-4xl'>Total price:${total}</h2>
        <button className='btn btn-warning btn-sm'>PAY</button>
      </div>
    </div>
  );
};

export default MyCart;

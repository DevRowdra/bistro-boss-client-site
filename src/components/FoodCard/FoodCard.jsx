import React from 'react';

const FoodCard = ({item}) => {
    const {_id,name,image,recipe,price}=item

    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
        <figure><img src={image} /></figure>
          <p className='bg-slate-900 absolute right-0 mr-4 mt-4 px-4'>{price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-4 text-slate-950 border-orange-400">Add To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;
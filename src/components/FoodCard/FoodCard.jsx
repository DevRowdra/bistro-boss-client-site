import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';

const FoodCard = ({item}) => {
    const {_id,name,image,recipe,price}=item
    const[,refetch]=useCart()
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    // console.log(user)
const handleAddToCart=(item)=>{
console.log(user)
if(user && user.email){
  const cartItem={menuItemId:_id,name,image,recipe,price,email:user.email}
  console.log('first')
  fetch('http://localhost:5000/carts',{
    method:'POST',
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(cartItem)

  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    if (data.insertedId) {
      refetch()
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }
   
  })
}
else{
  Swal.fire({
    title: 'Please Login?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Login Now'
  }).then((result) => {
    if (result.isConfirmed) {
     
      navigate('/login' , {state:{froms: location}})
    }
  })
}


}
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
        <figure><img src={image} /></figure>
          <p className='bg-slate-900 absolute right-0 mr-4 mt-4 px-4'>{price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
          <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 text-slate-950 border-orange-400">Add To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;
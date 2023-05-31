import { useContext } from 'react';
import { useQuery } from 'react-query'
import { AuthContext } from '../Auth/AuthProvider';
import { QueryClient } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
  // Create a client
// const queryClient = new QueryClient()

const useCart=()=>{
const {user,loader}=useAuth()
// const token=localStorage.getItem('access-token')
const [axiosSecure]=useAxiosSecure()
const {  refetch, data:cart=[]} = useQuery({queryKey:['cart',user?.email],
enabled:!loader && !!user?.email,
// queryFn: async ()=>{
//     const res=await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
//       headers:{
//         authorization:`Bearer ${token}`
//       }
//     })
//     return res.json()
// }
queryFn: async ()=>{
    const res=await axiosSecure(`/carts?email=${user?.email}`)
    console.log('axiosSecure',res)
    return res.data;
}

})
return [cart,refetch]
}
export default useCart;
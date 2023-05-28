import { useContext } from 'react';
import { useQuery } from 'react-query'
import { AuthContext } from '../Auth/AuthProvider';
import { QueryClient } from '@tanstack/react-query';
  // Create a client
const queryClient = new QueryClient()

const useCart=()=>{
const {user}=useContext(AuthContext)
const { isLoading, isError,refetch, data:cart=[], error } = useQuery({queryKey:['cart',user?.email],
queryFn: async ()=>{
    const res=await fetch(`http://localhost:5000/carts?email=${user?.email}`)
    return res.json()
}})
return [cart,refetch]
}
export default useCart;
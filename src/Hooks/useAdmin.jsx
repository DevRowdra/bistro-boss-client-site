import { useQuery } from "react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useAdmin=()=>{
    const {user}=useAuth()
    console.log(user)
    // const [axiosSecure]=useAxiosSecure()
// is admin post not working
    const [axiosSecure]=useAxiosSecure()
    const{data:isAdmin,isLoading:isAdminLoading}=useQuery({
        // problem
        queryKey:['isAdmin',user?.email],
        queryFn:async ()=>{
            const res= await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log('is admin response' ,res)
            console.log("res")
            return res.data.admin
        }
    })
    return [isAdmin,isAdminLoading]
}
export default useAdmin;
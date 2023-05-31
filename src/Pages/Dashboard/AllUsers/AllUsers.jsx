import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import { useQueries, useQuery } from 'react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AllUsers = () => {
  const[axiosSecure]=useAxiosSecure()
    const {data:users=[],refetch}=useQuery(['users'],async()=>{
        const res=await axiosSecure.get('/users')
        return res.data;
    })
    const handleDelete=(id)=>{
      fetch(`http://localhost:5000/users/${id}`,{
        method:'DELETE',
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if (data.deletedCount>0) {
        refetch()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User Deleted successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })

    }
    const handleMakeAdmin=(user)=>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH',
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.modifiedCount) {
              refetch()
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is Admin now`,
                showConfirmButton: false,
                timer: 1500
              })
            }
        })
    }
    return (
        <div className='w-full'>
            <div className="text-2xl font-semibold">Total User  {users.length}</div>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {users.map((user,index)=> <tr key={user._id}>
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td> {user.role == 'admin'? 'admin' : <button onClick={()=>handleMakeAdmin(user)} className="btn  bg-orange-500 text-white"> <FaUserShield></FaUserShield></button> } </td>
        <td><button onClick={()=>handleDelete(user._id)} className="btn  bg-red-600 text-white"> <FaTrashAlt></FaTrashAlt></button></td>
      </tr> )}
     
      {/* row 2 */}
      
    </tbody>
  </table>
</div>
           
        </div>
    );
};

export default AllUsers;
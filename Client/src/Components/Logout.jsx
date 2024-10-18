import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast';

export default function Logout() {
    const[authUser, setAuthUser] = useAuth();
    const handelLogout =()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("user");
            toast.success("Logout Successful");
            setTimeout(()=>{
                window.location.reload();
            },1000)
        } catch (error) {
            toast.error(error.message);
        }
    }
  return (
    <div>
      <button className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-700 duration-200" onClick={handelLogout}>Logout</button>
    </div>
  )
}

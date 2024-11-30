import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Divider from './Divider'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../store/UserSlice'

const Usermenu = ({closeUserMenu}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user)

    async function handleLogOut(){
        try{
            const response = await fetch("http://localhost:8080/api/user/logout",{
                method : "GET",
                headers : {
                  'authorization' : localStorage.getItem('accessToken'),
                }
              })
            
            const result = await response.json();
            console.log(result);
            if(result.success){
                closeUserMenu();
                dispatch(logOut());
                localStorage.clear();
                toast.success(result.message)
                navigate('/login');
            }
        }
        catch(error){
            toast.error(error);
        }

    }

  return (
    <div>
        <div className='font-semibold'>My Account</div>
        <div>{user.name}</div>
        <Divider/>
        <div className='text-sm flex flex-col gap-2'>
            <Link className='px-2' to={""}>My Orders</Link>
            <Link className='px-2' to={""}>Save Address</Link>
            <button onClick={handleLogOut} className='text-left px-2 font-semibold'>Logout</button>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Usermenu
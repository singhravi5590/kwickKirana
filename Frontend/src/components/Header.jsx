import React from 'react'
import logo from '../asset/logo.png'
import Search from './Search'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaCircleUser } from "react-icons/fa6";
import useMobile from '../hooks/useMobile';
import { MdShoppingCart } from "react-icons/md";

const Header = () => {

  const [isMobile] = useMobile();
  const location = useLocation();
  const navigate = useNavigate();

  const isSearchPage = location.pathname === "/search";

  const redirectToLoginPage = () => {
    navigate('/login')
  }

  return (
    <header className='lg:h-20 h-24 sticky top-0 lg:shadow-md flex  flex-col justify-center gap-1 bg-white'>

      {
        !(isSearchPage && isMobile) && (
          <div className='container flex mx-auto items-center px-4 justify-between'>

         <div className='h-full'>
            <Link to={'/'} className='h-full flex items-center justify-center'>
              <img 
                src={logo} 
                alt="logo"
                width={170}
                height={60}
                className='hidden lg:block'
                />
              <img 
                src={logo} 
                alt="logo"
                width={120}
                height={60}
                className='lg:hidden'
                />
            </Link>
        </div>

          <div className='hidden lg:block'>
            {<Search/>}
          </div>

          <div>
            {/* user icon only displays in mobile version */}
            <button className='text-slate-600 lg:hidden'>
             {FaCircleUser({size : 26})}
            </button>
            
            {/* this is displays in desktop version */} 
            <div className='hidden lg:flex gap-10 items-center'>
              <button onClick={redirectToLoginPage} className='text-lg px-2'>Login</button>
              <button className='flex items-center gap-2 bg-green-800 hover:bg-green-700 px-3 py-2 text-white rounded'>
                <div className='animate-bounce'>
                  <MdShoppingCart size={26}/>
                </div>
                <div>
                  <p>My Cart</p>
                </div>
              </button>
            </div>
          </div>
      </div>
        )
      }
      

      <div className='container mx-auto px-2 lg:hidden'>
        <Search/>
      </div>
    </header>
  )
}

export default Header
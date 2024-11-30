import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetais } from "./store/UserSlice";
import { fetchUserdetails } from "./utils/fetchUser";

function App() {

  const dispatch = useDispatch();

  async function fetchFunction(){
    const result = await fetchUserdetails();
    dispatch(setUserDetais(result.data))
  }

  useEffect(() => {
    fetchFunction();
  }, [])

  return (
    <>
      <Header/>
      <main className="min-h-[78vh]">
        <Outlet/>
      </main>
      <Footer/>
    </>
    
  )
}

export default App

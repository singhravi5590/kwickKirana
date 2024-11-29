import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import 'react-toastify/dist/ReactToastify.css';

function App() {

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

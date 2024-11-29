import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SearchPage from "../Pages/SearchPage";
import Register from "../Pages/Register";
import ForgotPassword from "../Pages/ForgotPassword";
import OtpVerify from "../Pages/OtpVerify";
import ResetPassword from "../Pages/ResetPassword";

const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "/search",
                element : <SearchPage/>
            },
            {
                path : '/login',
                element : <Login/>,
            },
            {
                path : '/register',
                element : <Register/>,
            },
            {
                path : '/forgot-password',
                element : <ForgotPassword/>
            },
            {
                path : '/verify-otp',
                element : <OtpVerify/>
            },
            {
                path : '/reset-password',
                element : <ResetPassword/>
            }
        ]
    },    
])

export default router;
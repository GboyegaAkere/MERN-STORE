import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";

const router = createBrowserRouter([
    {
        path : "/",
        element: <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "/login",
                element : <Login/>
            },
            {
                path : "/forget-password",
                element : <ForgotPassword/>
            },
            {
                path : "/about",
                element : <About/>
            }
        ]
    }
])

export default router
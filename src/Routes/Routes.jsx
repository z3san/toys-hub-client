
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import AllToys from "../Pages/AllToys/AllToys";
import Blogs from "../Pages/Blogs/Blogs";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToy/AddToy";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login' ,
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'myToys',
                element: <MyToys></MyToys>
            },
            {
                path: 'addToy',
                element: <AddToy></AddToy>
            },
           
        ]
        
    }
])

export default router
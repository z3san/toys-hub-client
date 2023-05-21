
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import AllToys from "../Pages/AllToys/AllToys";
import Blogs from "../Pages/Blogs/Blogs";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToy/AddToy";
import SingleToy from "../Pages/SingleToy/SingleToy";
import PrivateRoutes from "./PrivateRoute";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage/>,
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
                element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>

            },
            {
                path: 'addToy',
                element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
            },
            {
                path: 'singleToy/:id',
                element: <PrivateRoutes><SingleToy></SingleToy></PrivateRoutes>,
                loader: ({params})=> fetch(`https://toys-hub-server-two.vercel.app/allToys/${params.id}`)
            },
            {
                path: 'updatedToys/:id',
                element:<PrivateRoutes><UpdateToy></UpdateToy></PrivateRoutes>,
                loader: ({params})=> fetch(`https://toys-hub-server-two.vercel.app/allToys/${params.id}`)
            
              },
              
           
        ]
        
    },
   
])

export default router
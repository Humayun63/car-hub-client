import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Login from './pages/Login/Login';
import AuthProvider from './providers/AuthProvider';
import Register from './pages/Login/Register';
import { Toaster } from 'react-hot-toast';
import AllToys from './pages/AllToys/AllToys';
import PrivateRoutes from './routes/PrivateRoute';
import AddToy from './pages/AddToy/AddToy';
import MyToys from './pages/MyToys/MyToys';
import UpdateToy from './pages/UpdateToy/UpdateToy';
import SingleToy from './pages/SingleToy/SingleToy';
import Blogs from './pages/Blogs/Blogs';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path: 'toys/all',
        element: <AllToys></AllToys>,
        loader: () => fetch('https://car-hub-server-alpha.vercel.app/cars/all')
      },
      {
        path: 'toys/add',
        element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
      },
      {
        path: 'toys/my-toys',
        element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
      },
      {
        path: 'toys/update/:id',
        element: <PrivateRoutes><UpdateToy></UpdateToy></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://car-hub-server-alpha.vercel.app/cars/car/${params.id}`)
      },
      {
        path: 'toys/:id',
        element: <PrivateRoutes><SingleToy></SingleToy></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://car-hub-server-alpha.vercel.app/cars/car/${params.id}`)
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster></Toaster>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

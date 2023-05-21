import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Layout from './pages/Layout/Layout.jsx';
import Resister from './pages/Resister/Resister.jsx';
import AllToys from './pages/AllToys/AllToys.jsx';
import AddToy from './pages/AddToy/AddToy.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import MyToy from './pages/MyToy/MyToy.jsx';
import Blogs from './pages/Blogs/Blogs.jsx';
import MyEdit from './pages/MyToy/MyEdit.jsx';
import Login from './pages/Login/Login.jsx';
import Details from './pages/Details/Details.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import DetailsAll from './pages/Details/DetailsAll.jsx';
import Error from './pages/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element: <Layout></Layout>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/resister',
        element: <Resister></Resister>
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>
      },
      {
        path: '/addToy',
        element: <AddToy></AddToy>
      },
      {
        path: '/myToy',
        element: <MyToy></MyToy>
        
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`https://toy-shop-server-phi.vercel.app/getToys/${params.id}`)
      },
      {
        path: '/allDetails/:id',
        element: <PrivateRoute><DetailsAll></DetailsAll></PrivateRoute>
        
      },
      {
        path: '/update/:id',
        element: <MyEdit></MyEdit>,
        loader: ({params})=>fetch(`https://toy-shop-server-phi.vercel.app/bookings/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

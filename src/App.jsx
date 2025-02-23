import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './mycomponent/navbar/Navbar'
import Footer from './mycomponent/footer/Footer'
import Chalanges from './mycomponent/othercomponent/chalanges'
import Meditation from './mycomponent/othercomponent/Meditation'
import Post from './mycomponent/othercomponent/post'
import Login from './mycomponent/othercomponent/login'
import Signup from './mycomponent/othercomponent/signup'
import Home from './mycomponent/othercomponent/Home'
<<<<<<< HEAD
import Dashboard from './mycomponent/othercomponent/dashboard'
=======
>>>>>>> 4c65b3ea9e291544bfa95a9f0a31ee93e2b0c7a2

const router = createBrowserRouter([

  {
    path:'/',
    element:
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  },

  {
    path:'/chalanges',
    element:
    <div>
      <Navbar/>
      <Chalanges/>
      <Footer/>
    </div>
  },
  {
    path:'/Meditation',
    element:
    <div>
    <Navbar/>
    <Meditation/>
    <Footer/>
    </div>
  },
  {
    path:'/Post',
    element:
    <div>
      <Navbar/>
      <Post/>
      <Footer/>
    </div>
  },
  {
    path:'/Login',
    element:
    <div>
      <Navbar/>
      <Login/>
      <Footer/>
    </div>
  },
  {
    path:'/Signup',
    element:
    <div>
      <Navbar/>
      <Signup/>
      <Footer/>
    </div>
  },
<<<<<<< HEAD
  {
    path:'/dashboard',
    element:
    <div>
      <Navbar/>
      <Dashboard/>
      <Footer/>
    </div>
  },
=======
>>>>>>> 4c65b3ea9e291544bfa95a9f0a31ee93e2b0c7a2


  
])

const App = () => {
  return (
    <>
    <div>
    <RouterProvider router={router}/>
    </div>
    </>
  )
}

export default App

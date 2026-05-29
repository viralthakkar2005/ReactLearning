import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '../component/Home/Home.jsx'
import About from '../component/About/About.jsx'
import Contact from '../component/Contact/Contact.jsx'
import User from '../component/User/User.jsx'
import GitHub from '../component/GitHub/GitHub.jsx'

// const router=createBrowserRouter([{
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contactus",
//         element:<Contact />
//       }
//     ]
//   }]
// )
//
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contactus' element={<Contact />}/>
      <Route path='github' element={<GitHub />} />
      <Route path='user/:userId' element={<User />}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

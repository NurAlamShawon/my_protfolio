import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Homepage from './Components/Homepage/Homepage';



const router = createBrowserRouter([
  {
    path: "/",
    Component:Homepage
  },
]);




createRoot(document.getElementById('root')).render(
 <React.StrictMode>
   
     <div
      data-theme="light"
      className="min-h-screen bg-base-200 text-base-content"
    >
      <RouterProvider router={router} />
    </div>

  </React.StrictMode>
)

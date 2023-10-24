import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Profile from './pages/Profile.jsx'
import PopstateProvider from './context/PopstateContext'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PopstateProvider>
        <Home />
      </PopstateProvider>
    )
  },
  {
    path: '/profile',
    element: (
      <PopstateProvider>
        <Profile />
      </PopstateProvider>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
)

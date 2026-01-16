import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ROUTER from './route/ROUTER'
function App() {
  const router=createBrowserRouter(ROUTER())
  return (
    <>
      {/* <Header />
      <Manager /> */}
      <RouterProvider router={router}/>
    </>
  )
}

export default App

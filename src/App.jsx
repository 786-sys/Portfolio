import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ROUTER from './route/router'
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

import React from 'react'
import './App.css';
// import './component/App.scss'
import Navbar from "./component/Navbar";
import Frontpage from "./component/Frontpage"
import Users from "./component/Users"
import { BrowserRouter,Routes, Route } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
export default function App() {
  return (<>
  
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<Frontpage/>} path="/"></Route>
    </Routes>
    <Routes>
      <Route element={<Users/>} path="/users"></Route>
    </Routes>
   
    </BrowserRouter>
  


    


  </>
    
  )
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signin from './component/singin'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 return (
    <>
      <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/signinpage" element={<Signin />} />
      </Routes>
    </Router>

     
    </>
  )
}

export default App

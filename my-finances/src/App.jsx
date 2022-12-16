import React from 'react';
import {createRoot} from "react-dom/client";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";

//VIEWS
import Finance from "./views/Finance.jsx";
import Signin from "./views/Signin.jsx";
import Signup from "./views/Signup.jsx";

//COMPONENTS
import NavBar from "./components/NavBar.jsx";
import DoughnutChart from "./components/Chart.jsx";

function App() {
  return (
        <Router>
            <Routes>
                <Route path='/' element={<Signin />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/finance' element={<Finance />} />
            </Routes>
        </Router>
  )
}

export default App

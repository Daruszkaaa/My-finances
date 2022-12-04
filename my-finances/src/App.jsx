import React from 'react';
import './App.scss'
import {createRoot} from "react-dom/client";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";

//VIEWS
import Finance from "./views/Finance.jsx";
import Signin from "./views/Signin.jsx";
import Signup from "./views/Signup.jsx";
import MainView from "./views/MainView.jsx";

//COMPONENTS
import SignIn from "./components/SignIn.jsx";
import NavBar from "./components/NavBar.jsx";
import SignUp from "./components/SignUp.jsx";

function App() {
  return (
        <Router>
            <Routes>
                <Route path='/' element={<MainView />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/finance' element={<Finance />} />
            </Routes>
        </Router>
  )
}

export default App

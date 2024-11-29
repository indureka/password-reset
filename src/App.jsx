import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import SuccessMessage from "./components/SuccessMessage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/success" element={<SuccessMessage />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App

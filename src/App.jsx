import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import SuccessMessage from "./components/SuccessMessage";
import Register from "./components/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./components/LoginPage";
import LoginSuccess from "./components/LoginSuccessPage";


function App() {


  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<SuccessMessage />} />
        <Route path="/login-successful" element={<LoginSuccess />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App

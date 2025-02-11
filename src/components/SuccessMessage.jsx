import React from "react";
import { useNavigate } from "react-router-dom";



const SuccessMessage = () => {

  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center text-success mb-3">Password Reset Successful!</h2>
        <p className="text-center mb-4">You can now log in with your new password.</p>
       
        <button onClick={() => navigate("/")} className="btn btn-primary">Go to Login</button>
      </div>
    </div>
  );
  
  
};

export default SuccessMessage;

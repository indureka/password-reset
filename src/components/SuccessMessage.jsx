import React from "react";

const SuccessMessage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center text-success mb-3">Password Reset Successful!</h2>
        <p className="text-center mb-4">You can now log in with your new password.</p>
        <a href="/login" className="btn btn-primary w-100">
          Go to Login
        </a>
      </div>
    </div>
  );
  
  
};

export default SuccessMessage;

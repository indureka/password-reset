# Password Reset Application

A simple **React** and **Node.js** application to implement a secure **password reset functionality** with email-based verification.

---

## Features

- **User Registration**: Users can register with their email and password.
- **Forgot Password**: Users can request a password reset link to their registered email.
- **Email Verification**: A unique token is sent to the user's email for password reset.
- **Reset Password**: Users can update their password using the reset link.

---

## Tech Stack

### Frontend
- React
- Bootstrap for UI styling
- Axios for API communication

### Backend
- Node.js with Express.js
- MongoDB for database
- Mongoose for MongoDB modeling
- Nodemailer for email functionality
- JSON Web Tokens (JWT) for secure token generation
- Bcrypt for password hashing

---

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB instance running locally or remotely

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd password-reset


### Usage

## Open the application in your browser:

Frontend: http://localhost:5173
Backend: http://localhost:5000
Register a new user.

## Request a password reset:

Navigate to the Forgot Password page.
Enter your registered email address.
Check your email for the reset link.

Click the link to reset your password.

import React from 'react';
import logo from '@/public/login-assets/logo.jpg';
import Image from 'next/image';

const ForgotPassword: React.FC = () => {
  return (
    <div className="wrapper">
        <div className="logo-container"> 
        <Image src={logo} alt="Logo" width={1000} /> 
      </div>
      <form action="">
        
        <h1>Forgot Password</h1>
        <p className="para ">Please enter the email you used to sign into MindPhix.</p>

        <div className="input-box">
          <input type="text" placeholder="Enter your email" required />
          <i className="bx bx-envelope"></i>
        </div>

        <button type="submit" className="btn">
          Send OTP
        </button>
        <a href="/signin">back to login</a>
      </form>
    </div>
  );
};

export default ForgotPassword;

"use client"

import React from 'react';
import { useRouter } from "next/navigation";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {auth} from '@/app/firebase/config'; 
import logo from '@/public/login-assets/logo.jpg';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

const ForgotPassword: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const[sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    /*try {
      await auth.sendPasswordResetEmail(email);
      setIsEmailSent(true);
    } catch (error) {
      console.error('Error sending password reset email:', error.message);
    } */
    try {
      await sendPasswordResetEmail(email);
      setIsEmailSent(true);
    } catch (error) {
      console.error('Error sending password reset email:', error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center font-sans bg-gray-200">
      <div className="max-w-md bg-white shadow-md rounded px-4 sm:px-8 py-6 sm:py-10 mb-4">
        
        {/* Logo */}
        <div className="text-center mb-4">
          <Image src={logo} alt="Logo" width={200} height={100} className="mx-auto" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-black text-center mb-4">Forgot Password</h1>

        {isEmailSent ? (
          <p className="text-green-600 text-center mb-8">
            Password reset email has been sent. Please check your email.
          </p>
        ) : (
          <>
            {/* Text */}
            <p className="text-gray-700 text-sm font-semibold mb-8 text-center">
              Please enter the email you used to sign into MindPhix.
            </p>

            {/* Email input */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email here"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              {/* Submit button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="border-2 border-blue-400 font-bold text-blue-500 rounded-full px-6 py-2 inline-block hover:bg-blue-400 hover:text-white mb-5"
                >
                  Reset Your Password 
                </button>
              </div>
            </form>
          </>
        )}

        {/* Back to login link */}
        <div className="text-center font-semibold text-sm mt-4">
          <Link href="/sign-in" className="text-gray-700 underline hover:text-blue-400">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;


/*const ForgotPassword: React.FC = () => {
   return (
    <div className="h-screen flex justify-center items-center font-sans bg-gray-200">
      <div className="max-w-md bg-white shadow-md rounded px-4 sm:px-8 py-6 sm:py-10 mb-4">
        
        <div className="text-center mb-4">
          <Image src={logo} alt="Logo" width={200} height={100} className="mx-auto" />
        </div>

        
        <h1 className="text-2xl font-bold text-black text-center mb-4">Forgot Password</h1>

        
        <p className="text-gray-700 text-sm font-semibold mb-8 text-center">
          Please enter the email you used to sign into MindPhix.
        </p>

        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email here"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        
        <div className="text-center">
          <Link href="/sign-in/forget-password/otp-page"
            type="submit"
            className="border-2 border-blue-400 font-bold text-blue-500 rounded-full px-6 py-2 inline-block hover:bg-blue-400 hover:text-white mb-5"
          >
            Send OTP
          </Link>
        </div>

        
        <div className="text-center font-semibold text-sm mt-4">
          <Link href="/sign-in" className="text-gray-700 underline hover:text-blue-400">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;*/


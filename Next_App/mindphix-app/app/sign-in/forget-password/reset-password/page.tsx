import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/login-assets/logo.jpg'; 

const ForgotPassword: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center font-sans bg-gray-200">
      <div className="max-w-md bg-white shadow-md rounded px-4 sm:px-20 py-6 sm:py-10 mb-4">
        {/* Logo */}
        <div className="text-center mb-4">
          <Image src={logo} alt="Logo" width={200} height={100} className="mx-auto" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-black text-center mb-4">Reset Your Password</h1>

        {/* Text */}
        <p className="text-gray-700 text-sm font-semibold mb-8 text-center">
          Please enter a valid password .
        </p>

        {/* Password input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Enter new password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password here"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cpassword" className="block text-gray-700 text-sm font-bold mb-2">
            Confirm your password
          </label>
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            placeholder="Confirm your Password"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Submit button */}
        <div className="text-center">
          <Link href="/sign-in"
            type="submit"
            className="border-2 border-blue-400 font-bold text-blue-500 rounded-full px-6 py-2 inline-block hover:bg-blue-400 hover:text-white mb-5"
          >
            Confirm
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

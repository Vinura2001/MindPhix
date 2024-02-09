import React from 'react';
import Image from 'next/image';
import logo from '@/public/login-assets/logo.jpg'; 
import Link from 'next/link';

const ForgotPassword: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center font-sans bg-gray-200">
      <div className="max-w-md bg-white shadow-md rounded px-4 sm:px-8 py-6 sm:py-10 mb-4">
        {/* Logo */}
        <div className="text-center mb-4">
          <Image src={logo} alt="Logo" width={200} height={100} className="mx-auto" />
        </div>
        
        {/* Text */}
        <p className="text-gray-700 text-sm font-semibold mb-8 text-center">
          Check you inbox and please enter the one time password we sent to your email.
        </p>

        {/* Email input */}
        <div className="mb-4">
          <label htmlFor="otp" className="block text-gray-700 text-sm font-bold mb-2">
            One-Time Password
          </label>
          <input
            type="text"
            id="otp"
            name="otp"
            placeholder="Enter OTP here"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Submit button */}
        <div className="text-center">
          <Link href="/sign-in/forget-password/reset-password"
            type="submit"
            className="border-2 border-blue-400 font-bold text-blue-500 rounded-full px-6 py-2 inline-block hover:bg-blue-400 hover:text-white mb-5"
          >
            Confirm
          </Link>
        </div>

        {/* Back to login link */}
        <div className="text-center font-bold text-sm mt-4">
          <Link href="/sign-in/forget-password" className="text-gray-700 hover:text-blue-400">
            Resend the otp code 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

'use client'
import Head from "next/head";
import Image from "next/image";
import background from "@/public/login-assets/Login.jpg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import Link from "next/link";
import { useState } from "react";
import {auth} from '@/app/firebase/config';
import {useSignInWithEmailAndPassword,useSignInWithGoogle} from 'react-firebase-hooks/auth';
import React from "react";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  
   
  const handleSignIn = async () => {
    try{
      // Firebase createUserWithEmailAndPassword
      const res = await signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');

       // Redirect upon successful signup
       if (res) {
      
        router.push("/dashboard/Dashboard");
      }

     
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Create Signin App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-5 sm:px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex max-w-4xl w-3/4">
          <div className="w-3/5 p-5 text-black ml-10 mr-10">
            <div className="text-left font-bold text-black">
              <span className="text-blue-400">Mind</span>Phix
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold mb-2">Sign into account</h2>
              <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaFacebookF className="text-s" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaLinkedinIn className="text-s" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-s" />
                </a>
              </div>
              {/*Other login methods*/}
              <p className="font-semibold text-gray-400 my-3">
                or use your email account
              </p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>
                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="remember" className="mr-1 " />
                    Remember me
                  </label>
                  <Link
                    href="/sign-in/forget-password"
                    className="text-xs font-semibold"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button
                  className=" border-2 border-blue-400 font-semibold text-blue-500 rounded-full px-12 py-2 inline-block hover:bg-blue-400 hover:text-white mb-5"
                  onClick={handleSignIn} 
                >
                  Login
                </button>

                <Link href="/sign-up" className=" text-sm font-bold">
                  Start your journey with us ! Sign up today.
                </Link>
              </div>
            </div>
          </div>
          {/*Signin section*/}

          <Image
            className="w-3/4 rounded-tr-2xl rounded-br-2xl"
            src={background}
            alt="background image"
            width={400}
            height={1000}
          />

          {/*Signup section*/}
        </div>
      </main>
    </div>
  );
}

'use client'

import Image from "next/image";
import background from "@/public/login-assets/Login.jpg";
import { FaRegEnvelope } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdLockOutline } from 'react-icons/md';
import Link from "next/link";
import { useState, ChangeEvent } from "react";
import {auth} from '@/app/firebase/config';
import {useSignInWithEmailAndPassword,useSignInWithGoogle} from 'react-firebase-hooks/auth';
import React from "react";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const[signInWithGoogle] = useSignInWithGoogle(auth);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  const handleSignInWithEmailAndPassword = async () => {
    try {
      if (!email || !password) {
        setEmailError("Email is required.");
        setPasswordError("Password is required.");
        return;
      }

      const res = await signInWithEmailAndPassword(email, password);

      if (res) {
        router.push("/dashboard/Dashboard");
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      router.push("/dashboard/Dashboard");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-5 sm:px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col sm:flex-row w-full max-w-4xl overflow-hidden">
          <div className="w-full sm:w-3/5 p-5 text-black">
            <div className="text-left font-bold text-black">
              <span className="text-blue-400">Mind</span>Phix
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold mb-2">Sign into account</h2>
              <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <button 
                className="border-2 border-gray-200 text-sm font-semibold text-gray-400 rounded-full px-12 py-2 inline-flex items-center hover:bg-gray-200 hover:text-black mb-2"
                onClick = {handleSignInWithGoogle} >
                  <FcGoogle className="mr-2"/>
                  <span>Sign in via your Google Account</span>
                </button>
              </div>
              {/*Other login methods*/}

              <p className="font-semibold text-gray-400 my-3">
                or use your email account
              </p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-full sm:w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    onChange={handleEmailChange}
                    value={email}
                  />
                </div>
                {emailError && <p className="text-red-500 text-xs font-semibold mb-3 ">{emailError}</p>}
                <div className="bg-gray-100 w-full sm:w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    onChange={handlePasswordChange}
                    value={password}
                  />
                </div>
                {passwordError && <p className="text-red-500 text-xs font-semibold">{passwordError}</p>}

            

                <div className="flex justify-end w-64 mt-2 mb-5">
                  <Link
                    href="/sign-in/forget-password"
                    className="text-xs font-semibold"
                  >
                    Forget Your Password?
                  </Link>
                </div>

                <button
                  className=" border-2 border-blue-400 font-semibold text-blue-500 rounded-full px-12 py-2 inline-block hover:bg-blue-400 hover:text-white mb-5"
                  onClick={handleSignInWithEmailAndPassword} 
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

          <div className="hidden sm:block w-2/5 relative">
            <Image
            className="rounded-tr-2xl rounded-br-2xl"
            src={background}
            alt="background image"
            layout="fill"
            objectFit="cover"
          />
          </div>

          {/*Signup section*/}
        </div>
      </main>
    </div>
  );
}

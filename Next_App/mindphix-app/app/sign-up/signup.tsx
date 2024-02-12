"use client";
import Head from "next/head";
import Image from "next/image";
import background from "@/public/login-assets/Signup.jpg";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Link from "next/link";
import{ FcGoogle } from 'react-icons/fc';
import { useState, ChangeEvent } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import React from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React.useState("");
  const[signInWithGoogle] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async () => {
    try {
      if (!email || !password || !confirmPassword) {
        setEmailError("Please enter your user details to proceed.");
        return;
      }

      if (password !== confirmPassword) {
        setConfirmPasswordError("Passwords don't match with each.");
        return;
      }

      const res = await createUserWithEmailAndPassword(email, password);

      if (res) {
        router.push("/dashboard/Dashboard");
      }
    } catch (error) {
      console.error("Error signing up:", error);
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

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
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
              <h2 className="text-3xl font-bold mb-2">Create a new account</h2>
              <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <button 
                  className="border-2 border-gray-200 text-sm font-semibold text-gray-400 rounded-full px-12 py-2 inline-flex items-center hover:bg-gray-200 hover:text-black mb-2"
                  onClick={handleSignInWithGoogle}
                >
                  <FcGoogle className="mr-2"/>
                  <span>Sign in via your Google Account</span>
                </button>
              </div>
              <p className="font-semibold text-gray-400 my-3">
                Enter your user credentials here{" "}
              </p>
              <div className="flex flex-col items-center">
              {emailError && <p className="text-red-500 text-xs font-semibold mb-3">{emailError}</p>}
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
                {passwordError && <p className="text-red-500 text-xs font-semibold ">{passwordError}</p>}
                <div className="bg-gray-100 w-full sm:w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="cpassword"
                    placeholder="Confirm Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    onChange={handleConfirmPasswordChange}
                    value={confirmPassword}
                  />
                </div>
                {confirmPasswordError && <p className="text-red-500 text-xs font-semibold mb-3">{confirmPasswordError}</p>}
                <button
                  onClick={handleSignUp}
                  className=" border-2 border-blue-400 font-semibold text-blue-500 rounded-full px-12 py-2 inline-block hover:bg-blue-400 hover:text-white mb-5"
                >
                  Signup
                </button>
                <Link href="/sign-in" className=" text-sm font-bold">
                  Already have an account ? Sign in here.{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden sm:block w-full sm:w-2/5 relative">
            <Image
              className="rounded-tr-2xl rounded-br-2xl "
              src={background}
              alt="background image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </main>
    </div>
  );

}

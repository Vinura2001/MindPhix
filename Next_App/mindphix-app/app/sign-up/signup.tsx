"use client";
import Head from "next/head";
import Image from "next/image";
import background from "@/public/login-assets/Signup.jpg";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
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

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async () => {
    try {
      // Firebase createUserWithEmailAndPassword
      const res = await createUserWithEmailAndPassword(email, password);

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
        <title>Create SignUP App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-5 sm:px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex max-w-4xl w-3/4">
          <div className="w-3/5 p-5 text-black ml-10 mr-10">
            <div className="text-left font-bold text-black">
              <span className="text-blue-400">Mind</span>Phix
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold mb-2">Create a new account</h2>
              <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>

              <p className="font-semibold text-gray-400 my-3">
                Enter your user credentials here{" "}
              </p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-full sm:w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="bg-gray-100 w-full sm:w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="cpassword"
                    placeholder="Confirm Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                  />
                </div>
                <button
                  onClick={handleSignUp}
                  className=" border-2 border-blue-400 font-semibold text-blue-500 rounded-full px-12 mt-2 py-2 inline-block hover:bg-blue-400 hover:text-white mb-5"
                >
                  Signup
                </button>
                <Link href="/sign-in" className=" text-sm font-bold">
                  Already have an account ? Sign in here.{" "}
                </Link>
              </div>
            </div>
          </div>
          {/*Signup section*/}
          <Image
            className="rounded-tr-2xl rounded-br-2xl w-3/4"
            src={background}
            alt="background image"
            width={400}
            height={500}
          />

          {/*Signin section*/}
        </div>
      </main>
    </div>
  );
}

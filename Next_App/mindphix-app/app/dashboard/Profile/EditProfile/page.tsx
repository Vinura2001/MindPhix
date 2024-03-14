"use client";
import { ChangeEvent, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import BaseLayout from '../../BaseLayout';
import Image from 'next/image';
import Link from 'next/link';
import { auth, database } from '@/app/firebase/config';
import { ref, update } from 'firebase/database';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export default function EditProfile() {
  const [userDetails, setUserDetails] = useState({
    First_Name: '',
    Last_Name: '',
    User_Name: '',
    Gender: '',
    Email_Address: '',
    Date_of_Birth: '',
  });
  const [currentUsername, setCurrentUsername] = useState('');

  useEffect(() => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      setCurrentUsername(currentUser.displayName || ''); // Use the current user's display name if available
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentUser = auth.currentUser;

    if (currentUser) {
      const userId = currentUser.uid;
      const usersRef = ref(database, `users/${userId}`);

      try {
        await update(usersRef, userDetails);
        console.log('User details updated successfully');
        // Provide feedback to the user or redirect as needed
      } catch (error) {
        console.error('Error updating user details:', error);
        // Provide feedback to the user about the error
      }
    }
  };

  return (
    <BaseLayout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <div className="top-container bg-white rounder-lg pb-10 mt-5 w-full md:w-1/2 shadow-xl max-h-fit relative md:absolute md:top-1 lg:left-1/2 md:left-1/2 md:-ml-48  lg:mt-16  xl:mt-5">
          <Image
            src="/Figures/UserProfileTopBoxImage.png"
            alt="banner"
            width={1000}
            height={50}
            className="w-full cover-photo"
          ></Image>
          <Button className="cover-btn text-sm text-white bg-blue-800 h-6 p-4 rounded-sm hover:bg-blue-900 -mt-12 absolute right-0 mr-4">
            Edit Cover Photo
          </Button>
          <div className="image-container w-24 h-23 ml-10 -mt-10 rounded-full bg-amber-500 relative top-[-100%] left-7%">
            <img
              className="user-image"
              src="/Figures/UserImage_TopBox.png"
              alt="UserImage"
            />
          </div>
          <div className="username font-poppins text-xl font-bold relative -mt-10 ml-36">
            {currentUsername ? currentUsername : 'Loading...'}
          </div>
        </div>

        {/*Form*/}
        <div className="form-container bg-white shadow-xl mt-5 w-full md:w-2/4 md:overflow-hidden relative md:absolute md:top-80 md:left-1/2 md:-ml-48 lg:mt-20 lg:ml-200">
          <form onSubmit={handleSubmit}>
            {/* First Name Field*/}
            <div className="grid grid-rows-6 grid-flow-col gap-6 pb-14">
              <label htmlFor="firstname" className="text-base ml-10 mt-8">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="First_Name"
                placeholder="First Name"
                className="flex flex-col ml-10 w-[240px] h-[50px] ring-1 ring-gray-300  rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:outline-none focus:ring-opacity-75 focus:shadow-outline-blue"
                onChange={handleChange}
                value={userDetails.First_Name || ''}
              />

              {/* Username Field*/}
              <label htmlFor="username" className="text-base ml-10 mt-5">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="User_Name"
                placeholder="Username"
                className="flex flex-col ml-10 w-[240px] h-[50px] ring-1 ring-gray-300  rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:outline-none focus:ring-opacity-75 focus:shadow-outline-blue"
                onChange={handleChange}
                value={userDetails.User_Name || ''}
              />

              {/* Gender Field*/}
              <label htmlFor="gender" className="text-base ml-10 mt-5">
                Gender
              </label>
              <select
                id="gender"
                name="Gender"
                className="flex ml-10 w-[240px] h-[50px] mt-1 ring-1 ring-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:outline-none focus:ring-opacity-75 focus:shadow-outline-blue"
                value={userDetails.Gender || ''}
                onChange={handleChange}
              >
                <option value="male" className="text-sm">
                  Male
                </option>
                <option value="female" className="text-sm">
                  Female
                </option>
                <option value="not-specified" className="text-sm">
                  Not Prefer to Say
                </option>
              </select>

              {/* Last Name Field*/}
              <label htmlFor="lastname" className="text-base ml-10 mt-8">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="Last_Name"
                placeholder="Last Name"
                className="flex flex-col ml-10 w-[240px]  h-[50px] ring-1 ring-gray-300  rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:outline-none focus:ring-opacity-75 focus:shadow-outline-blue"
                onChange={handleChange}
                value={userDetails.Last_Name || ''}
              />

              {/* Email Address Field*/}
              <label htmlFor="email" className="text-base ml-10 mt-5">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="Email_Address"
                placeholder="Email Address"
                className="flex flex-col ml-10 w-[240px]  h-[50px] ring-1 ring-gray-300  rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:outline-none focus:ring-opacity-75 focus:shadow-outline-blue"
                onChange={handleChange}
                value={userDetails.Email_Address || ''}
              />

              {/* Date of Birth Field*/}
              <label htmlFor="dob" className="text-base ml-10 mt-5">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="Date_of_Birth"
                className="ml-10 w-[240px] h-[50px] mt-1 ring-1 ring-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:outline-none focus:ring-opacity-75 focus:shadow-outline-blue"
                onChange={handleChange}
                value={userDetails.Date_of_Birth || ''}
              />
            </div>
            {/* Submit Buttons */}
            <div className="flex flex-row justify-end gap-4 m-5">
              <Button
                type="submit"
                className="text-sm text-white bg-blue-800 h-6 p-4 rounded-sm hover:bg-blue-900"
              >
                Save Changes
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-white text-gray-700 border border-gray-500 hover:bg-white hover:text-blue-700 h-6 p-4 ml-2 rounded-sm">
                    Cancel
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      These changes cannot be undone and will be permanently
                      discarded.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Link href="/dashboard/Profile">
                      <AlertDialogAction className="bg-blue-800">
                        Continue
                      </AlertDialogAction>
                    </Link>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
}

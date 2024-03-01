"use client";
import { Button } from "@/components/ui/button";
import BaseLayout from "../../BaseLayout";
import Image from "next/image";
import "../../../styles/edit-profile.css";
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
} from "@/components/ui/alert-dialog";
import Link from "next/link";

export default function EditProfile() {
  return (
    <BaseLayout>
      <div>
        <div className="top-container bg-white rounder-lg pb-5 mt-5 absolute w-3/4 shadow-xl max-h-fit left-72 md:-ml-48 md:w-full lg:ml-2 xl:mt-5">
          <Image
            src="/Figures/UserProfileTopBoxImage.png"
            alt="banner"
            width={1000}
            height={50}
            className="w-full cover-photo"
          ></Image>
          <Button className="cover-btn text-sm text-white  bg-blue-800 h-6 p-4 rounded-sm hover:bg-blue-900 -mt-12 absolute right-0 mr-4">
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
            Janeesha Fernando
          </div>
        </div>

        {/*Form*/}
        <div className="form-container bg-white shadow-xl absolute pt-5 w-1/2 overflow-hidden top-56 left-72 md:-ml-48  md:-mt-2 md:w-full lg:mt-8 lg:ml-2">
          <form>
            {/* First Name Field*/}
            <div className="grid grid-rows-6 grid-flow-col gap-6 pb-14">
              <label htmlFor="name" className="text-base ml-10 mt-8">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                className="flex flex-col ml-10 w-[240px] h-[50px] ring-1 ring-gray-300  rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:outline-none focus:ring-opacity-75 focus:shadow-outline-blue"
              />

              {/* Username Field*/}
              <label htmlFor="name" className="text-base ml-10 mt-5">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                className="flex flex-col ml-10 w-[240px] h-[50px] ring-1 ring-gray-300  rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:outline-none focus:ring-opacity-75 focus:shadow-outline-blue"
              />

              <label htmlFor="gender" className="text-base ml-10 mt-5">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="flex ml-10 w-[240px] h-[50px] mt-1 ring-1 ring-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:outline-none focus:ring-opacity-75 focus:shadow-outline-blue"
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
              <label htmlFor="name" className="text-base ml-10 mt-8">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                className="flex flex-col ml-10 w-[240px]  h-[50px] ring-1 ring-gray-300  rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:outline-none focus:ring-opacity-75 focus:shadow-outline-blue"
              />

              <label htmlFor="name" className="text-base ml-10 mt-5">
                Email Address
              </label>
              <input
                type="email"
                id="name"
                name="name"
                placeholder="Email Address"
                className="flex flex-col ml-10 w-[240px]  h-[50px] ring-1 ring-gray-300  rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:outline-none focus:ring-opacity-75 focus:shadow-outline-blue"
              />

              <label htmlFor="dob" className="text-base ml-10 mt-5">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="ml-10 w-[240px] h-[50px] mt-1 ring-1 ring-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:outline-none focus:ring-opacity-75 focus:shadow-outline-blue"
              />
            </div>
          </form>
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
                    </AlertDialogAction>{" "}
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

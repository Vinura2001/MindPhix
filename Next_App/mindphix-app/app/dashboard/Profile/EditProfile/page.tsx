
"use client";
import BaseLayout from "@/app/dashboard/BaseLayout";
import Image from "next/image";
import router from "next/router";
import { get, ref, set, remove } from "firebase/database";
import { useState, useEffect } from "react";
import { database } from "@/app/firebase/config";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { FormControl, FormLabel } from "@mui/material";
import { Input } from "@/components/ui/input";
import Link from "next/link";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface User {
  id: string;
  First_Name: string;
  Last_Name: string;
  User_Name: string;
  Date_of_Birth: string;
  Gender: string;
  Email_Address: string;
}
const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  userName: z.string(),
  dateOfBirth: z.string(),
  gender: z.string(),
  email: z.string().email(),
});
export default function EditProfile() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const [userId, setUserId] = useState<string>("U004"); // Default user ID
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const fetchUserData = async () => {
      const usersRef = ref(database, `users/${userId}`);
      try {
        const snapshot = await get(usersRef);
        if (snapshot.exists()) {
          const userData = snapshot.val();
          setUser({
            id: userId,
            ...userData,
          });
        } else {
          console.log("No user data available");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [userId]);


  const handleDeleteProfile = async () => {
    try {
      const userRef = ref(database, `users/${userId}`);
      await remove(userRef);
      console.log("User data deleted successfully");
      // Optionally, redirect the user to a desired page after deletion
      router.push("/dashboard");
    } catch (error) {
      console.error("Error deleting user data:", error);
      // You can also display an error message to the user here
    }
  };

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Update user data in the real-time database
      await set(ref(database, `users/${userId}`), {
        First_Name: values.firstName,
        Last_Name: values.lastName,
        User_Name: values.userName,
        Date_of_Birth: values.dateOfBirth,
        Gender: values.gender,
        Email_Address: values.email,
      });
      // Redirect the user to the profile page
      router.push("/dashboard/Profile");
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };
  return (
    <BaseLayout>
      {user && (
        <div>
          <div className="bg-white rounder-lg pb-5 mt-5 absolute w-3/4 shadow-xl max-h-fit left-72">
            <Image
              src="/Figures/UserProfileTopBoxImage.png"
              alt="banner"
              width={1000}
              height={50}
              className="w-full"
            ></Image>
            <Button className="text-sm text-white  bg-blue-800 h-6 p-4 rounded-sm hover:bg-blue-900 -mt-12 absolute right-0 mr-4">
              Edit Cover Photo
            </Button>
            <div className="w-24 h-23 ml-10 -mt-10 rounded-full bg-amber-500 relative top-[-100%] left-7%">
              <img
                className="UserImage_TopBox"
                src="/Figures/UserImage_TopBox.png"
                alt="UserImage"
              />
            </div>
            <div className="font-poppins text-xl font-bold relative -mt-10 ml-36">
              {user.First_Name} {user.Last_Name}
            </div>
          </div>
          <div className="bg-white shadow-xl absolute pt-5 w-3/4 overflow-hidden top-72 left-72">
            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <div className="grid grid-rows-3 grid-flow-col gap-5">
                  {/* First Name */}
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="flex flex-col ml-10 mt-5 w-[240px]">
                        <FormLabel className="text-blue-700">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="First Name"
                            type="text"
                            {...field}
                            defaultValue={user.First_Name}
                          />
                        </FormControl>
                        {/* <FormMessage /> */}
                      </FormItem>
                    )}
                  />
                  {/* Username */}
                  <FormField
                    control={form.control}
                    name="userName"
                    render={({ field }) => (
                      <FormItem className="flex flex-col ml-10 mt-5 w-[240px]">
                        <FormLabel className="text-black">Username</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Username"
                            type="text"
                            {...field}
                            defaultValue={user.User_Name}
                          />
                        </FormControl>
                        {/* <FormMessage /> */}
                      </FormItem>
                    )}
                  />
                  {/* Gender */}
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem className="flex flex-col ml-10 mt-5 w-[240px]">
                        <FormLabel className="text-black">Gender</FormLabel>
                        <Select {...field} defaultValue={user.Gender}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value=" ">Rather not say</SelectItem>
                          </SelectContent>
                        </Select>
                        {/* <FormMessage /> */}
                      </FormItem>
                    )}
                  />
                  {/* Last Name */}
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="flex flex-col ml-10 mt-5 w-[240px]">
                        <FormLabel className="text-black">Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Last Name"
                            type="text"
                            {...field}
                            defaultValue={user.Last_Name}
                          />
                        </FormControl>
                        {/* <FormMessage /> */}
                      </FormItem>
                    )}
                  />
                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem className="flex flex-col ml-10 mt-5 w-[240px]">
                        <FormLabel className="text-black">
                          Date of Birth
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="YYYY/MM/DD"
                            type="text"
                            {...field}
                            defaultValue={user.Date_of_Birth}
                          />
                        </FormControl>
                        {/* <FormMessage /> */}
                      </FormItem>
                    )}
                  />
                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex flex-col ml-10 mt-5 w-[240px]">
                        <FormLabel className="text-black">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Email Address"
                            type="email"
                            {...field}
                            defaultValue={user.Email_Address}
                          />
                        </FormControl>
                        {/* <FormMessage /> */}
                      </FormItem>
                    )}
                  />
                </div>
                {/* Submit Buttons */}
                <div className="flex flex-row justify-end gap-4 m-5">
                  <Button
                    type="button"
                    onClick={handleDeleteProfile}
                    className="text-sm text-white bg-red-800 h-6 p-4 rounded-sm hover:bg-blue-900"
                  >
                    Delete Profile
                  </Button>
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
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
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
              </form>
            </FormProvider>
          </div>
        </div>
      )}
    </BaseLayout>
  );
}



"use client";
import Link from "next/link";
import BaseLayout from "../BaseLayout";

import { get, ref } from "firebase/database";
import { useState, useEffect } from "react";
import { database } from "@/app/firebase/config";
import { Button } from "@/components/ui/button";
import Logout from "../Dashboard/logout";

interface User {
  id: string;
  First_Name: string;
  Last_Name: string;
  User_Name: string;
  Date_of_Birth: string;
  Gender: string;
  Email_Address: string;
  Phone_Number: string;
  Status: string;
}

export default function Profile() {
  const [userId, setUserId] = useState<string>("U002"); // Default user ID
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

  // Function to handle changing the user
  const handleChangeUser = (newUserId: string) => {
    setUserId(newUserId);
  };

  return (
    <BaseLayout>
      {user && (
        <div>
          {/* User Profile content Start */}
          <div className="Profile_MenuIcon">
          </div>
          
          <div className="UserProfile_TopBox bg-white">
            <img
              className="UserProfile_TopBox_Image"
              src="/Figures/UserProfileTopBoxImage.png"
              alt="TopBox_Image"
            />
            <div className="Name">
              {user.First_Name} {user.Last_Name}
            </div>
            <div className="TopBoxUserImage">
              <img
                className="UserImage_TopBox"
                src="/Figures/UserImage_TopBox.png"
                alt="UserImage"
              />
            </div>
            <Link href="/dashboard/Profile/EditProfile">
              <Button className="EditProfile_Button text-sm text-white bg-blue-800 rounded-sm hover:bg-blue-900 absolute right-0 mr-4">
                Edit Profile
              </Button>
            </Link>
          </div>
          {/* Personal Information Start */}
          <div className="PersonalInformationBox bg-white">
            <div className="PersonalInformation_Topic">
              Personal Information
            </div>
            <div className="FirstName_heading">First Name</div>
            <div className="FirstName">{user.First_Name}</div>
            <div className="LastName_heading">Last Name</div>
            <div className="LastName">{user.Last_Name}</div>
            <div className="UserName_heading">User Name</div>
            <div className="UserName">{user.User_Name}</div>
            <div className="DOB_heading">Date of Birth</div>
            <div className="DOB">{user.Date_of_Birth}</div>
            <div className="Gender_heading">Gender</div>
            <div className="Gender">{user.Gender}</div>
            <div className="EmailAddress_heading">Email Address</div>
            <div className="EmailAddress">{user.Email_Address}</div>
            <div className="Status_heading">Status</div>
            <div className="Status">{user.Status}</div>
          </div>
        </div>
      )}
    </BaseLayout>
  );
}

"use client";
import Link from "next/link";
import BaseLayout from "../BaseLayout";


import {get, ref,} from 'firebase/database';
import { useState, useEffect } from 'react';
import { database } from "@/app/firebase/config";



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
  const [userId, setUserId] = useState<string>('U001'); // Default user ID
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
          console.log('No user data available');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
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
          <h1 className="UserProfile_Topic">User Profile</h1>
          <div className="UserProfile_TopBox">
            <img className="UserProfile_TopBox_Image" src="/Figures/UserProfileTopBoxImage.png" alt="TopBox_Image" />
            <div className="Name">{user.First_Name} {user.Last_Name}</div>
            <div className="TopBoxUserImage">
              <img className="UserImage_TopBox" src="/Figures/UserImage_TopBox.png" alt="UserImage" />
            </div>
          </div>
          {/* Personal Information Start */}
          <div className="PersonalInformationBox">
            <div className="PersonalInformation_Topic">Personal Information</div>
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
            <div className="PhoneNumber_heading">Phone Number</div>
            <div className="PhoneNumber">{user.Phone_Number}</div>
            <div className="Status_heading">Status</div>
            <div className="Status">{user.Status}</div>
          </div>
        </div>
      )}
      {/* Button to change user */}
      <button onClick={() => handleChangeUser('U002')}>Switch to User 2</button>
    </BaseLayout>
  );
}

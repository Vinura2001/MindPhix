import { useState, useEffect } from 'react';
import { auth, database } from '@/app/firebase/config';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ref, onValue } from "firebase/database";

interface UserDetails {
  User_Name: string;
}

function Logout() {
  const [userDetails, setUserDetails] = useState<UserDetails>({User_Name:""});

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const userId = currentUser.uid;
          const userRef = ref(database, `users/${userId}`);
          onValue(userRef, (snapshot) => {
            const userData = snapshot.val();
            setUserDetails(userData);
          });
        } else {
          console.warn('User is not authenticated.');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);
  
  return (
    <div className="mt-3">
      <Popover>
        <PopoverTrigger asChild className="cursor-pointer">
          <Avatar className="left-[1600%]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{userDetails?.User_Name}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-70 h-30 mr-5">
          <div className="flex flex-row">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>{userDetails?.User_Name}</AvatarFallback>
            </Avatar>

            <h2 className="text-normal font-normal mt-2.5 ml-2">
              {userDetails?.User_Name}
            </h2>
          </div>
          <hr className="mt-2" />
          <Link href="/">
            <Button className="text-sm text-white bg-blue-800 h-4 p-4 rounded-sm hover:bg-blue-900 content-center mt-5 ml-16">
              Logout
            </Button>{" "}
          </Link>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Logout;

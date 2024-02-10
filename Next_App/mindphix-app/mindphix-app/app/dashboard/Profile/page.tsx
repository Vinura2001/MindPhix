import Link from "next/link";
import BaseLayout from "../BaseLayout";


export default function Profile() {
  return(
    <BaseLayout>
      <div>
      {/*User Profile content Start*/}

        <h1 className="UserProfile_Topic">User Profile</h1>

        <div className="UserProfile_TopBox">
            <img className="UserProfile_TopBox_Image" src="/Figures/UserProfileTopBoxImage.png" alt="TopBox_Image" />
            <div className="Name">Steven Watson</div>

            <div className="TopBoxUserImage">
                <img className="UserImage_TopBox" src="/Figures/UserImage_TopBox.png" alt="UserImage" />
            </div>

            <Link href='/dashboard/Profile/EditProfile'>
              <button className="EditProfile_Button">Edit Profile</button>
            </Link>

        </div>

        {/*Personal Information Start*/}
        <div className="PersonalInformationBox">
            <div className="PersonalInformation_Topic">Personal Information</div>

            <div className="FirstName_heading">First Name</div>
            <div className="FirstName">Steven</div>

            <div className="LastName_heading">Last Name</div>
            <div className="LastName">Watson</div>

            <div className="UserName_heading">User Name</div>
            <div className="UserName">StevenWatson</div>

            <div className="DOB_heading">Date of Birth</div>
            <div className="DOB">1999/05/10</div>

            <div className="Gender_heading">Gender</div>
            <div className="Gender">Male</div>

            <div className="EmailAddress_heading">Email Address</div>
            <div className="EmailAddress">stevenwatson99@gmail.com</div>

            <div className="PhoneNumber_heading">Phone Number</div>
            <div className="PhoneNumber">+94 770975126</div>

            <div className="Status_heading">Status</div>
            <div className="Status">Active</div>
        </div>
      </div>
    </BaseLayout>
  );
}

import React, { FC, useEffect, useState } from "react";
import { userData } from "./Dashboard";
import { getUserDetails } from "../api/api";


export interface UserDetailsProps {
  userId?: string | any;
}

export const UserDetails: FC<UserDetailsProps> = ({ userId }) => {


  const [userDetails, setUserDetails] = useState<userData | null>(null);



  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const storedData = localStorage.getItem(userId);
        if (storedData) {
          setUserDetails(JSON.parse(storedData));
        } else {
          const userDetails = await getUserDetails(userId);
          setUserDetails(userDetails);
          localStorage.setItem(userId, JSON.stringify(userDetails));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  const renderUserDetails = () => {
    if (!userDetails) {
      return <div>Loading user details...</div>;
    }

    return (
        <div className="user-details">
          <h2>User Details</h2>
          <div>Username: {userDetails.userName}</div>
          <div>Username: {userDetails.profile.firstName}</div>{" "}
          <div>Username: {userDetails.profile.lastName}</div>{" "}
          <div>Username: {userDetails.userName}</div>{" "}
          <div>Username: {userDetails.userName}</div>
        </div>
     
    );
  };

  return <>{renderUserDetails()}</>;
};

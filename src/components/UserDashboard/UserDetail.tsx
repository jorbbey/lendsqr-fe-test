import React, {FC, useState, useEffect} from 'react';
import { userData } from "./Dashboard";
import { getUserDetails } from "../api/api";
import { Link } from 'react-router-dom';

export interface Props {
     userId?: string | any;
}


export const UserDetail: FC<Props> = ({ userId }) => {
     
      const [userDetails, setUserDetails] = useState<userData | any>(null);

      useEffect(() => {
        const fetchUserDetails = async (): Promise<void> => {
          try {
            const storedData = localStorage.getItem(userId);
            if (storedData) {
              setUserDetails(JSON.parse(storedData));
            } else {
              const userDetails: void | any = await getUserDetails(userId);
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
      };
    return (
   
        <div className="user-details">
          <h2>User Details</h2>
          <div>Username: {userDetails.userName}</div>
          <div>First Name: {userDetails.profile.firstName}</div>{" "}
          <div>Last Name: {userDetails.profile.lastName}</div>{" "}
          <Link to="/user-detail">click to view full details</Link>
        </div>
  );
};

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchUserDetail } from "./data";
import { userDetailsNav } from "./data";

interface User {
      name: string;
      bank_account: string;
      tier: string;
      account_balance: string;
};

interface Socials {
  facebook: string;
  instagram: string;
  twitter: string;
}

interface PersonalInformation{
  bvn: string;
  children: string;
  email_address: string;
  full_name: string;
  gender: string;
  phone_number: string;
  marital_status: string;
  type_of_residence: string;
}

interface Guarantors {
  full_name: string;
  relationship: string;
  phone_number: string;
  email_address: string;
}[]

interface EducationAndEmployment { 
  duration_of_employment: string;
  employment_status: string;
  level_of_education: string;
  loan_repayment: string;
  monthly_income: string[];
  office_email: string;
  sector_of_employment: string;
}

interface UserProfile { 
  user: User;
  socials: Socials;
  personal_information: PersonalInformation;
  guarantors: Guarantors[];
  education_and_employment: EducationAndEmployment;
}

interface ProfileResponse {
  profiles: UserProfile[];
  error: string | null;
}

type Props = {
  activeUserdetails: boolean;
  setActiveUserdetails: (active: boolean) => void;
};

const UserDetails = (props: Props) => {
  const [userDetail, setUserDetail] = useState<ProfileResponse | null>();

  const navigate = useNavigate()

  const handleClick = () => {
    props.setActiveUserdetails(false)
    navigate("/dashboard")
  }

  useEffect(() => {
    fetchUserDetail()
    // Load data from localStorage
    const storedData = localStorage.getItem("userDetails");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        console.log(parsedData);  
        setUserDetail(parsedData);
      } catch (error) {
        console.error("Error parsing stored data:", error);
      }
    }
  }, []);

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <div>
        {userDetailsNav.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <Link to="/dashboard">Go to Dashboard</Link>
      {userDetail &&
        userDetail.profiles.map((item: UserProfile, index: number) => (
          <p key={index}>{item.user.name}</p>
        ))}
    </>
  );
};

export default UserDetails;

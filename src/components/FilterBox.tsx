import React, { FC } from "react";
import { FaAngleDown } from "react-icons/fa";
import "../styles/UserDashboard.scss";
export interface Props {}

export const FilterBox: FC = () => {
  const angleDownIcon = <FaAngleDown />;
  const filterItems: any[] = [
    {
      name: "Organization",
      inputType: "text",
      placeholder: { angleDownIcon },
    },
    {
      name: "username",
      inputType: "text",
      placeholder: "User",
    },
    {
      name: "email",
      inputType: "email",
      placeholder: "Email",
    },
    {
      name: "date",
      inputType: "date",
      placeholder: { angleDownIcon },
    },
    {
      name: "phone number",
      inputType: "number",
      placeholder: "Phone Number",
    },
    {
      name: "status",
      inputType: "text",
      placeholder: { angleDownIcon },
    },
  ];
  return (
    <div className="filter-box">
      {filterItems.map((item) => (
        <div key={item}>
          <label htmlFor="">{item.name}</label>
          <input type={item.inputType} placeholder={angleDownIcon} />
        </div>
      ))}
      <div className="btn-ctn">
        <button>reset</button>
        <button>filter</button>
      </div>
    </div>
  );
};

import React, { FC } from "react";
import { FaAngleDown } from "react-icons/fa";
import "../../scss/style.scss";

 interface holder {
  name?: string;
  inputType?: string;
   placeholder?: any;
}

export const FilterBox: FC = () => {
  const angleDownIcon = <FaAngleDown />;

  const filterItems: holder[]  = [
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
      {filterItems.map((item: holder) => (
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

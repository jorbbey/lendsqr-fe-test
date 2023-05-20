import React from "react";
import "../styles/Dashboard.scss";
import { CgSortAz } from "react-icons/cg";

export interface userData {
  id: number;
  userName: string;
}

export interface paginationProps {
  page: number;
  pageSize: number;
  data: userData[];
}

export const Dashboard: React.FC<paginationProps> = ({
  page,
  pageSize,
  data,
}) => {
  // Calculate the start and end indices for the current page
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  // Get the current page items based on the calculated indices
  const currentPageItems = data ? data.slice(startIndex, endIndex) : [];

  const tableHead: string[] = [
    "organization",
    "username",
    "email",
    "phone number",
    "date joined",
    "status",
  ];

  return (
    <div className="dashboard-ctn">
      <nav className="table-head">
        {tableHead.map((head) => (
          <div key={head}>
            <h5>{head}</h5>
            <CgSortAz className="ico" />
          </div>
        ))}
      </nav>
      {/* Display the data */}
      {currentPageItems.length > 0 ? (
        <ul>
          {currentPageItems.map((user: any) => (
            <div key={user.id} className="dashboard-item">
              <div>{user.orgName}</div>
              <div>{user.userName}</div>
              <div>{user.email}</div>
              <div>{user.phoneNumber}</div>
              <div>{user.createdAt}</div>
              <div>Inactive</div>
            </div>
          ))}
        </ul>
      ) : (
        <p>No items to display.</p>
      )}
    </div>
  );
};

import React, { FC, useState } from "react";
import "../../scss/style.scss";
import { CgSortAz } from "react-icons/cg";
import "../../styles/Dashboard.scss";

export interface userData {
  id: number;
  userName: string;
  profile: any;
}

export interface Props {
  page: number;
  pageSize: number;
  data: userData[];
  filterFunc: () => void;
  setSelectedUserId: (id: string | null) => void;
}

export const Dashboard: FC<Props> = ({
  page,
  pageSize,
  data,
  filterFunc,
  setSelectedUserId,
}) => {
  const [openBox, setOpenBox] = useState<boolean>(false);
  // Calculate the start and end indices for the current page
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  // Get the current page items based on the calculated indices
  const currentPageItems = data ? data.slice(startIndex, endIndex) : [];

  const tableHead: string[] = [
    "organization",
    "username",
    "email",
    "phone no.",
    "date joined",
    "status",
  ];

  const handleOPenBox = (): any | undefined => {
    setOpenBox(!openBox);
  };

  const handleUserClick = (userId: string) => {
    setSelectedUserId(userId);
  };

  return (
    <div>
      <div className="table-head">
        {tableHead.map((head) => (
          <div key={head}>
            <h5>
              {head}
              <CgSortAz className="ico" onClick={filterFunc} />
            </h5>
          </div>
        ))}
      </div>
      <div className="dashboard-ctn">
        {/* Display the data */}

        {currentPageItems.map((user: any) => (
          <div key={user.id} className="dashboard-item">
            <div>{user.orgName}</div>
            <div>{user.userName}</div>
            <div>{user.email}</div>
            <div>{user.phoneNumber}</div>
            <div>{user.createdAt}</div>
            <div>
              Inactive <span onClick={() => handleOPenBox()}>...</span>
              {openBox ? (
                <div
                  className="alert-box"
                  style={
                    openBox === true
                      ? { position: "absolute" }
                      : { position: "static" }
                  }
                >
                  <span onClick={() => handleUserClick(user.id.toString())}>
                    <i>me</i> <p>view details</p>
                  </span>
                  <span>
                    <i>me</i> <p>blacklist user</p>
                  </span>
                  <span>
                    <i>me</i> <p>activate user</p>
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

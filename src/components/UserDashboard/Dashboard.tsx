import React, { FC, useState } from "react";
import "../../scss/style.scss";
import { CgSortAz } from "react-icons/cg";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { UserDetails } from "./UserDetails";

export interface userData {
  id: number;
  userName: string;
  profile?: any;
}

export interface Props {
  page: number;
  pageSize: number;
  data: userData[];
  // setSelectedUserId: (id: string | null) => void;
}

export const Dashboard: FC<Props> = ({ page, pageSize, data }) => {
  const [openBox, setOpenBox] = useState<boolean>(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  // Calculate the start and end indices for the current page
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  // Get the current page items based on the calculated indices
  const currentPageItems = data ? data.slice(startIndex, endIndex) : [];

  

  const handleOPenBox = (): any | undefined => {
    setOpenBox(!openBox);
  };

  const handleUserClick = (userId: string) => {
    setSelectedUserId(userId);
  };

  return (
    <section>
      <div className="dashboard-ctn">
       
        {/* Display the data */}
        <section className="dashboard-items">
          <div className="dashboard-item">
            {currentPageItems.map((user: any) => (
              <section className="item">
                <div>{user.orgName}</div>
                <div>{user.userName}</div>
                <div>{user.email}</div>
                <div>{user.phoneNumber}</div>
                <div>{user.createdAt}</div>
                <div>Inactive</div>
              </section>
            ))}
          </div>

          {/* <div className="alertToggle">
            {currentPageItems.map((item: any) => (
              <span onClick={() => handleOPenBox()}>
                <BiDotsVerticalRounded />
              </span>
            ))}
          </div> */}
        </section>

        {/* <div className="alertCtn">
          {openBox ? (
            <div
              className="alertCtn__box"
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
        </div> */}
      </div>

      {selectedUserId && <UserDetails userId={selectedUserId} />}
    </section>
  );
};

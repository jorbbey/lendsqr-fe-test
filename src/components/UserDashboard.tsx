import React, { FC, useState, useEffect } from "react";
import "../styles/UserDashboard.scss";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { UserBox } from "./UserBox";
import { FilterBox } from "./FilterBox";
import { Pagination } from "./Pagination";
import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { Dashboard } from "./Dashboard";

const usersAPI =
  "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users ";

export interface User {
  id: string;
  userName: string;
}

export interface userData {
  id: number;
  userName: string;
}

export const UserDashboard: FC = () => {
  const [items, setItems] = useState<any[]>([]);
  let [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [data, setData] = useState<userData[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9; // Number of objects to display per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem("apiData");
        if (storedData) {
          setData(JSON.parse(storedData));
        } else {
          const response = await fetch("usersAPI ");
          const fetchedData = await response.json();
          console.log(fetchData);

          setData(fetchedData);

          // Save the fetched data in localStorage
          localStorage.setItem("apiData", JSON.stringify(fetchedData));
        }
      } catch (error) {
        // Handle the error
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const userIcon = <HiOutlineUsers />;
  const activeUserIcon = <HiOutlineUserGroup />;
  const userColor = "rgb(165, 57, 165)";
  const activeUserColor = "rgb(37, 37, 167)";
  const loanedUserColor = "rgb(241, 73, 11)";
  const savingsUserColor = "rgb(221, 13, 83)";

  return (
    <div className="UserDashboard">
      <Header />
      {/* User dashboard container */}
      <div className="user-dashboard-ctn">
        {/* menu bar */}
        <aside>
          <Menu />
        </aside>

        {/* main dashboard container */}
        <main>
          <div>
            <h2>Users</h2>
            <div className="users-box-ctn">
              <UserBox
                icon={userIcon}
                iconColor={userColor}
                text="Users"
                num="2,453"
              />
              <UserBox
                icon={activeUserIcon}
                iconColor={activeUserColor}
                text="Active users"
                num="2,453"
              />
              <UserBox
                icon={userIcon}
                iconColor={loanedUserColor}
                text="Users wih loans"
                num="12,453"
              />
              <UserBox
                icon={userIcon}
                iconColor={savingsUserColor}
                text="Users with savings"
                num="102,453"
              />
            </div>

            {/* main dashboard container */}
            <div className="dashboard">
              <div>
                <Dashboard data={data} page={currentPage} pageSize={pageSize} />
                <div className="dashboard-footer">
                  <div>
                    <h2>showing me</h2>
                  </div>
                  <Pagination
                    totalPages={Math.ceil(data.length / pageSize)}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>

              {isFilterOpen ? (
                <div className="filter-ctn">
                  <FilterBox />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

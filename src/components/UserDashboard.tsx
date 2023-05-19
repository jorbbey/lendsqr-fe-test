import React, { FC, useState, useEffect } from "react";
import "../styles/UserDashboard.scss";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { UserBox } from "./UserBox";
import { Pagination } from "./Pagination";
import { CgSortAz } from "react-icons/cg";
const usersAPI =
  "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users ";

export interface User {
  id: string;
  userName: string;
}

const PAGE_SIZE = 10; // Number of objects to display per page

export const UserDashboard: FC = () => {
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(usersAPI);
        const data: User[] = await response.json();
        console.log(data);

        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Pagination-related state and functions
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Number of items to display per page

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const tableHead: string[] = [
    "organization",
    "username",
    "email",
    "phone number",
    "date joined",
    "status",
  ];

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
              <UserBox icon="we" text="Users" num="2,453" />
              <UserBox icon="we" text="Active users" num="2,453" />
              <UserBox icon="we" text="Users wih loans" num="12,453" />
              <UserBox icon="we" text="Users with savings" num="102,453" />
            </div>

            {/* main dashboard container */}
            <div className="dashboard">
              <nav className="table-head">
                {tableHead.map((head) => (
                  <div key={head}>
                    <h5>{head}</h5>
                    <CgSortAz />
                  </div>
                ))}
              </nav>
              {items
                .slice((currentPage - 1) * pageSize, currentPage * pageSize)
                .map((user) => (
                  <div key={user.id}>{user.userName}</div>
                ))}

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(items.length / pageSize)}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

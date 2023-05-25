import React, { FC, useState, useEffect } from "react";
import "../../scss/style.scss";
import { Header } from "../Header/Header";
import { Menu } from "./Menu/Menu";
import { UserBox } from "./UserBox";
import { FilterBox } from "./FilterBox";
import { Pagination } from "./Pagination";
import { Dashboard } from "./Dashboard";
import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa";
import { UserDetails } from "./UserDetails";
import { Link } from "react-router-dom";

const usersAPI =
  "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

export interface User {
  id: string;
  userName: string;
}

export interface userData {
  id: number;
  userName: string;
}

export const DashboardCtn: FC = () => {
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
          const response = await fetch(usersAPI);
          const fetchedData = await response.json();
          console.log(fetchData);
          setData(fetchedData);
          localStorage.setItem("apiData", JSON.stringify(fetchedData));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (!data) {
    return <div>Loading dashboard...</div>;
  }

  const handleFilterToggle = (): any => {
    setIsFilterOpen(!isFilterOpen);
  };


  const userIcon = <HiOutlineUsers />;
  const activeUserIcon = <HiOutlineUserGroup />;
  const userColor = "rgb(165, 57, 165)";
  const activeUserColor = "rgb(37, 37, 167)";
  const loanedUserColor = "rgb(241, 73, 11)";
  const savingsUserColor = "rgb(221, 13, 83)";

  return (
    //  user dashboard container
    <div className="dashboardCtn">
      <Header />
      {/* menu bar */}
      <div className="dashboardCtn__div">
        <aside>
          <Menu />
        </aside>

        {/* main dashboard container */}
        <section className="dashboardCtn__div__main">
          <h2>Users</h2>
          <div className="dashboardCtn__div__main__userBoxCtn">
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

          {/* main dashboard */}
          <div className="dashboardCtn__div__main__dashboard">
            <Dashboard
              data={data}
              page={currentPage}
              pageSize={pageSize}
              filterFunc={handleFilterToggle}
            />

            <div className="dashboardCtn__div__main__dashboard__footer">
              <div className="page-num">
                <p>
                  Showing
                  <span>
                    100 <FaAngleDown className="ico" />
                  </span>
                  out of 100
                </p>
              </div>
              <div className="pagination-ctn">
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
        </section>
      </div>
    </div>
  );
};

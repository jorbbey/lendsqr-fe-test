import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "./data";
import { userHead } from "./data";
import { IoFilterOutline } from "react-icons/io5";
import { AiOutlineMore } from "react-icons/ai";
import Filter from "./modals/Filter";

interface UserInterface {
  organization: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: string;
  status: string;
}

type Props = {
  head: string[];
  activeUserdetails: boolean;
  setActiveUserdetails: (active: boolean) => void;
};

// Create a mapping for headers to match UserInterface keys
const headerToFieldMap: { [key: string]: keyof UserInterface } = {
  organization: "organization",
  username: "username",
  email: "email",
  "phone number": "phone_number",
  "date joined": "date_joined",
  status: "status",
};

const Table = ({ head, activeUserdetails, setActiveUserdetails }: Props) => {
  const [usersData, setUsersData] = useState<UserInterface[]>([]);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const navigate = useNavigate();

  // Navigate to the UserDetails page if `activeUserdetails` becomes true
  useEffect(() => {
    if (activeUserdetails) {
      navigate("/user_details");
    } else {
      navigate("/dashboard");
    }
  }, [activeUserdetails, navigate]);

  const getAllData = async () => {
    const { data, error } = await fetchData();
    if (error) {
      console.error("Error fetching data:", error);
      return;
    }
    setUsersData(data.users);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="table">
      {userHead.map((head) => (
        <div key={head} className="table__section">
          <div className="table__section__head">
            <h3>{head}</h3>
            <i>
              <IoFilterOutline
                onClick={() =>
                  setActiveFilter(activeFilter === head ? null : head)
                }
              />
            </i>
          </div>

          {/* Render user data */}
          {usersData.map((user) => (
            <div className="table__section__body" key={user.username}>
              {headerToFieldMap[head] === "status" ? (
                <div>
                  <p>{user.status}</p>
                  <i>
                    <AiOutlineMore onClick={() => setActiveUserdetails(true)} />
                  </i>
                </div>
              ) : (
                <p>{user[headerToFieldMap[head]]}</p>
              )}
            </div>
          ))}
        </div>
      ))}

      {/* Render Filter component if a filter is active */}
      {activeFilter && (
        <div className="table__section__filter">
          <Filter />
        </div>
      )}
    </div>
  );
};

export default Table;

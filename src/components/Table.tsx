import React, {useState, useEffect} from 'react'
import { fetchData } from './data'
import { userHead } from './data'

interface User {
  organization: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: string;
  status: string;
}

type Props = {
  head: string[]
}

const Table = (props: Props) => {

  const [usersData, setUsersData] = useState<User[]>([])
  
   const getAllData = async () => {
     const { data, error } = await fetchData();
     console.log(data.users);
     setUsersData(data.users);
   };

   useEffect(() => {
     getAllData();
   }, []);
  
  return (
    <div className="table">
      <div className="table__head">
        {userHead.map((head) => (
          <div className="table__head__item" key={head}>
            <p>{head}</p>
          </div>
        ))}
      </div>
      <div className="table__body">
        {usersData.map((user: User) => (
          <div className="table__body__item" key={user.username}>
            <p>{user.organization}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone_number}</p>
            <p>{user.date_joined}</p>
            <p>{user.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table
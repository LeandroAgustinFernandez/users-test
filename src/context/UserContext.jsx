import { createContext, useEffect, useState } from "react";
import { getUsersFromApi } from "../assets/users";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersFromApi().then((data) => setUsers(data));
  }, []);

  const handleSearch = (filter) => {
    if (filter) {
      return users.filter(
        ({ name, email, address }) =>
          name.toLocaleLowerCase().includes(filter) ||
          email.toLocaleLowerCase().includes(filter) ||
          address.city.toLocaleLowerCase().includes(filter)
      );
    }
    return users;
  };

  return (
    <UserContext.Provider value={{users, handleSearch}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

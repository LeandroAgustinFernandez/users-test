import { createContext, useEffect, useState } from "react";
import { getUsersFromApi } from "../assets/users";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setIsLoading(true);
    getUsersFromApi()
      .then((data) => {
        data?.error ? setError(data.error) : setUsers(data);
      })
      .then(() => {
        setIsLoading(false);
      });
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
    <UserContext.Provider value={{ users, handleSearch, isLoading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

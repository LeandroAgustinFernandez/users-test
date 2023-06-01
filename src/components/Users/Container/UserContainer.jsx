import { useContext, useEffect, useState } from "react";
import UserCard from "../Card/UserCard";
import "./UserContainer.css";
import UserContext from "../../../context/UserContext";

const UserContainer = ({ filter }) => {
  const { handleSearch } = useContext(UserContext);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    let users = handleSearch(filter);
    setFilteredUsers(users);
  }, [handleSearch, filter]);

  return (
    <section className="user_container">
      {filteredUsers?.length > 0 ? (
        filteredUsers.map((user) => <UserCard user={user} key={user.id} />)
      ) : (
        <div className="information">
          <p className="information_text">
            No existe un usuario para la busqueda realizada.
          </p>
        </div>
      )}
    </section>
  );
};

export default UserContainer;

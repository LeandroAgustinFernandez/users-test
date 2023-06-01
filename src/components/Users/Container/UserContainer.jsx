import { useContext, useEffect, useState } from "react";
import UserCard from "../Card/UserCard";
import Message from "../../Messages/Message";
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
        <Message msg="No existe un usuario para la busqueda realizada."/>
      )}
    </section>
  );
};

export default UserContainer;

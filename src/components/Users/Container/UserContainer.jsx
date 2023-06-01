import { useContext, useEffect, useState } from "react";
import UserCard from "../Card/UserCard";
import Message from "../../Messages/Message";
import "./UserContainer.css";
import UserContext from "../../../context/UserContext";
import Loading from "../../Loading/Loading";

const UserContainer = ({ filter }) => {
  const { handleSearch, isLoading, error } = useContext(UserContext);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    let users = handleSearch(filter);
    setFilteredUsers(users);
  }, [handleSearch, filter]);

  return (
    <section>
      {isLoading ? (
        <Loading />
      ) : (
        <article className="user_container">
          {error ? (
            <Message msg={error} />
          ) : filteredUsers?.length > 0 ? (
            filteredUsers?.map((user) => <UserCard user={user} key={user.id} />)
          ) : (
            <Message msg="No existe un usuario para la busqueda realizada." />
          )}
        </article>
      )}
    </section>
  );
};

export default UserContainer;

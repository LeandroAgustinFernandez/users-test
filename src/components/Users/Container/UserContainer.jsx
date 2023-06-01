import { useEffect, useState } from "react";
import UserCard from "../Card/UserCard";
import './UserContainer.css'

const UserContainer = ({ users, filter }) => {
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    if (filter) {
      setFilteredUsers(
        users.filter(
          (user) =>
            user.name.toLocaleLowerCase().includes(filter) ||
            user.email.toLocaleLowerCase().includes(filter) ||
            user.address.city.toLocaleLowerCase().includes(filter)
        )
      );
    } else {
      setFilteredUsers(users);
    }
    console.log();
  }, [filter, users]);

  return (
    <section className="user_container">
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => <UserCard user={user} key={user.id} />)
      ) : (
        <div className="information">
          <p className="information_text">No existe un usuario para la busqueda realizada.</p>
        </div>
      )}
    </section>
  );
};

export default UserContainer;

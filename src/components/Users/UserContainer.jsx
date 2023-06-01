import { useEffect, useState } from "react";
import UserCard from "./UserCard";

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
  }, [filter, users]);

  return (
    <section>
      {filteredUsers.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </section>
  );
};

export default UserContainer;

import React from "react";

const UserCard = ({ user }) => {
  return (
    <article>
      {user.name}
      {user.username}
      {user.email}
      {user.address.city}
      {user.phone}
      {user.company.name}
    </article>
  );
};

export default UserCard;

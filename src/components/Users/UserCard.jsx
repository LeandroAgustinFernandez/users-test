import React from "react";

const UserCard = ({ user }) => {
  return (
    <article>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
      <p>{user.phone}</p>
      <p>{user.company.name}</p>
    </article>
  );
};

export default UserCard;

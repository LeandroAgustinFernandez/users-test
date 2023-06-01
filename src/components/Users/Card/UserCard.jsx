import './UserCard.css'

const UserCard = ({ user }) => {
  return (
    <article className="user_card">
      <h3 className='user_card-name'>{user.name}</h3>
      <span className='user_card-username'>Username: {user.username}</span>
      <div className='user_card-personalinfo'>
        <p><i className="fa-solid fa-envelope fa-lg"></i> {user.email}</p>
        <p><i className="fa-solid fa-location-dot fa-lg"></i> {user.address.city}</p>
        <p><i className="fa-solid fa-phone fa-lg"></i> {user.phone}</p>
        <p><i className="fa-solid fa-building fa-lg"></i> {user.company.name}</p>
      </div>
    </article>
  );
};

export default UserCard;

import { useEffect, useState } from "react";
import getUsersFromApi from "../../assets/users";
import UserContainer from "../../components/Users/UserContainer";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersFromApi().then((data) => setUsers(data));
  }, []);

  return (
    <main>
      <UserContainer users={users} />
    </main>
  );
};

export default Home;

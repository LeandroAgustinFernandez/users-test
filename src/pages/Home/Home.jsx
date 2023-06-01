import { useEffect, useState } from "react";
import getUsersFromApi from "../../assets/users";
import UserContainer from "../../components/Users/UserContainer";
import Search from "../../components/Search/Search";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    getUsersFromApi().then((data) => setUsers(data));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value.toLocaleLowerCase());
  };

  return (
    <main>
      <Search inputChange={handleChange} />
      <UserContainer users={users} filter={search} />
    </main>
  );
};

export default Home;

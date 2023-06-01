import { useEffect, useState } from "react";
import { getUsersFromApi } from "../../assets/users";
import UserContainer from "../../components/Users/Container/UserContainer";
import Search from "../../components/Search/Search";
import "./Home.css";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    getUsersFromApi().then((data) => setUsers(data));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value.trim().toLocaleLowerCase());
  };

  return (
    <main className="container">
      <Search inputChange={handleChange} />
      {users.length > 0 ? (
        <UserContainer users={users} filter={search} />
      ) : (
        <div className="information">
          <p className="information_text">
            Hubo un error al cargar la información.
          </p>
        </div>
      )}
    </main>
  );
};

export default Home;

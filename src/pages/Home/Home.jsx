import { useState } from "react";
import UserContainer from "../../components/Users/Container/UserContainer";
import Search from "../../components/Search/Search";
import "./Home.css";

const Home = () => { 
  const [search, setSearch] = useState();

  const handleChange = (e) => {
    setSearch(e.target.value.trim().toLocaleLowerCase());
  };

  return (
    <main className="container">
      <Search inputChange={handleChange} />
      <UserContainer filter={search}/>
    </main>
  );
};

export default Home;

import './Search.css'

const Search = ({ inputChange }) => {
  return (
    <section className="search-container">
      <article>
        <input className='searchInput' type="text" onKeyUp={inputChange} placeholder='Search by Name, Email and City...'/>
      </article>
    </section>
  );
};

export default Search;

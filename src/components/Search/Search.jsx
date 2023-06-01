import './Search.css'

const Search = ({ inputChange }) => {
  return (
    <section className="search-container">
      <article>
        <input className='searchInput' type="text" onKeyUp={inputChange} placeholder='Ingrese su busqueda...'/>
      </article>
    </section>
  );
};

export default Search;

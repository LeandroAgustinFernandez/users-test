import React from "react";

const Search = ({ inputChange }) => {
  return (
    <section>
      <article>
        <input type="text" onKeyUp={inputChange} />
      </article>
    </section>
  );
};

export default Search;

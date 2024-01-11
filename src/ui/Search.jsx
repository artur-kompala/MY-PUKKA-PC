import styled from "styled-components";

function Search() {
  



  return (
    <form onSubmit="event.preventDefault();" role="search">
      <input id="search" type="search" placeholder="Search..." required />
      <button type="submit">Go</button>
    </form>
  );
}

export default Search;

import React from 'react'
import { Container } from 'react-bootstrap';

const SearchForm = ({setSearch}) => {
  return (
    <Container className="m-5">
    <div className="input-group">
      <div className="form-outline">
        <input type="search" id="form1" className="form-control" onChange={(e)=>{
          setSearch(e.target.value)}
        }  />
        <label className="form-label" htmlFor="form1">
          Search
        </label>
      </div>
    </div>
    </Container>
  );
}

export default SearchForm

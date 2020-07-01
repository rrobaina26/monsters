import React from 'react';
import './searchbox.style.css'

const SearchBox = ({placeHolder, handleChange}) => {
    return <input className="search"
    type="search"
    onChange={handleChange}
    placeholder={placeHolder}
  />;
}
 
export default SearchBox;
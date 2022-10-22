import React from "react";
import "./SearchBox.style.css";

const SearchBox = ({ placeholder, handleChange }) => {
   return (
      <div>
         <input
            className="search"
            type="search"
            name="search"
            id="search"
            placeholder={placeholder}
            onChange={handleChange}
         />
      </div>
   );
};

export default SearchBox;

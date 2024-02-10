import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function SearchBar({
  placeholder,
  buttonText,
  divClassName,
  inputClassName,
  buttonClassName,
  name,
}) {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const search = () => {
    if(query)
    navigate(`/search/query=${query}`);
  };

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={divClassName}>
      <input
        type="text"
        name={name}
        onChange={handleOnChange}
        placeholder={placeholder}
        className={inputClassName}
      />
      <button className={buttonClassName} onClick={search}>
        {buttonText}
      </button>
    </div>
  );
}

export default SearchBar;

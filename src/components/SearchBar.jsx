/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchBar({
  placeholder,
  buttonText,
  inputClassName,
  buttonClassName,
  name,
}) {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const search = () => {
    if (query) navigate(`/search/query=${query}`);
  };

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
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
    </>
  );
}

export default SearchBar;

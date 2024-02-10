import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function SearchBar({
  placeholder,
  buttonText,
  divClassName,
  inputClassName,
  buttonClassName,
  value,
  name,
}) {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const search = () => {
    navigate(`SearchPage/?query=${query}`);
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
        value={value}
      />
      <button className={buttonClassName} onClick={search}>
        {buttonText}
      </button>
    </div>
  );
}

export default SearchBar;
